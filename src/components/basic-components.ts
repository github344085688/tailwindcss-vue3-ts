import {createApp} from "vue";
import DefaultSelect from "@/components/basic-components/base-menu";


const  BasicComponents = (app:any) => {
    // 在install方法中添加全局安装逻辑
    app.component(DefaultSelect.name, DefaultSelect);
    // app.component(DefaultSelect.name, DefaultSelect);
    // 或者使用全局注册
    // app.use(MyComponent);

    // 可以在install方法中访问Vue应用程序的实例app
    // 可以执行其他全局配置或提供全局服务等
};

export default BasicComponents;