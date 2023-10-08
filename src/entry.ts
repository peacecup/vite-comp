import { App } from "vue";
import VCButton from "./Button";
import VCLink from "./Link";
import "uno.css";
import "./styles/public.css";

// 导出单独组件
export { VCButton, VCLink };

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(VCButton.name, VCButton);
    app.component(VCLink.name, VCLink);
  },
};
