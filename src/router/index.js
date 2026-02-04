import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/pages/HomeView.vue'
import StoveLeagueDashboardView from '@/pages/StoveLeagueDashboardView.vue'
import FreeAgencyView from '@/pages/FreeAgencyView.vue'
import TradeRumorView from '@/pages/TradeRumorView.vue'
import SalaryCapView from '@/pages/SalaryCapView.vue'
import Draft2View from '@/pages/Draft2View.vue'
import TeamView from '@/pages/TeamView.vue'
import PlayerView from '@/pages/PlayerView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/stove', name: 'stove', component: StoveLeagueDashboardView },
  { path: '/fa', name: 'fa', component: FreeAgencyView },
  { path: '/trade', name: 'trade', component: TradeRumorView },
  { path: '/salarycap', name: 'salarycap', component: SalaryCapView },
  { path: '/draft2', name: 'draft2', component: Draft2View },
  { path: '/teams/:teamId', name: 'team', component: TeamView },
  { path: '/players/:playerId', name: 'player', component: PlayerView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
