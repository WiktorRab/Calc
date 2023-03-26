<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title>
          Calc App
        </q-toolbar-title>
        <CalcBtn @click="visible = !visible" style="height: 40px;" icon="history" flat />
        <div>v1.0.1</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-model="visible" />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import CalcBtn from 'src/components/CalcBtn.vue'
import { ref } from 'vue'

const visible = ref(false)
</script>
