/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;

  export default component;
}
declare module "marked";

declare module "@heroicons/vue/*" {
  const content: any
  export default content
}
declare module '@heroicons/vue' {
  import { Component } from 'vue';

  export const ChevronDownIcon: Component;
  // Add other icons here if needed.
}