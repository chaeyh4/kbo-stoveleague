<template>
  <div class="container">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h1 class="h4 mb-0">KBO 스토브리그 대시보드</h1>
      <div class="d-flex gap-2">
        <select class="form-select form-select-sm" style="width: 120px;">
          <option>2026</option>
          <option>2025</option>
        </select>
        <input class="form-control form-control-sm" placeholder="선수/팀 검색" style="width: 220px;">
      </div>
    </div>

    <div class="row g-3">
      <div class="col-12 col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <span class="text-secondary">FA</span>
              <i class="bi bi-person-badge"></i>
            </div>
            <div class="display-6 mt-2">0</div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <span class="text-secondary">트레이드 루머</span>
              <i class="bi bi-arrow-left-right"></i>
            </div>
            <div class="display-6 mt-2">0</div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <span class="text-secondary">샐러리캡</span>
              <i class="bi bi-cash-stack"></i>
            </div>
            <div class="display-6 mt-2">-</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 화면 구성용 변수/함수만 선언 (로직은 나중)
</script>
