import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { UserCharacter } from '@/types'

interface State {
  userCharacters: UserCharacter[]
}

export const useUserCharacterStore = defineStore('character', {
  state: (): State => {
    return {
      userCharacters: [] 
    }
  },
  actions: {
    addUserCharacter(userCharacter: UserCharacter) {
      this.userCharacters.push(userCharacter)
    }
  }
})
