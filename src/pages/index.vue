<script setup lang="ts">
import AppError from '../components/app/Error.vue'
import AppCard from '../components/app/Card.vue'
import { useTicketsStore } from '../store/tickets'

const { tickets } = useTicketsStore()
</script>

<template>
    <!-- Display a message if there are no tickets -->
  <AppError v-if="!tickets.length" message="No tickets found, go add some!" to="/admin" label="Admin" />
  <div v-else class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
    <AppCard v-for="item of tickets" :key="item.slug" :item="item" />
  </div>
</template>
