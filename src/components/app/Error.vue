<script setup lang="ts">
withDefaults(defineProps<{
  message: string
  label?: string
  to?: string,
}>(), {
  to: '/',
  label: 'Home',
})
</script>

<template>
  <div class="flex flex-col gap-4 items-center text-center justify-center min-h-screen">
    <h1 class="text-4xl">
      {{ message }}
    </h1>
    <RouterLink class="bg-green-500 py-2 px-4 rounded-lg" :to="to">
      {{ label }}
    </RouterLink>
  </div>
</template>
