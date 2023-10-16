import {Options} from 'vue-class-component';
import template from "./invoices-list.vue";
import BaseVue from '@/utils/base-vue';

@Options({
    mixins: [template],
    name: 'InvoicesList',
    components: {},
    props: {
        propMessage: String
    },
})
export default class InvoicesList extends BaseVue {


}
