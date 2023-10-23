import {Options} from "vue-class-component";
import template from "./groupName.vue";
import BaseVue from "@/utils/base-vue";
import {find, forEach, cloneDeep, isArray} from "lodash-es";

@Options({
    mixins: [template],
    name: "GroupName",
    components: {},
    props: {
        groupName: {
            type: String,
            default: ''
        },
    },
})
export default class GroupName extends BaseVue {
    public groupName!: any;

}
