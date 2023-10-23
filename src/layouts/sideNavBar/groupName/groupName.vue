<template>
  <div v-if="groupName"
       class="
                 relative
                 transition-all
                 duration-500
                 sm:py-[6px]
                 sm:px-[16px]
                 sm:block
                 overflow-hidden
                 whitespace-nowrap
                 flex
                 items-center
">
    <div class="text-gray-500
               dark:text-gray-300
               text-[10px]
">
      {{ groupName }}
    </div>
  </div>
</template>
