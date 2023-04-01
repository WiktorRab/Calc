<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="column justify-end q-gutter-y-sm" style="height: 90vh ">
        <q-item class="bg-grey-3 q-mx-sm">
          <q-item-section
            class="text-h4 text-bold"
            style="width: 85vw; max-width: 350px; height: 30vh; word-break: break-all; justify-content: unset;"
          >
            {{ wartosc }}
          </q-item-section>
        </q-item>
        <div class="row justify-between q-mx-sm">
          <CalcBtn @click=" onOperator('%') " class="bg-blue-4" icon="%"/>
          <CalcBtn @click="wartosc = wartosc +  'π' " class="bg-blue-4" icon="π"/>
          <CalcBtn @click="wartosc +='('" class="bg-blue-4" label="("/>
          <CalcBtn @click="wartosc +=')'" class="bg-blue-4" label=")"/>
        </div>
        <div class="row justify-between q-mx-sm">
          <CalcBtn @click="wartosc=''" class="bg-blue-4" label="AC"/>
          <CalcBtn @click="wartosc !== '' && (wartosc += '^')" class="bg-blue-4" label="^"/>
          <CalcBtn @click="wartosc +='√('" class="bg-blue-4" icon="√"/>
          <CalcBtn @click="onOperator('/')" class="bg-blue-4" label="/"/>
        </div>
        <div class="row justify-between q-mx-sm">
          <CalcBtn @click="wartosc +='7'" label="7"/>
          <CalcBtn @click="wartosc +='8'" label="8"/>
          <CalcBtn @click="wartosc +='9'" label="9"/>
          <CalcBtn @click="onOperator('*')" icon="close" class="bg-blue-4"/>
        </div>
        <div class="row justify-between q-mx-sm">
          <CalcBtn @click="wartosc +='4'" label="4"/>
          <CalcBtn @click="wartosc +='5'" label="5"/>
          <CalcBtn @click="wartosc +='6'" label="6"/>
          <CalcBtn @click="onOperator('-')" icon="remove" class="bg-blue-4"/>
        </div>
        <div class="row justify-between q-mx-sm">
          <CalcBtn @click="wartosc +='1'" label="1"/>
          <CalcBtn @click="wartosc +='2'" label="2"/>
          <CalcBtn @click="wartosc +='3'" label="3"/>
          <CalcBtn @click="onOperator('+')" icon="add" class="bg-blue-4"/>
        </div>
        <div class="row justify-between q-mx-sm">
          <CalcBtn @click="wartosc.endsWith(',') || (wartosc +=',')" label=","/>   <!-- || oznacza ze jezeli to po lewej jest prawda nie wykona tego po prawej i na odwrot -->
          <CalcBtn @click="wartosc +='0'" label="0"/>
          <CalcBtn @click="wartosc = wartosc.slice(0,-1)" icon="backspace" class="bg-blue-4"></CalcBtn>
          <CalcBtn @click="wartosc !== '' && oblicz()" icon="drag_handle" class="bg-blue-4"/>
        </div>
      </div>

            <!-- <div class="q-pa-md q-gutter-sm bg-blue" v-if="visible"> -->
          <q-dialog :modelValue="modelValue" @update:modelValue="v => $emit('update:modelValue', v)" >
            <q-card style="width: 95vw" >
                <q-card-section >
                  <div class="text-h6">History of calculations</div>
                </q-card-section>

              <q-separator />

                <q-virtual-scroll
                   style="height: 60vh;"
                  :items="todos"
                  separator
                  v-slot="{ item, index }"
                 >
                      <q-item :key="index" dense>
                             <q-item-section>
                                 <q-item-label class="text-h6">
                                   {{ item }}
                                 </q-item-label>
                              </q-item-section>
                       </q-item>
                    </q-virtual-scroll>
              <q-separator />

                <q-card-actions class="justify-around">
                    <q-btn  label="close" color="blue-4" v-close-popup />
                    <q-btn @click="todos=[] " icon="delete" color="red"/>
                </q-card-actions>
            </q-card>
          </q-dialog>
          </div>
      <!-- </div> -->
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import CalcBtn from 'src/components/CalcBtn.vue'
// import CalcDialog from 'src/components/CalcDialog.vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const wartosc = ref('')

defineProps({
  modelValue: Boolean
})
defineEmits(['update:modelValue'])

function oblicz () {
  try {
    const current = wartosc.value
    wartosc.value = String(eval(wartosc.value.replace(/,/g, '.').replace('^', '**').replace('π', '3.1415926536').replace('%', '/100').replace(/√[(](.+?)[)]/g, 'Math.sqrt($1)'))).replace('.', ',') // eslint-disable-line no-eval

    if (current.match(/[+*/^%]/)) todos.value.push(`${current} = ${wartosc.value}`)
  } catch { $q.notify({ message: 'error', color: 'negative' }) }
}
function onOperator (op) {
  if ((wartosc.value.match(/^[-]?$/) && op.match(/[+*/^%]/)) || wartosc.value.endsWith(op)) return

  if (wartosc.value.match(/[^0-9%()π]$/)) wartosc.value = wartosc.value.slice(0, -1) + op
  else wartosc.value += op
}
const todos = ref([])

</script>
