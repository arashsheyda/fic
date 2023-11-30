<script setup lang="ts">
import type { RouteRecord } from 'vue-router'
import { RouterLink } from 'vue-router'

defineProps<{
  item: Partial<RouteRecord>
}>()
</script>

<template>
  <component
    :is="item.path ? RouterLink : 'button'"
    :to="item.path"
    :title="item.name"
    class="relative capitalize text-sm font-semibold leading-6"
    :class="item.name === $route.name ? 'text-green-500' : 'text-gray-900 dark:text-white'"
  >
    <slot :item="item">
      {{ item.name }}
    </slot>
  </component>
</template>
