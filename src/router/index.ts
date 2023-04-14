import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AddHeroView from '@/views/AddHeroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/addhero',
      name: 'addhero',
      component: AddHeroView
    },
    {
      path: '/character/:id',
      name: 'character',
      component: () => import('@/views/CharacterView.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('@/views/FavoritesView.vue')
    },
  ]
})

export default router
