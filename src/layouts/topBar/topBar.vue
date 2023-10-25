<template>
  <div
      class=" flex
      justify-between
      bg-primary-300
      dark:bg-primary-800
      shadow-sm
      h-[52px]
      shadow-gray-500/40
      dark:shadow-blue-500/40
      items-center pr-7">


    <basic-button-text @click="toggleTheme">
      <svg class="mr-2 fill-color" fill="none" height="24" viewBox="0 0 24 24" width="24"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
      </svg>
      Back
    </basic-button-text>


    <Popover v-slot="{ open }" class="relative w-[24px] h-[24px] rounded-full bg-secondary-800 dark:bg-secondary-700">
      <PopoverButton class="w-full h-full rounded-full text-white  ">
        U
      </PopoverButton>

      <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
            class="absolute right-0 z-10 mt-3 w-screen max-w-sm  px-4 sm:px-0 "
        >
          <div
              class="overflow-hidden rounded-lg shadow-lg   ring-1 ring-primary-400 dark:ring-primary-900 ring-opacity-5"
          >
            <div class="bg-gray-50 p-4">
              <Switch
                  v-model="enabled"
                  :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
                  class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <span class="sr-only">Use setting</span>
                <span
                    :class="enabled ? 'translate-x-9' : 'translate-x-0'"
                    aria-hidden="true"
                    class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
                />
              </Switch>
            </div>
            <div class="relative grid gap-8 bg-white dark:bg-primary-800 p-7  ">
              <a
                  v-for="item in solutions"
                  :key="item.name"
                  :href="item.href"
                  class="group/name -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 dark:hover:bg-secondary-600  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"
                >
                  <div v-html="item.icon"></div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ item.name }}
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400 group-hover/name:dark:text-gray-700 transition-colors duration-700">
                    {{ item.description }}
                  </p>
                </div>
              </a>
            </div>

          </div>
        </PopoverPanel>
      </transition>
    </Popover>


  </div>
</template>
<script lang="ts" setup>
</script>
