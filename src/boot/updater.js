import { boot } from 'quasar/wrappers'
import { Dialog, Loading } from 'quasar'

let registration = null
let refreshing = false
let interval = null

export default boot(async () => {
  if (process.env.DEV || !navigator.serviceWorker) return

  // This event fires when the service worker has changed, e.g. new service worker has skipped waiting & become the new active worker
  navigator.serviceWorker.addEventListener('controllerchange', reload)

  registration = await navigator.serviceWorker.getRegistration()
  if (!registration) return

  registration.addEventListener('updatefound', () => {
    clearInterval(interval)
    // A wild service worker has appeared in reg.installing!
    const installingWorker = registration.installing

    installingWorker.addEventListener('statechange', () => {
      // "installing" -> "installed": install is completed
      if (installingWorker.state === 'installed') onInstalled()
    })
  })

  if (registration.waiting) setTimeout(onInstalled, 500)
  else startUpdateInteval()
})

function reload () {
  if (refreshing) return
  refreshing = true
  window.location.reload()
}

function startUpdateInteval () {
  clearInterval(interval)
  interval = setInterval(async () => {
    try {
      await registration.update()
    } catch {}
  }, 15 * 1000)
}

function onInstalled () {
  Dialog.create({
    message: 'New version available - install now ?',
    position: top,
    cancel: true
  }).onOk(() => {
    Loading.show({ message: 'Restarting...' })
    if (registration.waiting) registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    else reload()
  }).onCancel(startUpdateInteval)
}
