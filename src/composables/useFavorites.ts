export const useFavorites = () => {

  const STORAGE_KEY = 'rt-favorites'

  const getStoredFavorites = () => {
    const storedFavorites = localStorage.getItem(STORAGE_KEY) || '[]'
    const favorites = JSON.parse(storedFavorites)
    return favorites
  }

  const isFavorite = (id: number) => {
    const favorites = getStoredFavorites()
    return favorites.includes(id)
  }

  const storeFavorite = (id: number) => {
    const favorites = getStoredFavorites()
    if (favorites.indexOf(id) === -1) {
      favorites.push(id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    }
  }

  const removeFavorite = (id: number) => {
    const favorites = getStoredFavorites()
    const idIndex = favorites.indexOf(id) 
    if (idIndex > -1) {
      favorites.splice(idIndex, 1)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    }
  }

  return {
    getStoredFavorites,
    isFavorite,
    storeFavorite,
    removeFavorite
  }

}