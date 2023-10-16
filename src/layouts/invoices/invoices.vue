<template>

  <div class="unis-navigation h-full z-50 shadow-sm">
    <div :class="{'aside-fold':isFold}" class="aside-unfold transition-all duration-500 relative h-full flex">
      <div
          class="rounded absolute -right-[0.8rem] top-[4.3rem] cursor-pointer box-shadow-xs bg-gray-700   w-[1.8rem] h-[1.8rem] flex items-center justify-center"
          @click.stop.prevent="togoaside(isFold)">
        <i :class="[isFold ? 'border-t-8 border-r-0 border-b-8 border-l-8  border-t-transparent border-r-transparent border-b-transparent border-l-blue-200 border-l-opacity-40':'border-t-8 border-r-8 border-b-8 border-l-0 border-t-transparent border-r-blue-200 border-b-transparent border-l-transparen'] "
           class="relative w-0 h-0 border-solid  transition-all duration-800"
        ></i>
      </div>
      <div
          :class="[(isLevelSmall ||isFold)?'parent-level-small sm:parent-level':'',  isClickParentLevel?'':'sm:parent-level']"
          class="parent-level  bg-gray-700  h-full transition-all duration-500 flex  justify-start items-center flex-nowrap flex-col">
        <div class="log-big relative block transition-all duration-500 h-[120px] w-[6.35rem]">
          <img alt="" class="absolute inset-0 m-auto w-6.35rem h-auto"
               src="@/assets/img/logo.svg">
        </div>
        <div class="log-nano w-[1.55rem] h-[120px] relative">
          <img alt="" class="absolute top-0 left-0 bottom-0 right-0 m-auto w-[1.55rem] h-auto"
               src="@/assets/img/logo-nano.svg"></div>
        <div :class="[isFold?'':'overflow-y']"
             class="nav-link-detales  px-[8px] box-border w-full h-[calc(100%-120px)]">
          <div v-for="(child, navLinkindex) in navLink" :key="navLinkindex" class="bg-gray-700 h-auto">
            <div v-if="child.groupName"
                 class="group-name min-h-[42px] flex items-center relative pl-[16px] bg-gray-700">
              <div class="text-white text-[10px] z-999 bg-gray-700 transform  scale-[0.83]">{{ child.groupName }}</div>
            </div>
            <div v-for="(item, childsIndex) in child.children" :key="childsIndex"
                 class="item_connect w-full box-border flex flex-wrap justify-center items-center cursor-pointer relative bg-gray-700 transition-all duration-500">
              <div :class="{'active bg-gray-500 bg-opacity-70 transition-all duration-500':navName==item.title}"
                   class="item_box rounded w-full bg-gray-700 relative transition-all duration-500 flex   items-center justify-start font-base text-sm min-h-[42px] box-border z-9999 mb-1
                   hover:bg-gray-500 hover:bg-opacity-70 "
                   @click.stop.prevent="foldDetails(isFoldDetails,item)">
                <div class="img-box ml-[1.4rem]  w-[1.4rem] flex items-center justify-center">
                  <img :src="item.icon" class="h-[1rem] w-auto ">
                </div>
                <div class="pro-ab w-auto flex-1  pr-[8px] transition-all duration-500">
                  <div class="text-box flex justify-between items-center ml-[1rem]">
                    <a href="#">
                      <div class="whitespace-nowrap text-white   pr-1 items-center font-bold text-sm">
                        {{ item.title }}
                      </div>
                    </a>
                    <img v-if="item.children && item.children.length>0"
                         :class="{'transform rotate-180':navName == item.title }"
                         class="h-[0.65rem] w-auto transition-all duration-500"
                         src="@/assets/img/arrow-down.svg">
                  </div>
                </div>
              </div>
              <div v-if="item.children && item.children.length>0"
                   :class="[(navName != item.title && !isFold)?'show-childs transition-all duration-500':'']"
                   :style="{'height':(42* item.children.length)+'px'}"
                   class="childs-box flex-0 flex-grow-0 flex-shrink-0 w-full max-w-full overflow-inherit z-0 transition-all duration-500">
                <div v-for="nav in item.children"
                     class="child-item opacity-100 block relative pl-[10px] ml-[32px] text-[0.875rem] text-white transition-all duration-500
                     before:absolute before:content-before before:top-1/2 before:left-[-2px] before:w-3 before:h-[1px] before:bg-gray-400
                     hover:text-gray-300 "
                     @click.stop.prevent="foldChildetails($event,nav)">
                  <div class="line absolute top-0 left-[-2px] w-[1px] bottom-0 bg-gray-400 "></div>
                  <div
                      :class="[itemChildsLink == nav.name ? 'link_active bg-gray-500   border-[rgba(20, 28, 28, 0.44)] shadow-[0 1px 0 rgba(41, 54, 54, 0.3)]' :'']"
                      class="item-childs-link justify-between pr-2 flex rounded  items-center text-sm min-h-[40px] box-border pl-[10px] bg-gray-700
                        border-b  border-gray-700 shadow-[0 1px 0 rgba(41, 54, 54, 0)] transition-all duration-500
                        hover:bg-gray-500   hover:border-[rgba(20, 28, 28, 0.44)] hover:shadow-[0 1px 0 rgba(41, 54, 54, 0.3)] "
                      @click.stop.prevent="foldChildetails($event,nav)"> {{ nav.title }}
                    <svg v-if="itemChildsLink == nav.name" fill="none" height="14"
                         viewBox="0 0 9 14" width="9"
                         xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd"
                            d="M1.7072 13.7072L8.4143 6.99994L1.70718 0.292969L0.292984 1.7072L5.58587 6.99997L0.292968 12.293L1.7072 13.7072Z"
                            fill="white"
                            fill-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<script lang="ts" setup>
</script>
