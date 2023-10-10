<template>
  <Menu v-slot="{ open }" as="div" class="relative text-left block w-full">
    <MenuButton
        :class="{'border-red-700':error,'disabled:bg-gray-300 disabled:text-gray-800 disabled:cursor-not-allowed':disabled,'w-full':!adaptiv}"
        :disabled="disabled"
        class="
        border
        border-gray-300
        focus:shadow-outline-gray
        text-gray-700
        flex
        content-between
        items-center
        rounded
        bg-white
        pl-4
        pr-2
        min-h-40
        text-sm
        font-medium
        transition
        leading-10
        ease-in-out
        hover:text-gray-800
        focus:border-blue-300
        focus:outline-none
        active:bg-gray-50
        active:text-gray-800
       "
    >
      <div v-if="!transitionValue && multipleValues.length<1" class=" flex-1 text-left">{{ placeholder }}</div>
      <div v-if="!multiple " class=" flex-1 text-left">{{ transitionValue }}</div>
      <div v-if="multiple" class=" flex-1  flex flex-wrap">
        <span v-for="value in multipleValues" class="flex
        border-gray-300
        bg-white
        border
        px-2
        mr-2
        py-1
        leading-6
        content-between
"> {{ value }}
          <XMarkIcon class="h-5 w-5 text-gray-500 transition duration-150 flex-none ml-2  pointer"
                     @click.stop.prevent="removeItem(value)"></XMarkIcon>

      </span>
      </div>
      <div class="flex h-full items-center  ">
        <ChevronDownIcon :class="[ open ? 'rotate-180' : ' ']"
                         class="h-5 w-5 text-gray-500 transition duration-150 flex-none"/>
      </div>

    </MenuButton>
    <MenuItems
        class="absolute
             border
             border-gray-300
             right-0
             mt-2
             w-56
             origin-top-right
             divide-y
             rounded
             bg-white
             shadow-lg
             ring-black
             ring-opacity-5
             focus:outline-none"
    >
      <MenuItem
          v-for="link in priSelectdata"
          :key="link.href"
          v-slot="{ active }"
      >
        <button
            :class="[ active ? 'bg-slate-100 text-gray-900' : 'text-gray-900',
                    'group flex px-4 w-full items-center rounded-md py-2 text-sm',
                ]"
            @click="selectItem(link)"
        >

          {{ label ? link.label : link }}
        </button>

      </MenuItem>
    </MenuItems>
  </Menu>
</template>
<script lang="ts" setup>
import {remove} from "lodash-es";
</script>