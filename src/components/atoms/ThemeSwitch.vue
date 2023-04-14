<template>
  <div class="text-center">
    <div class="inline">Theme:</div>
    <select v-model="activeTheme">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const STORAGE_KEY = 'rt-theme'
const themeFromStorage = localStorage.getItem(STORAGE_KEY)
const activeTheme = ref(themeFromStorage || 'light')

if (activeTheme.value === 'dark') {
  document.body.classList.add('dark')
}

watch(activeTheme, (newValue, _oldValue) => {
  if (newValue === 'dark') {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
  localStorage.setItem(STORAGE_KEY, newValue)
})
</script>