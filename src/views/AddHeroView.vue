<template>
  <div class="bg-gray-600 text-white rounded-lg p-4 my-4">
    <div class="flex p-2">
      <label for="name">Name:</label>
      <input v-model="name" id="name" type="text" class="ml-2 px-2 w-full">
    </div>
    <div class="p-2">
      <span>Gender:</span>
      <input type="radio" name="genderRadio" value="male" id="radioMale" v-model="gender" class="ml-2" />
      <label for="radioMale" class="ml-2">Male</label>
      <input type="radio" name="genderRadio" value="female" id="radioFemale" v-model="gender" class="ml-2" />
      <label for="radioFemale" class="ml-2">Female</label>
    </div>
    <div class="flex p-2">
      <label for="imageUrl">Image:</label>
      <input v-model="imageUrl" id="imageUrl" type="text" class="ml-2 px-2 w-full">
    </div>
    <div class="text-center">
      <button @click="submitForm" class="m-4 hover:text-green-500">Submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useUserCharacterStore } from '@/stores/usercharacter';

const store = useUserCharacterStore()
const { addUserCharacter } = store
const router = useRouter()

const name = ref('')
const gender = ref('')
const imageUrl = ref('')

const submitForm = () => {
  addUserCharacter({ 
    name: name.value, 
    gender: gender.value, 
    image: imageUrl.value
  })
  router.push('/')
}
</script>