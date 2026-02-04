<template>
  <div class="min-vh-100 bg-light">
    <AppHeader />

    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-2 p-0 border-end bg-white">
          <AppSidebar />
        </div>

        <main class="col-12 col-lg-10 py-4">
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
</script>
