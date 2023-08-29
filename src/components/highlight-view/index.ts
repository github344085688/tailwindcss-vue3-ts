import { Options } from 'vue-class-component';
import template from "./highlight-view.vue";
import BaseVue from '@/utils/base-vue';
import './highlight-view.scss';
import { marked } from "marked";
import hljs from "highlight.js";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js/styles/dark.css';
@Options({
    mixins: [template],
    name: 'HighlightView',
    components: {
        highlightjs: hljsVuePlugin.component,
    },
})
export default class HighlightView extends BaseVue {

    public markedHtml: any = "";
    public htmlGrildCode: any = `
      let x = 5;
      let y=10;
      let obj={
        age:12,
        name:'lihao'
      }`;
    public mounted() {
        marked.setOptions({
            gfm: true, // 启动类似于Github样式的Markdown语法
            pedantic: false, // 只解析符合Markdwon定义的，不修正Markdown的错误
            sanitize: false, // 原始输出，忽略HTML标签（关闭后，可直接渲染HTML标签）
            // 高亮的语法规范
            highlight: (code: any, lang: any) =>
                hljs.highlight(code, { language: lang }).value,
        });
        this.markedHtml = marked(
            `## __Grid system__
 > grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. .
<style>
table{

width: 100%;
}
thead{
background: #cbcbcb;
}
th{
padding:10px 5px;
}
td{
padding:10px 5px;
border-bottom:1px solid #7b8085 ;
}
</style>
$xs: (0px:320px);
$sm: (320px:640px);
$md: (640px: 750px);
$lg: (750px:992px);
$xl: (992px:1200px);
$xl2: (1200px:1920px);
only screen and (min-width: xxx) :
|                                    | default<br>0~~| xs<br>0~540  | sm<br>540~640  | md <br>640~750 | lg<br> 750~992  | xl<br> 992~1200 |
| ---------------------------------- |   ----------- | -----------  | -------------- |----------------| --------------- | ----------------|
| Container(min-width)               |    None (auto)| None (auto)  |     540px      |      720px     |     960px       |       1140px    |
|    Class prefix                    |      grid-    |   xs:grid-   |     sm:grid-   |     md:grid-   |     lg:grid-    |      xl:grid-   |
`
        );
    }

}
