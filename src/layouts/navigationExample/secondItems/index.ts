import {Options} from "vue-class-component";
import template from "./secondItems.vue";
import BaseVue from "@/utils/base-vue";
import {find, forEach, cloneDeep, isArray} from "lodash-es";

@Options({
    mixins: [template],
    name: "SecondItems",
    components: {},
    props: {},
})
export default class SecondItems extends BaseVue {
    

}
