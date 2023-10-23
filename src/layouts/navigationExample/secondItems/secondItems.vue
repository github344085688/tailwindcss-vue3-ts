<template>
  <div class="
        beforeLine
        h-full
        pl-[35px]
        relative
        before:content-baseline
        before:content-open-quote
        before:absolute
        before:bg-primary-400
        before:left-[25px]
        before:w-[1px]
        before:top-0
        before:bottom-0
        " tabindex="-1">
    <div class="line
                bottom-[49%]
                sm:block
                group:sm:block
                sm:bottom-0
                sm:m-auto
                sm:left-[25px]
                sm:top-0
                sm:absolute
                sm:w-[10px]
                sm:h-[1px]
                sm:bg-primary-400
                "></div>
    <div class="      rounded
                      h-full
                      px-[12px]
                      flex
                      items-center
                      hover:bg-secondary-300
                      dark:hover:bg-secondary-600
                      highlight-white/5
                      dark:highlight-white/5
                      dark:ring-0">
      <slot></slot>
      <div class="ml-auto">
        <svg class="fill-secondary-700
                         group-[.linkActive]:fill-secondary-400 "
             fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.50024 17L14.5002 12L9.50024 7V17Z"/>
        </svg>
      </div>

    </div>


  </div>
</template>
<script lang="ts" setup>
</script>
