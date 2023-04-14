<template>
  <h2 class="text-2xl font-bold leading-6 my-4 text-center">Favorites</h2>
  <section class="grid grid-cols-1 min-[1220px]:grid-cols-2 3xl:grid-cols-3">
    <CharacterTile v-for="character of favoriteCharacters" :character="character" />
  </section>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import type { Character } from '@/types'
import { useFavorites } from '@/composables/useFavorites'
import { useCharacterApi } from '@/composables/useCharacterApi'
import CharacterTile from '@/components/molecules/CharacterTile.vue'

const { getStoredFavorites } = useFavorites()
const { fetchCharactersById } = useCharacterApi()

const favoriteIds = ref(getStoredFavorites())

const favoriteCharacters = ref<Character[]>()

onBeforeMount(async () => {
  favoriteCharacters.value = await fetchCharactersById(favoriteIds.value)
})
</script>