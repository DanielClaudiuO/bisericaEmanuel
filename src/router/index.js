import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import CeCredem from "../views/CeCredem.vue"
import GaleryView from '../views/GaleryView.vue';
import HistoryView from '../views/HistoryView.vue';
import SlujiriView from '../views/SlujiriView.vue';
import SlujitoriView from "../views/SlujitoriView.vue";
import MeditatiiView from "../views/MeditatiiView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/ceCredem',
      name: 'ceCredem',
      component: CeCredem
    },
    {
      path: '/galery',
      name: 'galery',
      component: GaleryView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView
    },
    {
      path: '/slujiri',
      name: 'slujiri',
      component: SlujiriView
    },
    {
      path: '/slujitori',
      name: 'slujitori',
      component: SlujitoriView
    },
    {
      path: '/meditatii',
      name: 'meditatii',
      component: MeditatiiView
    },
    
  ]
})

export default router
