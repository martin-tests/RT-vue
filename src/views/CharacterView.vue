
<template>
  <div v-if="character">
    <CharacterTile :character="character" />
    <CharacterEpisodes :character="character" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router'
import type { Character } from '@/types';
import { useCharacterApi } from '@/composables/useCharacterApi';

import CharacterEpisodes from '@/components/atoms/CharacterEpisodes.vue';
import CharacterTile from '@/components/molecules/CharacterTile.vue';

const route = useRoute()

const { fetchCharactersById } = useCharacterApi()

const character = ref<Character>()

onBeforeMount(async () => {
  character.value = await fetchCharactersById(Number(route.params.id))
})
</script>