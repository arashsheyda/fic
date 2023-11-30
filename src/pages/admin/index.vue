<script setup lang="ts">
import { reactive } from 'vue'
import { useTicketsStore } from '../../store/tickets'
import { slugify } from '../../utils'

const form = reactive({
  name: '',
  description: '',
  isVip: false,
  count: 0,
  price: 0,
})

const { tickets, addTicket } = useTicketsStore()

async function create() {
  if (!form.name || !form.description || form.count <= 0 || form.price <= 0) {
    console.error('Please fill in all required fields.')
    return
  }

  const res = addTicket({
    ...form,
    slug: slugify(form.name),
  })

  if (!res) {
    console.error('Something went wrong, please try again!')
    return
  }

  form.name = ''
  form.description = ''
  form.isVip = false
  form.count = 0
  form.price = 0
}
</script>

<template>
  <div class="mt-4">
    <h2 class="flex flex-col text-2xl text-center mb-4">
      New Event
      <small class="text-xs opacity-70">
        current available events: {{ tickets.length }}
      </small>
    </h2>
    <form @submit.prevent="create" class="border border-white/10 max-w-lg mx-auto p-8 rounded-lg">
      <div v-for="(value, key) of form" class="relative z-0 w-full mb-6 group flex items-center">
        <template v-if="typeof value === 'string' || typeof value === 'number'">
          <input
            :id="key"
            :name="key"
            :type="typeof value === 'string' ? 'text' : 'number'"
            class="block py-2.5 px-0 w-full text-sm text-neutral-900 bg-transparent border-0 border-b-2 border-neutral-300 appearance-none dark:text-white dark:border-neutral-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
            placeholder=""
            v-model="form[key]"
          />
          <label
            :for="key"
            class="capitalize peer-focus:font-medium absolute text-sm text-neutral-500 dark:text-neutral-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {{ key }}
          </label>
        </template>
        <template v-else-if="typeof value === 'boolean'">
          <input :id="key" type="checkbox" v-model="form[key]" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label :for="key" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {{ key }}
          </label>
        </template>
      </div>
      <button type="submit" class="bg-green-500 py-2 px-4 rounded-lg">
        create
      </button>
    </form>
  </div>
</template>
