<script setup lang="ts">
import AppError from '../components/app/Error.vue'
import { useCartsStore } from '../store/cart'
import { computed } from 'vue'

const { items, removeFromCart } = useCartsStore()
const total = computed(() => items.reduce((sum, item) => sum + item.ticket.price * item.quantity, 0))
</script>

<template>
  <div>
    <AppError v-if="!items.length" message="Add some tickets to cart! please?" to="/" label="See Tickets" />
    <div v-else class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div 
          v-for="item of items"
          :key="item.ticket.slug"
          class="relative items-center justify-between mb-6 rounded-lg bg-white dark:bg-neutral-800 p-6 shadow-md sm:flex sm:justify-start"
          :class="{ 'border border-yellow-500': item.ticket.isVip }"
        >
          <svg class="w-full rounded-lg sm:w-40" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M200 128a32 32 0 0 0 25.6 31.36a8 8 0 0 1 6.4 7.83V192a8 8 0 0 1-8 8H96V56h128a8 8 0 0 1 8 8v24.81a8 8 0 0 1-6.4 7.83A32 32 0 0 0 200 128Z" opacity=".2"/><path d="M227.19 104.48A16 16 0 0 0 240 88.81V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v24.81a16 16 0 0 0 12.81 15.67a24 24 0 0 1 0 47A16 16 0 0 0 16 167.19V192a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24.81a16 16 0 0 0-12.81-15.67a24 24 0 0 1 0-47ZM32 167.2a40 40 0 0 0 0-78.39V64h56v128H32Zm192 0V192H104V64h120v24.8a40 40 0 0 0 0 78.39Z"/></g></svg>
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-neutral-900 dark:text-white">{{ item.ticket.name }}</h2>
              <p class="mt-1 text-xs">
                <span class="text-neutral-500">tickets left:</span> {{ item.ticket.count - item.quantity }}
              </p>
            </div>
            <div v-if="item.ticket.isVip" class="absolute bottom-2 left-2 text-yellow-500" title="VIP Ticket">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="m239.78 86.62l-37 113.38S176 184 128 184s-74.78 16-74.78 16l-37-113.37a4.1 4.1 0 0 1 5.72-5l53.41 26.62a4.11 4.11 0 0 0 5.36-1.56L124.48 34a4.11 4.11 0 0 1 7 0l43.77 72.74a4.12 4.12 0 0 0 5.35 1.56l53.43-26.64a4.1 4.1 0 0 1 5.75 4.96Z" opacity=".2"/><path d="M243.84 76.19a12.08 12.08 0 0 0-13.34-1.7l-50.21 25l-41.92-69.63a12.11 12.11 0 0 0-20.74 0L75.71 99.52l-50.19-25a12.11 12.11 0 0 0-16.9 14.6l37 113.36a8 8 0 0 0 11.68 4.4c.25-.15 25.82-14.88 70.7-14.88s70.45 14.73 70.68 14.87a8 8 0 0 0 11.71-4.39l37-113.33a12.06 12.06 0 0 0-3.55-12.96ZM198 188.83c-12-5.09-35.92-12.83-70-12.83s-58 7.74-70 12.83L26.71 93l45.07 22.47a12.17 12.17 0 0 0 15.78-4.59L128 43.66l40.44 67.2a12.18 12.18 0 0 0 15.77 4.59L229.29 93Zm-22.13-32a8 8 0 0 1-7.87 6.61a8.36 8.36 0 0 1-1.4-.12a228.2 228.2 0 0 0-77.22 0a8 8 0 0 1-2.78-15.76a244.42 244.42 0 0 1 82.78 0a8 8 0 0 1 6.5 9.24Z"/></g></svg>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-neutral-100 dark:border-white/20">
                <span
                  class="cursor-pointer rounded-l bg-neutral-700 py-1 px-3.5 duration-100 hover:bg-green-500 hover:text-green-50"
                  @click="item.quantity > 1 ? item.quantity-- : undefined"
                >
                  -
                </span>
                <input class="text-center h-8 w-8 border dark:border-white/20 bg-white dark:bg-neutral-800 text-xs outline-none" type="number" :value="item.quantity" :min="1" :max="item.ticket.count - 1" disabled />
                <span
                  class="cursor-pointer rounded-r bg-neutral-700 py-1 px-3 duration-100 hover:bg-green-500 hover:text-green-50"
                  @click="item.quantity < (item.ticket.count - 1) ? item.quantity++ : undefined"
                >
                  +
                </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">$ {{ item.ticket.price }} x {{ item.quantity }}</p>
                <svg 
                  class="cursor-pointer hover:text-red-500 transition-all duration-300"
                  width="20" height="20" viewBox="0 0 256 256"
                  @click="removeFromCart(item.ticket.slug)"
                >
                  <g fill="currentColor"><path d="M200 56v152a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V56Z" opacity=".2"/><path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/></g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 h-full rounded-lg border dark:border-white/20 bg-white dark:bg-neutral-800 p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-neutral-700">Subtotal</p>
          <p class="text-neutral-700">${{ total }}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-neutral-700">Shipping</p>
          <p class="text-neutral-700">$0</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">$ {{ total }} USD</p>
            <p class="text-sm text-neutral-700">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-green-500 py-1.5 font-medium text-green-50 hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>
