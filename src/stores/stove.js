import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useStoveStore = defineStore('stove', () => {
  // 화면 설계용 더미 데이터
  const faList = ref([])
  const tradeRumors = ref([])
  const salaryCaps = ref([])

  const faCount = computed(() => faList.value.length)

  return { faList, tradeRumors, salaryCaps, faCount }
})
