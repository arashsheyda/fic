<script setup lang="ts">
import ColorMode from '../ColorMode.vue'
</script>


<template>
  <footer class="rounded-lg shadow border-t border-white/10">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {{ new Date().getFullYear() }}
        <a href="https://github.com/Auctria/frontend-interview-challenge" class="hover:underline" target="_blank">
          FIC Auctria
        </a> All Rights Reserved.
      </span>
      <ul class="flex  items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <ColorMode />
        <li>
          <a href="http://github.com/arashsheyda" target="_blank" class="hover:underline me-4 md:me-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" fill-rule="evenodd" d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"/></svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>