<template>
  <SideNavigation></SideNavigation>
  <adjustable-window :src="'/about'"/>
  <div class="px-5 flex w-full">
    <!--    <highlight-view></highlight-view>-->
    <div class="w-1/4"></div>
    <div class="w-1/4">
      <base-menu v-model="pageSize"
                 :name="'pageSize'"
                 :selectdata="linksa"
                 multiple
                 @emitChoose="pageSizePage"
      ></base-menu>
      <!--      :placeholder="'pageSizePage'"-->
      <!--  multiple    :error="'js'" -->

    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
