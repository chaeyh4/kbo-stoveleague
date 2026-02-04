import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const keyword = ref('')
  const season = ref('2026')
  const activeTeam = ref('ALL')

  const setKeyword = (v) => { keyword.value = v }
  const setSeason = (v) => { season.value = v }
  const setActiveTeam = (v) => { activeTeam.value = v }

  return { keyword, season, activeTeam, setKeyword, setSeason, setActiveTeam }
})
