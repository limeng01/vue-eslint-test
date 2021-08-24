import Toast from "../components/toast";
import Vue from "vue";
const ToastConstructor = Vue.extend(Toast);

function showToast(text, duration) {
  let toastDom = document.getElementById("toast");
  if (toastDom) {
    document.getElementById("toast").style.opacity = 1;
    document.getElementById("toast").childNodes[0].innerText = text;
  } else {
    const toastDom = new ToastConstructor({
      el: document.createElement("div"),
      data() {
        return {
          text,
          show: true,
        };
      },
      id: "toast",
    });
    document.body.appendChild(toastDom.$el);
  }

  setTimeout(() => {
    document.getElementById("toast").style.opacity = 0;
    console.log("透明");
  }, duration);
}

function toastRegistry() {
  Vue.prototype.$toast = showToast;
}

export default toastRegistry;
