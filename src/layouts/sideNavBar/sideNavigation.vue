<!--<template>

  <div class="h-full z-50 shadow-sm">
    <div :class="{'aside-fold':isFold}" class="aside-unfold transition-all duration-500 relative h-full flex">
      <div
          class="rounded absolute -right-[0.8rem]
          top-[4.3rem]
          cursor-pointer
          box-shadow-xs
          bg-light
          dark:bg-dark
          shadow shadow-blue-500/40
          w-[1.8rem]
          h-[1.8rem]
          flex
          items-center
          justify-center"
          @click.stop.prevent="togoaside(isFold)">
        <i :class="[isFold ? 'border-t-8 border-r-0 border-b-8 border-l-8  border-t-transparent border-r-transparent border-b-transparent border-l-blue-200 border-l-opacity-40':'border-t-8 border-r-8 border-b-8 border-l-0 border-t-transparent border-r-blue-200 border-b-transparent border-l-transparen'] "
           class="relative w-0 h-0 border-solid  transition-all duration-800"
        ></i>
      </div>
      <div
          :class="[(isLevelSmall ||isFold)?'group parent-level-small  sm:w-[4.375rem]  sm:min-w-[4.375rem] sm:parent-level':'',
           isClickParentLevel?'':'sm:parent-level']"
          class="
          w-[4.375rem]
          min-w-[4.375rem]
          sm:w-[15rem]
          sm:min-w-[15rem]
          parent-level
          bg-light
          dark:bg-dark
          h-full
          transition-all
          duration-500
          flex
          justify-start
          items-center
          flex-nowrap
          flex-col">
        <div
            class="log-big
            hidden
            relative
            sm:block
            transition-all
            duration-500
            h-[120px]
            w-[6.35rem]
            group-[.parent-level-small]:hidden">
          <img alt="" class="absolute inset-0 m-auto w-6.35rem h-auto "
               src="@/assets/img/unis-logo-color.svg">
        </div>
        <div class="log-nano block sm:hidden w-[1.55rem] h-[120px] relative group-[.parent-level-small]:block">
          <img alt=""
               class="absolute top-0 left-0 bottom-0 right-0 m-auto w-[1.55rem] h-auto "
               src="@/assets/img/logo-nano.svg"></div>
        <div :class="[isFold?'':'overflow-y']"
             class="nav-link-detales  px-[8px] box-border w-full h-[calc(100%-120px)]">
          <div v-for="(child, navLinkindex) in navLink" :key="navLinkindex"
               class=" h-auto">
            <div v-if="child.groupName"
                 class="
                 relative
                 pl-[22px]
                 transition-all
                 duration-500
                 h-0
                 overflow-hidden
                 sm:h-[40px]
                 leading-[25px]
                 group-[.parent-level-small]:h-0
">
              <div class="text-black
               dark:text-white
               text-[10px] z-999
">
                {{ child.groupName }}
              </div>
            </div>
            <div v-for="(item, childsIndex) in child.children" :key="childsIndex"
                 class="item_connect
                 w-full
                 box-border
                 flex
                 flex-wrap
                 justify-center
                 items-center
                 cursor-pointer
                 relative
                 transition-all
                 duration-500
                 group-[.parent-level-small]:hover:relative
                 ">
              <div
                  :class="{'group active bg-lap-bg dark:bg-dap-bg text-lap-text':navName==item.title}"
                  class="item_box
                          rounded-lg
                          w-full
                          relative
                          transition-all
                          duration-500
                          flex
                          items-center
                          justify-center
                          sm:justify-start
                          font-base
                          text-sm
                          min-h-[42px]
                          box-border
                          z-0
                          sm:z-9999
                          mb-1
                          hover:bg-lap-bg
                          dark:hover:bg-dap-bg
                          hover:text-lap-text
                          dark:hover:text-dap-text
                          group-[.parent-level-small]:p-0
                          group-[.parent-level-small]:z-0
                          group-[.parent-level-small]:justify-center

"
                  @click.stop.prevent="foldDetails(isFoldDetails,item)">
                <div
                    class="img-box
                    ml-[1.4rem]
                    w-[1.4rem]
                    sm:flex
                    contents
                    items-center
                    justify-center
                    text-theme-dark
                    box-shadow-custom
                    group-[.parent-level-small]:display-contents
                    group-[.parent-level-small]:text-center
                    group-[.parent-level-small]:justify-center
                    group-[.parent-level-small]:p-0
                    group-[.parent-level-small]:m-0

">
                  <span v-html="item.icon"></span>
                </div>
                <div class="pro-ab
                w-auto
                flex-1
                pr-[8px]
                transition-all
                duration-500
                hidden
                sm:block
                group-[.parent-level-small]:hidden
">
                  <div class="text-box flex justify-between items-center ml-[1rem]">
                    <a href="#">
                      <div
                          class="whitespace-nowrap text-black group-[.active]:text-lap-text   dark:text-white   pr-1 items-center font-bold text-sm">
                        {{ item.title }}
                      </div>
                    </a>
                    <span v-if="item.children && item.children.length>0"
                          :class="{'transform rotate-180': navName === item.title }"
                          class="transition-all duration-500">
                      <svg class="fill-black  group-[.active]:fill-blue-600 " fill="none" height="24"
                           viewBox="0 0 24 24"
                           width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 9.5L12 14.5L17 9.5H7Z"/>
                          </svg>
                    </span>

                  </div>
                </div>
              </div>
              <div v-if="item.children && item.children.length>0"
                   :class="[(navName != item.title && !isFold)?'h-0':'group show-children']"
                   class=" childs-box
                            overflow-inherit
                            flex-0
                            flex-grow-0
                            flex-shrink-0
                            w-full
                            max-w-full
                            transition-all
                            duration-500
                            z-50
                            sm:static
                            absolute
                            top-[4px]
                            left-[8px]
                            pt-[10px]
                            pb-[10px]
                            pl-[22px]
                            min-w-[250px]
                            sm:z-0
                            sm:block
                            sm:min-w-full
                            sm:pt-[0px]
                            sm:pl-[0px]
                            sm:pb-[0px]
                            sm:max-h-[350px]
                            overflow-hidden
                            sm:overflow-auto
                            scrollbar
                            group-[.parent-level-small]:absolute
                            group-[.parent-level-small]:hidden
                            group-[.parent-level-small]:top-2.5
                            group-[.parent-level-small]:left-10
                            group-[.parent-level-small]:z-50
                            group-[.parent-level-small]:pt-[10px]
                            group-[.parent-level-small]:pb-[10px]
                            group-[.parent-level-small]:pl-[22px]
                            group-[.parent-level-small]:min-w-[250px]
                            group-[.parent-level-small]:group-hover/item:h-auto
                            group-[.parent-level-small]:group-hover/item:block

">
                <div v-for="nav in item.children"
                     class="group child-item
                     group-hover/item:opacity-100
                     last:border-none
                     first:mt-[-3px]
                     block
                     relative
                     text-[0.875rem]
                     transition-all
                     duration-500
                     shadow-0
                     ml-[32px]
                     bg-light
                     dark:bg-dark
                     sm:pl-[10px]
                     opacity-0
                     duration-800
                     sm:opacity-100
                     group-[.show-children]:sm:before:content-open-quote
                     group-[.show-children]:sm:before:absolute
                     group-[.show-children]:sm:before:bg-gray-400
                     group-[.show-children]:sm:before:h-[1px]
                     group-[.show-children]:sm:before:left-[-2px]
                     group-[.show-children]:sm:before:w-3
                     group-[.show-children]:sm:before:top-1/2
                     group-[.parent-level-small]:before:hidden
                     group-[.parent-level-small]:opacity-1
                     group-[.parent-level-small]:before:content-initial
                     group-[.parent-level-small]:text-left
                     group-[.parent-level-small]:bg-light
                     group-[.parent-level-small]:dark:bg-dark
                     group-[.parent-level-small]:rounded-[4px]
                     group-[.parent-level-small]:ml-0
                     group-[.parent-level-small]:group-hover/item:opacity-100
                      "
                     @click.stop.prevent="foldChildetails($event,nav)">
                  <div class="line
                  absolute
                  top-0
                  left-[-2px]
                  w-[1px]
                  bottom-0
                  bg-gray-400
                  hidden
                  sm:block
                  last:bottom-[49%]
                  group-[.parent-level-small]:hidden"></div>
                  <div
                      :class="[itemChildsLink == nav.name ? '' +
                       'link_active group' +
                       ' linkActive' +
                        ' bg-lap-bg' +
                         ' dark:bg-dap-bg' +
                          '  dark:border-sky-950' +
                           ' dark:text-lap-text' +
                            ' text-lap-text' :'']"
                      class="
                              justify-between
                              pr-2
                              rounded
                              items-center
                              opacity-100
                              sm:opacity-0
                              min-h-[40px]
                              text-sm
                              sm:min-h-[0px]
                              flex
                              box-border
                              pl-[10px]
                              dark:text-white
                              dark:border-dark
                              border-b
                              last:border-none
                              dark:shadow-[0 1px 0  #202020]
                              transition-all
                              duration-900
                              hover:bg-lap-bg
                              hover:border-[rgba(20, 28, 28, 0.44)]
                              hover:shadow-[0 1px 0 rgba(41, 54, 54, 0.3)]
                              dark:hover:bg-dap-bg
                              dark:hover:text-white
                              dark:hover:border-[rgba(20, 28, 28, 0.44)]
                              dark:hover:shadow-[0 1px 0 rgba(41, 54, 54, 0.3)]
                              group-[.show-children]:min-h-[40px]
                              group-[.show-children]:opacity-100
"
                      @click.stop.prevent="foldChildetails($event,nav,item)">
                    <span class="
                          sm:hidden
                          block
                          group-[.show-children]:block ">
                      {{ nav.title }}
                    </span>
                    <svg v-if="itemChildsLink == nav.name"
                         class="fill-black
                         group-[.linkActive]:fill-blue-600 "
                         fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 17L14.5002 12L9.50024 7V17Z"/>
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
</script>-->
<template>

  <div class="h-full z-50 shadow-sm">
    <div :class="{'aside-fold':isFold}" class="aside-unfold transition-all duration-500 relative h-full flex">
      <div
          class="rounded absolute -right-[0.8rem]
            top-[4.3rem]
            cursor-pointer
            box-shadow-xs
            bg-light
            dark:bg-dark
            shadow shadow-blue-500/40
            w-[1.8rem]
            h-[1.8rem]
            flex
            items-center
            justify-center"
          @click.stop.prevent="togoaside(isFold)">
        <i :class="[isFold ? 'border-t-8 border-r-0 border-b-8 border-l-8  border-t-transparent border-r-transparent border-b-transparent border-l-blue-200 border-l-opacity-40':'border-t-8 border-r-8 border-b-8 border-l-0 border-t-transparent border-r-blue-200 border-b-transparent border-l-transparen'] "
           class="relative w-0 h-0 border-solid  transition-all duration-800"
        ></i>
      </div>
      <div
          :class="[(isLevelSmall ||isFold)?'group parent-level-small  sm:w-[4.375rem]  sm:min-w-[4.375rem] sm:parent-level':'',
           isClickParentLevel?'':'sm:parent-level']"
          class="
          w-[4.375rem]
          min-w-[4.375rem]
          sm:w-[15rem]
          sm:min-w-[15rem]
          parent-level
          bg-light
          dark:bg-dark
          h-full
          transition-all
          duration-500
          flex
          justify-start
          items-center
          flex-nowrap
          flex-col">
        <div
            class="log-big
            hidden
            relative
            sm:block
            transition-all
            duration-500
            h-[120px]
            w-[6.35rem]
            group-[.parent-level-small]:hidden">
          <img alt="" class="absolute inset-0 m-auto w-6.35rem h-auto "
               src="@/assets/img/unis-logo-color.svg">
        </div>
        <div class="log-nano block sm:hidden w-[1.55rem] h-[120px] relative group-[.parent-level-small]:block">
          <img alt=""
               class="absolute top-0 left-0 bottom-0 right-0 m-auto w-[1.55rem] h-auto "
               src="@/assets/img/logo-nano.svg"></div>
        <div :class="[isFold?'':'overflow-y']"
             class="nav-link-detales  px-[8px] box-border w-full h-[calc(100%-120px)]">
          <div v-for="(child, navLinkindex) in navLink" :key="navLinkindex"
               class=" h-auto">
            <div v-if="child.groupName"
                 class="
                 relative
                 pl-[22px]
                 transition-all
                 duration-500
                 h-0
                 hidden
                 sm:block
                 sm:h-[40px]
                 leading-[25px]
                 overflow-hidden
                 whitespace-nowrap
                 group-[.parent-level-small]:h-0
                 group-[.parent-level-small]:hidden
">
              <div class="text-gray-500
               dark:text-gray-300
               text-[10px] z-999
">
                {{ child.groupName }}
              </div>
            </div>
            <div v-for="(item, childsIndex) in child.children" :key="childsIndex"
                 class="item_connect
                 group/item
                 w-full
                 box-border
                 flex
                 flex-wrap
                 justify-center
                 items-center
                 cursor-pointer
                 relative
                 transition-all
                 duration-500
                 group-[.parent-level-small]:hover:relative
                 ">
              <div
                  :class="{'group active bg-lap-bg dark:bg-dap-bg text-lap-text':navName==item.title}"
                  class="item_box
                          rounded-lg
                          w-full
                          relative
                          transition-all
                          duration-500
                          flex
                          items-center
                          justify-center
                          sm:justify-start
                          font-base
                          text-sm
                          min-h-[42px]
                          box-border
                          z-0
                          sm:z-9999
                          mb-1
                          hover:bg-lap-bg
                          dark:hover:bg-dap-bg
                          hover:text-lap-text
                          dark:hover:text-dap-text
                          group-[.parent-level-small]:p-0
                          group-[.parent-level-small]:z-0
                          group-[.parent-level-small]:justify-center

"
                  @click.stop.prevent="foldDetails(isFoldDetails,item)">
                <div
                    class="img-box
                    ml-[1.4rem]
                    w-[1.4rem]
                    sm:flex
                    contents
                    items-center
                    justify-center
                    text-theme-dark
                    box-shadow-custom
                    group-[.parent-level-small]:display-contents
                    group-[.parent-level-small]:text-center
                    group-[.parent-level-small]:justify-center
                    group-[.parent-level-small]:p-0
                    group-[.parent-level-small]:m-0
">
                  <span v-html="item.icon"></span>
                </div>
                <div class="pro-ab
                w-auto
                flex-1
                pr-[8px]
                transition-all
                duration-500
                hidden
                sm:block
                group-[.parent-level-small]:hidden
">
                  <div class="text-box flex justify-between items-center ml-[1rem]">
                    <a href="#">
                      <div
                          class="text-gray-600 group-[.active]:text-lap-text   dark:text-gray-300   pr-1 items-center font-semibold text-sm">
                        {{ item.title }}
                      </div>
                    </a>
                    <span v-if="item.children && item.children.length>0"
                          :class="{'transform rotate-180': navName === item.title }"
                          class="transition-all duration-500">
                      <svg class="fill-gray-500  group-[.active]:fill-blue-600  " fill="none" height="24"
                           viewBox="0 0 24 24"
                           width="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 9.5L12 14.5L17 9.5H7Z"/>
                          </svg>
                    </span>

                  </div>
                </div>
              </div>
              <div v-if="item.children && item.children.length>0"
                   :class="[(navName != item.title && !isFold)?'h-0':'group show-children']"
                   class=" childs-box
                            overflow-inherit
                            flex-0
                            flex-grow-0
                            flex-shrink-0
                            w-full
                            max-w-full
                            transition-all
                            duration-500
                            z-50
                            sm:static
                            absolute
                            top-[4px]
                            left-[8px]
                            pt-[10px]
                            pb-[10px]
                            pl-[22px]
                            min-w-[250px]
                            sm:z-0
                            sm:block
                            sm:min-w-full
                            sm:pt-[0px]
                            sm:pl-[0px]
                            sm:pb-[0px]
                            sm:max-h-[350px]
                            overflow-hidden
                            sm:overflow-y-auto
                            sm:overflow-x-hidden
                            scrollbar
                            group-[.parent-level-small]:absolute
                            group-[.parent-level-small]:hidden
                            group-[.parent-level-small]:top-2.5
                            group-[.parent-level-small]:left-10
                            group-[.parent-level-small]:z-50
                            group-[.parent-level-small]:pt-[10px]
                            group-[.parent-level-small]:pb-[10px]
                            group-[.parent-level-small]:pl-[22px]
                            group-[.parent-level-small]:min-w-[250px]
                            group-[.parent-level-small]:group-hover/item:h-auto
                            group-[.parent-level-small]:group-hover/item:block

">


                <div v-for="nav in item.children"
                     class="group child-item
                     group-hover/item:opacity-100
                     last:border-none
                     first:mt-[-3px]
                     block
                     relative
                     text-[0.875rem]
                     transition-all
                     duration-500
                     shadow-0
                     ml-[32px]
                     bg-light
                     dark:bg-dark
                     sm:pl-[10px]
                     opacity-0
                     duration-800
                     sm:opacity-100
                     group-[.show-children]:sm:before:content-open-quote
                     group-[.show-children]:sm:before:absolute
                     group-[.show-children]:sm:before:bg-gray-400
                     group-[.show-children]:sm:before:h-[1px]
                     group-[.show-children]:sm:before:left-[-2px]
                     group-[.show-children]:sm:before:w-3
                     group-[.show-children]:sm:before:top-1/2
                     group-[.parent-level-small]:before:hidden
                     group-[.parent-level-small]:opacity-1
                     group-[.parent-level-small]:before:content-initial
                     group-[.parent-level-small]:text-left
                     group-[.parent-level-small]:bg-light
                     group-[.parent-level-small]:dark:bg-dark
                     group-[.parent-level-small]:rounded-[4px]
                     group-[.parent-level-small]:ml-0
                     group-[.parent-level-small]:group-hover/item:opacity-100
                      "
                >
                  <div class="line
                  hidden
                  bottom-[49%]
                  group-[.show-children]:sm:block
                  group-[.show-children]:group:sm:block
                  group-[.show-children]:sm:bottom-0
                  group-[.show-children]:sm:left-[-2px]
                  group-[.show-children]:sm:top-0
                  group-[.show-children]:sm:absolute
                  group-[.show-children]:sm:w-[1px]
                  group-[.show-children]:sm:bg-gray-400
                  group-[.parent-level-small]:sm:hidden
"></div>
                  <div
                      :class="[itemChildsLink == nav.name ? '' +
                       'link_active group' +
                       ' linkActive' +
                        ' bg-lap-bg' +
                         ' dark:bg-dap-bg' +
                          '  dark:border-sky-950' +
                           ' dark:text-lap-text' +
                            ' text-lap-text' :'']"
                      class="
                              justify-between
                              pr-2
                              rounded
                              items-center
                              opacity-100
                              sm:opacity-0
                              min-h-[40px]
                              text-sm
                              sm:min-h-[0px]
                              flex
                              box-border
                              pl-[10px]
                              dark:text-white
                              dark:border-dark
                              border-b
                              last:border-none
                              dark:shadow-[0 1px 0  #202020]
                              transition-all
                              duration-900
                              hover:bg-lap-bg
                              hover:border-[rgba(20, 28, 28, 0.44)]
                              hover:shadow-[0 1px 0 rgba(41, 54, 54, 0.3)]
                              dark:hover:bg-dap-bg
                              dark:hover:text-white
                              dark:hover:border-[rgba(20, 28, 28, 0.44)]
                              dark:hover:shadow-[0 1px 0 rgba(41, 54, 54, 0.3)]
                              group-[.show-children]:min-h-[40px]
                              group-[.show-children]:opacity-100
"
                      @click.stop.prevent="foldChildetails($event,nav,item)">
                       <span class="
                          sm:hidden
                          block
                          group-[.show-children]:block ">
                      {{ nav.title }}
                    </span>
                    <svg v-if="itemChildsLink == nav.name"
                         class="fill-black
                         group-[.linkActive]:fill-blue-600 "
                         fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.50024 17L14.5002 12L9.50024 7V17Z"/>
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
