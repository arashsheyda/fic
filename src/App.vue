<!-- Using App.vue as our layout -->
<script setup lang="ts">
// importing components for the layout
import AppHeader from './components/app/Header.vue'
import AppFooter from './components/app/Footer.vue'
</script>

<template>
  <div>

    <AppHeader />

    <main class="container m-auto min-h-screen p-4">
      <!-- Using the RouterView component to render the current route's component -->
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>
