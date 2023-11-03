<template>
  <div
      class=" flex
      justify-end
      bg-primary-300
      dark:bg-primary-900
      shadow-sm
      h-[52px]
      items-center pr-7
      shadow ring-1 ring-primary
      dark:ring-0
      dark:highlight-b-white/20

">

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
        <PopoverPanel class="absolute right-0 z-10 mt-3 w-screen max-w-[250px]  px-4 sm:px-0 ">
          <div
              class="overflow-hidden  rounded  ring-opacity-5  shadow-xl ring-1 ring-primary   dark:highlight-white/20  dark:ring-0">

            <div class="bg-gray-50 p-4 flex justify-between items-center dark:bg-primary-700">
              <span class="pl-5 flex   items-center dark:text-accent-450">
                 <div class="flex   h-10 w-10  items-center justify-center  sm:h-12 sm:w-8">
                 <i class="opicon-moudule7 mr-4 "></i>

                </div>
                   Light Mode
              </span>
              <Switch
                  v-model="enabled"
                  :class="enabled ? 'bg-accent-550' : 'bg-accent-250'"
                  class="relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  @click.stop.prevent="toggleTheme"
              >
                <div class="absolute top-1 left-2">
                  <svg fill="none" height="17" viewBox="0 0 38 17" width="38" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.4525 2.44789C4.23 8.10289 8.265 11.7554 11.1975 12.7979C10.155 13.6154 8.8575 14.0804 7.5 14.0804C4.1925 14.0804 1.5 11.3879 1.5 8.08039C1.5 5.49289 3.15 3.28039 5.4525 2.44789ZM7.4925 0.587891C3.3 0.587891 0 3.98539 0 8.08039C0 12.2204 3.36 15.5804 7.5 15.5804C10.2825 15.5804 12.6975 14.0654 13.995 11.8154C8.3625 11.6279 4.9275 5.49289 7.755 0.587891C7.665 0.587891 7.5825 0.587891 7.4925 0.587891Z"
                        fill="#F4F4F4"></path>
                    <path
                        d="M25.32 3.2175L23.97 1.875L22.9125 2.9325L24.255 4.275L25.32 3.2175ZM21 7.4625H23.25V8.9625H21V7.4625ZM28.5 0H30V2.2125H28.5V0ZM34.53 1.87125L35.586 2.9265L34.2435 4.269L33.1882 3.213L34.53 1.87125ZM33.18 13.2075L34.5225 14.5575L35.58 13.5L34.23 12.1575L33.18 13.2075ZM35.25 7.4625H37.5V8.9625H35.25V7.4625ZM29.25 3.7125C26.7675 3.7125 24.75 5.73 24.75 8.2125C24.75 10.695 26.7675 12.7125 29.25 12.7125C31.7325 12.7125 33.75 10.695 33.75 8.2125C33.75 5.73 31.7325 3.7125 29.25 3.7125ZM29.25 11.2125C27.5925 11.2125 26.25 9.87 26.25 8.2125C26.25 6.555 27.5925 5.2125 29.25 5.2125C30.9075 5.2125 32.25 6.555 32.25 8.2125C32.25 9.87 30.9075 11.2125 29.25 11.2125ZM28.5 14.2125H30V16.425H28.5V14.2125ZM22.9125 13.4925L23.97 14.55L25.3125 13.2L24.255 12.1425L22.9125 13.4925Z"
                        fill="white"></path>
                  </svg>
                </div>

                <span
                    :class="enabled ? 'translate-x-7' : 'translate-x-0'"
                    aria-hidden="true"
                    class="pointer-events-none inline-block h-[24px] w-[24px] transform rounded-full bg-primary-100 shadow-lg   transition duration-200 ease-in-out  ring-1 ring-primary-200   dark:highlight-white/5  dark:ring-0"
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
