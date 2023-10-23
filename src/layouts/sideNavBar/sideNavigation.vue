<template>
  <div :class="[isFold ? 'fold':'expand']" class="group aside-unfold transition-all duration-500 relative h-full flex">
    <div class=" w-[4.375rem] min-w-[4.375rem] sm:w-[15rem] sm:min-w-[15rem] parent-level h-full bg-primary-300 dark:bg-primary-800 transition-all duration-500 ring-1 ring-gray-300 highlight-white/5 dark:highlight-white/5 dark:ring-0 relative pt-[25px] group-[.fold]:w-[4.375rem] group-[.fold]:min-w-[4.375rem]
">
      <div class=" absolute z-50 -right-[0.8rem] top-[1.3rem] cursor-pointer box-shadow-xs dark:bg-primary-900 bg-primary-300 dark:shadow-primary-800 w-[28px] h-[28px] flex rounded items-center justify-center
 ring-1 ring-gray-900/5 dark:highlight-white/5 dark:ring-0" @click.stop.prevent="togoaside(isFold)">
        <i :class="[isFold ? 'border-t-8 border-r-0 border-b-8 border-l-8  border-t-transparent border-r-transparent border-b-transparent border-l-blue-200 border-l-opacity-40':'border-t-8 border-r-8 border-b-8 border-l-0 border-t-transparent border-r-blue-200 border-b-transparent border-l-transparen'] "
           class="w-0 h-0 border-solid  transition-all duration-800"
        ></i>
      </div>


      <div
          class="
            w-full
            flex
            justify-center
            h-[80px] ">
        <img alt=""
             class=" inset-0  w-[1.55rem] h-auto group-[.fold]:block hidden"
             src="@/assets/img/logo-nano.svg">
        <img alt="" class="block inset-0 m-auto w-[50%] h-auto group-[.fold]:hidden"
             src="@/assets/img/unis-logo-color.svg">
      </div>
      <div v-for="(child, startIndex) in navLink" :key="startIndex">
        <group-name :groupName="child.groupName" class="hidden sm:block group-[.fold]:hidden"></group-name>
        <ul v-for="(firstItem, firstIndex) in child.children" :key="firstIndex"
            class="sn_menu  sm:max-h-[300px]  group-[.expand]:sm:overflow-y-auto group-[.expand]:sm:overflow-x-hidden  scrollbar

        ">
          <li :class="[navName==firstItem.title ? 'group active firstItemActive':'unActive'] "
              class="group-[.expand]:sm:overflow-hidden group-[.fold]:sm:overflow-inherit  group/firstItemLi group-[.fold]:relative">
            <div
                :class="[navName==firstItem.title ? '':'unActive'] "
                class="

                mx-1 px-2 flex h-full rounded items-center justify-center  sm:justify-start group-[.fold]:justify-center hover:bg-secondary-300 dark:hover:bg-secondary-600 hover:text-secondary-800 dark:hover:text-secondary-400 transition-colors duration-500 cursor-pointer group-[.active]:bg-secondary-300 group-[.active]:dark:bg-secondary-600 group-[.active]:text-secondary-800 group-[.active]:dark:text-secondary-400 group-[.active]:border-primary-300 group-[.active]:dark:border-t-primary-800 dark:shadow-primary-800 dark:text-primary-300 text-primary-800 border-t-[1px] border-transparent hover:border-primary-300 dark:hover:border-t-primary-800 dark:border-transparent border-solid "
                tabindex="-1"
                @click.stop.prevent="foldDetails(isFoldDetails,firstItem)">
              <span v-html="firstItem.icon"></span>
              <div class=" h-full pl-2.5 hidden sm:flex  items-center rounded  group-[.fold]:hidden ">
                {{ firstItem.title }}
              </div>
              <div v-if="firstItem.children && firstItem.children.length>0"
                   class="ml-auto hidden  sm:block group-[.fold]:hidden">
                <svg class="fill-secondary-700
                           group-[.linkActive]:fill-secondary-400 "
                     fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.50024 17L14.5002 12L9.50024 7V17Z"/>
                </svg>
              </div>
            </div>

            <ul v-if="firstItem.children && firstItem.children.length>0"
                class="
                hidden
                group-[.expand]:sm:block
                group-[.expand]:sm:relative
                group-[.expand]:sm:left-[0px]
                group-hover/firstItemLi:absolute
                group-hover/firstItemLi:z-50
                group-hover/firstItemLi:left-[36px]
                group-hover/firstItemLi:block
            ">
              <li v-for="(secondItem,secondIndex) in firstItem.children" :key="secondIndex"
                  :class="[itemChildsLink == secondItem.title?'secondItemActive active ':'' ,
                  (secondIndex != firstItem.children.length-1)? 'relative  group-[.fold]:before:content-none sm:before:content-baseline sm:before:content-open-quote  sm:before:absolute sm:before:bg-primary-400  sm:before:left-[25px] sm:before:w-[1px]  sm:before:top-0  sm:before:bottom-0 ':'beforeUnderline'
                  ]"
                  class="secondItem
                  overflow-hidden
                  group
                  group-[.fold]:w-[15rem]

">
                <div

                    class=" group-[.fold]:before:content-none  beforeLine h-full  pl-[35px]  pr-[4px] relative  sm:before:content-baseline  sm:before:content-open-quote  sm:before:absolute   sm:before:bg-primary-400 sm:before:left-[25px] sm:before:w-[1px] sm:before:top-0  sm:before:bottom-0
                   "
                    tabindex="-1"
                    @click.stop.prevent="foldChildetails($event,secondItem,firstItem)">
                  <div
                      class="group-[.fold]:hidden hidden line  sm:block  group:sm:block  sm:bottom-0  sm:m-auto  sm:left-[25px]  sm:top-0  sm:absolute  sm:w-[10px]  sm:h-[1px]  sm:bg-primary-400  "></div>
                  <div class="  rounded h-full px-[12px] flex items-center hover:bg-secondary-300 dark:hover:bg-secondary-600 cursor-pointer hover:text-secondary-800 dark:hover:text-secondary-400 transition-colors duration-500 text-primary-800 dark:text-primary-300 border-t-[1px] border-transparent hover:border-primary-300 dark:hover:border-t-primary-800 dark:border-transparent border-solid group-[.secondItemActive]:bg-secondary-300 group-[.secondItemActive]:dark:bg-secondary-600 group-[.secondItemActive]:text-secondary-800 group-[.secondItemActive]:dark:text-primary group-[.secondItemActive]:border-primary-300 group-[.secondItemActive]:dark:border-t-primary-800
                    bg-primary-300
                    dark:bg-primary-800 ">
                    {{ secondItem.title }}
                    <div class="ml-auto">
                      <svg class="fill-secondary-700
                                   group-[.linkActive]:fill-secondary-400 "
                           fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.50024 17L14.5002 12L9.50024 7V17Z"/>
                      </svg>
                    </div>

                  </div>


                </div>

                <ul v-if="secondItem.children && secondItem.children.length>0" class="
                  peer-[.secondItemActive]:relative
                  group-hover/firstItemLi:bg-primary-300
                  group-hover/firstItemLi:dark:bg-primary-800
                  group-hover/firstItemLi:mr-[4px]
                  ml-[35px]
">
                  <li v-for="thirdItem in secondItem.children"
                      :class="{'group fourthItemActive active':fourthItemActiveName   == thirdItem.title }"
                      class="thirdItem overflow-hidden group-[.fold]:overflow-inherit">
                    <div class="
                  beforeLines
                  h-full
                  pl-[20px]
                  pr-[4px]
                  relative
                  box-content
                  before:content-baseline
                  before:content-open-quote
                  before:absolute
                  before:bg-primary-400
                  before:left-[10px]
                  before:w-[1px]
                  before:top-0
                  before:bottom-0
                  text-primary-800
                  dark:text-primary-300
                  " tabindex="-1">
                      <div class="line
                          block
                          group:sm:block
                          bottom-0
                          m-auto
                          left-[10px]
                          top-0
                          absolute
                          w-[10px]
                          h-[1px]
                          bg-primary-400
                          "></div>
                      <div class="  rounded
                              h-full
                              px-[5px]
                              flex
                              items-center
                              hover:bg-secondary-300
                              dark:hover:bg-secondary-600
                              dark:ring-0
                              cursor-pointer
                              group-[.fourthItemActive]:bg-secondary-300
                              group-[.fourthItemActive]:dark:bg-secondary-600
                              group-[.fourthItemActive]:text-secondary-800
                              group-[.fourthItemActive]:dark:text-primary
                              group-[.fourthItemActive]:border-primary-300
                              group-[.fourthItemActive]:dark:border-t-primary-800
                              dark:text-primary-300
                              border-t-[1px]
                              border-transparent
                              hover:border-primary-300
                              dark:hover:border-t-primary-800
                              dark:border-transparent
                              border-solid

                  ">
                        {{ thirdItem.title }}
                        <div class="ml-auto">
                          <svg class="fill-secondary-600
                                   group-[.linkActive]:fill-secondary-100 "
                               fill="none" height="24" viewBox="0 0 24 24" width="24"
                               xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.50024 17L14.5002 12L9.50024 7V17Z"/>
                          </svg>
                        </div>

                      </div>


                    </div>


                  </li>
                </ul>


              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
</script>
