<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <i class="bi bi-fire me-2"></i>KBO StoveLeague
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="topNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/stove" class="nav-link">대시보드</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/fa" class="nav-link">FA</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/trade" class="nav-link">트레이드</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/salarycap" class="nav-link">샐러리캡</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/draft2" class="nav-link">2차드래프트</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>
