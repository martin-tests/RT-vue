<template>
  <main>
    <section>
      <FilterInput label="Name" @update="value => selectedName = value" />
      <div class="grid grid-cols-2 md:grid-cols-3">
        <FilterSelect label="Status" :options="['', 'Alive', 'unknown', 'Dead']" @update:value="value => selectedStatus = value" />
        <FilterSelect label="Species" :options="['', 'Human', 'Alien', 'Cronenberg']" @update:value="value => selectedSpecies = value" />
        <FilterSelect label="Gender" :options="['', 'Male', 'Female']" @update:value="value => selectedGender = value" />
      </div>
    </section>
    <section class="grid grid-cols-1 min-[1220px]:grid-cols-2 3xl:grid-cols-3">
      <CharacterTile v-for="character of pageCharacters" :character="character" />
    </section>
    <div class="text-center">
      <button v-if="currentIndex > 0" @click="loadPreviousPage" class="m-4 hover:text-green-500">Previous</button>
      <button v-if="(currentIndex + 1) * 12 < totalArticles" @click="loadNextPage" class="m-4 hover:text-green-500">Next</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue';
import type { Character } from '@/types'
import { useCharacterApi } from '@/composables/useCharacterApi'
import { useUserCharacterStore } from '@/stores/usercharacter';

import FilterInput from '@/components/atoms/FilterInput.vue'
import FilterSelect from '@/components/atoms/FilterSelect.vue';
import CharacterTile from '@/components/molecules/CharacterTile.vue';

const { fetchCharacters } = useCharacterApi()

const store = useUserCharacterStore()

const charactersData = ref<Character[]>([])
const pageCharacters = ref<Character[]>([])

const currentIndex = ref(0)
const totalArticles = ref(0)

const selectedStatus = ref('')
const selectedSpecies = ref('')
const selectedGender = ref('')
const selectedName = ref('')

const loadPageCharacters = () => {
  pageCharacters.value = []
  pageCharacters.value = charactersData.value.slice(currentIndex.value * 12, (currentIndex.value + 1) * 12)
}

const loadPreviousPage = () => {
  currentIndex.value--
  loadPageCharacters()
}

const loadNextPage = () => {
  currentIndex.value++
  loadPageCharacters()
}

const fetchData = async () => {
  const apiCharacters = await fetchCharacters({
    status: selectedStatus.value,
    species: selectedSpecies.value,
    gender: selectedGender.value,
    name: selectedName.value
  })
  if (selectedStatus.value || selectedSpecies.value) {
    charactersData.value = apiCharacters
  } else {
    const userCharacters = store.userCharacters.filter(userCharacter => {
      if (selectedGender.value && userCharacter.gender.toLowerCase() !== selectedGender.value.toLowerCase()) {
        return false
      }
      if (selectedName.value && userCharacter.name.toLowerCase().indexOf(selectedName.value.toLowerCase()) === -1) {
        return false
      }
      return true
    })
    charactersData.value = userCharacters.concat(apiCharacters)
  }
  totalArticles.value = charactersData.value.length
  loadPageCharacters()
}

onBeforeMount(() => {
  fetchData()
})

watch([selectedStatus, selectedSpecies, selectedGender, selectedName], fetchData)
</script>
