<template>
  <div class="flex h-full ">
    <side-nav/>
    <div class="flex-1 p-0 h-full  flex flex-col">
      <top-bar/>
      <div class="component-vie overflow-y-auto scrollbar">
        <router-view v-slot="{ Component, route }">
          <keep-alive>
            <component :is="Component" :key="route.path" :ref="treeRef" :init="changeView(route)"/>
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>

</template>
