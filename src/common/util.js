/**
 * 是否拥有class
 * @param el
 * @param className
 * @returns {boolean}
 */
export function hasClass(el, className) {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
}

/**
 * 添加class
 * @param el
 * @param className
 */
export function addClass(el, className) {
  if (hasClass(el, className)) {
    return;
  }

  let newClass = el.className.split(" ");
  newClass.push(className);
  el.className = newClass.join(" ");
}

/**
 * 删除class
 * @param el
 * @param className
 */
export function removeClass(el, className) {
  if (!hasClass(el, className)) {
    return;
  }

  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)", "g");
  el.className = el.className.replace(reg, " ");
}

/**
 * 设置或获取自定义属性
 * @param el
 * @param name
 * @param val
 * @returns {string|null}
 */
export function getData(el, name, val) {
  let prefix = "data-";
  if (val) {
    return el.setAttribute(prefix + name, val);
  }
  return el.getAttribute(prefix + name);
}

/**
 * 拼接url参数
 * */
export const joinUrlParams = (url, oParams) => {
  const keys = Object.keys(oParams);
  const _array = keys.map((o) => {
    return `${o}=${oParams[o]}`;
  });
  const paramStr = _array.join("&");
  return `${url}${url.indexOf("?") === -1 ? "?" : "&"}${paramStr}`;
};
/*
 * 日期格式2019/12/12 12:21:05
 */
export const timeFormat = (date) => {
  const formatNumber = (n) => {
    n = n.toString();
    return n[1] ? n : "0" + n;
  };
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};
/*
 * 防抖
 */

export const debounce = (method, wait, immediate) => {
  let timeout;
  return function(...args) {
    let context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    // 立即执行需要两个条件，一是immediate为true，二是timeout未被赋值或被置为null
    if (immediate) {
      // 如果定时器不存在，则立即执行，并设置一个定时器，wait毫秒后将定时器置为null
      // 这样确保立即执行后wait毫秒内不会被再次触发
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) {
        method.apply(context, args);
      }
    } else {
      // 如果immediate为false，则函数wait毫秒后执行
      timeout = setTimeout(() => {
        // args是一个类数组对象，所以使用fn.apply
        // 也可写作method.call(context, ...args)
        method.apply(context, args);
      }, wait);
    }
  };
};
/*
 * 触底加载数据
 */
export const reachBottom = (
  element,
  callback,

  context,
  threshold = 50,
  scrollTopArgu = 0
) => {
  if (!(callback instanceof Function)) {
    throw new Error("callback is not a function");
  }
  let destroyed_scroll_top;
  function eventFn(e) {
    let { clientHeight, scrollTop, scrollHeight } = e.target;
    destroyed_scroll_top = scrollTop || 0;
    // scrollTop 在pc滑动过快导致数据不同步

    if (
      scrollTop >= scrollTopArgu &&
      clientHeight + scrollTop + threshold > scrollHeight &&
      context.times === false
      // scrollHeight - clientHeight + scrollTop >= threshold
    ) {
      console.log("到底了");
      context.times = true;
      /*
       *scrollTopArgu为了记住内部的滚动距离
       *防止：当页面上滑时 距离小于目标阀值时，也会触发请求
       */
      scrollTopArgu = scrollTop;
      callback();
    }
  }
  element.addEventListener("scroll", debounce(eventFn, 20, true));
  context.$on("hook:destroyed", () => {
    sessionStorage.setItem("scrollTop", destroyed_scroll_top);
    element.removeEventListener("scroll", eventFn);
  });
};
