import "ant-design-vue/dist/antd.less";
import { Button, Select, Breadcrumb } from "ant-design-vue";
const components = {
  Button,
  Select,
  Breadcrumb,
};

export default {
  install(Vue) {
    Object.keys(components).forEach((key) => Vue.use(components[key]));
  },
};
