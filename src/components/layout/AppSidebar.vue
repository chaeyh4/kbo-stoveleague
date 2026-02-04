<template>
  <div class="p-3">
    <div class="mb-3">
      <div class="fw-semibold text-secondary small">메뉴</div>
    </div>

    <div class="list-group list-group-flush">
      <router-link to="/stove" class="list-group-item list-group-item-action">
        <i class="bi bi-speedometer2 me-2"></i>대시보드
      </router-link>
      <router-link to="/fa" class="list-group-item list-group-item-action">
        <i class="bi bi-person-badge me-2"></i>FA
      </router-link>
      <router-link to="/trade" class="list-group-item list-group-item-action">
        <i class="bi bi-arrow-left-right me-2"></i>트레이드 루머
      </router-link>
      <router-link to="/salarycap" class="list-group-item list-group-item-action">
        <i class="bi bi-cash-stack me-2"></i>샐러리캡
      </router-link>
      <router-link to="/draft2" class="list-group-item list-group-item-action">
        <i class="bi bi-list-ol me-2"></i>2차 드래프트
      </router-link>
    </div>

    <hr>

    <div class="text-secondary small">
      * 팀/선수 상세는 라우트 파라미터로 이동
    </div>
    <div class="d-grid gap-2 mt-2">
      <router-link to="/teams/LG" class="btn btn-outline-secondary btn-sm">예시: LG 팀</router-link>
      <router-link to="/players/123" class="btn btn-outline-secondary btn-sm">예시: 선수 123</router-link>
    </div>
  </div>
</template>

<script setup>
</script>
