<script setup lang="ts">
import NavItem from './NavItem.vue'
import { useCartsStore } from '../../store/cart'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

const router = useRouter()
const { items } = useCartsStore()
const routes = computed(() => router.getRoutes().filter((r) => r.name !== 'login'))

const menu = ref(false)
</script>

<template>
  <header class="sticky top-0 right-0 left-0 bottom-0 z-50 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-lg border-b dark:border-white/10">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-4" aria-label="Global">
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Auctria</span>
          <img class="h-12 w-auto" src="https://avatars.githubusercontent.com/u/95990491?s=200&v=4" alt="Auctria">
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700" @click="menu = !menu">
          <span class="sr-only">Open main menu</span>
          <svg v-if="!menu" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NavItem v-for="route of routes" :key="route.path" :item="route">
          <template #default="{ item }">
            {{ item.name }}
            <div
              v-if="item.name === 'cart'"
              class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white border-2 border-white rounded-full -bottom-2 dark:border-neutral-900"
              :class="items.length ? 'bg-green-500' : 'bg-red-500'"
            >
              {{ items.length }}
            </div>
          </template>
        </NavItem>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <!-- social buttons -->
      </div>
    </nav>

 
    <div v-show="menu" class=" flex flex-col p-6 gap-4 6 border-t border-white/10">
      <NavItem v-for="route of routes" :key="route.path" :item="route" @click="menu = false" />
    </div>
    
  </header>
</template>