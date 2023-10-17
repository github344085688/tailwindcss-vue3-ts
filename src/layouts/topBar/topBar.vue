<template>
  <div
      class=" flex justify-between  bg-light dark:bg-dark shadow-sm shadow-gray-500/40 dark:shadow-blue-500/40  items-center pr-7">
    <div class="flex items-center">
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="white"/>
      </svg>
      <span class="text-white">Back</span>
      <basic-button>Back</basic-button>
      <button class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              @click="toggleTheme">
        切换主题
      </button>

    </div>


  </div>
</template>
<script lang="ts" setup>
</script>
