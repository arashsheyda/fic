<script setup lang="ts">
import type { Ticket } from '../../types'
import { useCartsStore } from '../../store/cart'
import { useTicketsStore } from '../../store/tickets'

defineProps<{
  item: Ticket
}>()

const { addToCart } = useCartsStore()
const { removeTicket } = useTicketsStore()
</script>

<template>
  <div
    class="relative group block max-w-sm p-6 bg-white border border-neutral-200 rounded-lg shadow hover:bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700 w-full h-full"
    :class="item.isVip ?'hover:!border-yellow-500' : 'hover:!border-green-500'"
  >
    <div v-if="item.isVip" class="absolute top-1 left-2 -rotate-12 text-yellow-500" title="VIP Ticket">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="m239.78 86.62l-37 113.38S176 184 128 184s-74.78 16-74.78 16l-37-113.37a4.1 4.1 0 0 1 5.72-5l53.41 26.62a4.11 4.11 0 0 0 5.36-1.56L124.48 34a4.11 4.11 0 0 1 7 0l43.77 72.74a4.12 4.12 0 0 0 5.35 1.56l53.43-26.64a4.1 4.1 0 0 1 5.75 4.96Z" opacity=".2"/><path d="M243.84 76.19a12.08 12.08 0 0 0-13.34-1.7l-50.21 25l-41.92-69.63a12.11 12.11 0 0 0-20.74 0L75.71 99.52l-50.19-25a12.11 12.11 0 0 0-16.9 14.6l37 113.36a8 8 0 0 0 11.68 4.4c.25-.15 25.82-14.88 70.7-14.88s70.45 14.73 70.68 14.87a8 8 0 0 0 11.71-4.39l37-113.33a12.06 12.06 0 0 0-3.55-12.96ZM198 188.83c-12-5.09-35.92-12.83-70-12.83s-58 7.74-70 12.83L26.71 93l45.07 22.47a12.17 12.17 0 0 0 15.78-4.59L128 43.66l40.44 67.2a12.18 12.18 0 0 0 15.77 4.59L229.29 93Zm-22.13-32a8 8 0 0 1-7.87 6.61a8.36 8.36 0 0 1-1.4-.12a228.2 228.2 0 0 0-77.22 0a8 8 0 0 1-2.78-15.76a244.42 244.42 0 0 1 82.78 0a8 8 0 0 1 6.5 9.24Z"/></g></svg>
    </div>
    <button
      class="absolute top-4 right-4"
      @click="removeTicket(item.slug)"
    >
      <svg class="hover:text-red-500 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><g fill="currentColor"><path d="M200 56v152a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z" opacity=".2"/><path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/></g></svg>
    </button>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
      {{ item.name }}
    </h5>
    <p class="font-normal text-neutral-700 dark:text-neutral-400 mb-4">
      {{ item.description }}
    </p>
    <button aria-label="Add to cart" class="flex w-full items-center gap-4 justify-center bg-neutral-900 p-2 rounded-md hover:bg-green-500 transition-all duration-300" @click.prevent="addToCart({ quantity: 1, ticket: item })">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><g fill="currentColor"><path d="m216 64l-12.16 66.86A16 16 0 0 1 188.1 144H62.55L48 64Z" opacity=".2"/><path d="M222.14 58.87A8 8 0 0 0 216 56H54.68l-4.89-26.86A16 16 0 0 0 34.05 16H16a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H83.17a8 8 0 0 1-7.87-6.57L72.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56ZM96 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm4-74.57a8 8 0 0 1-7.9 6.57H69.22L57.59 72h148.82Z"/></g></svg>
      Add to cart
    </button>
  </div>
</template>