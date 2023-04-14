interface CharacterFilters {
  status: string;
  species: string;
  gender: string;
  name: string;
}

export const useCharacterApi = () => {

  const fetchCharacters = async (filters: CharacterFilters) => {
    let query = ''
    if (filters.status) {
      query += 'status=' + filters.status + '&'
    }
    if (filters.species) {
      query += 'species=' + filters.species + '&'
    }
    if (filters.gender) {
      query += 'gender=' + filters.gender + '&'
    }
    if (filters.name) {
      query += 'name=' + filters.name
    }
    const response = await fetch('https://rickandmortyapi.com/api/character?' + (query || ''))
    const jsonData = await response.json()

    return jsonData.results
  } 

  const fetchCharactersById = async (ids: number[] | number) => {
    console.log(typeof ids)
    const response = await fetch('https://rickandmortyapi.com/api/character/' + JSON.stringify(ids))
    const jsonData = await response.json()

    return jsonData
  }

  const fetchCharacter = async (id: string) => {
    const response = await fetch('https://rickandmortyapi.com/api/character/' + id)
    const jsonData = await response.json()

    return jsonData
  }

  return {
    fetchCharacters,
    fetchCharacter,
    fetchCharactersById
  }

}