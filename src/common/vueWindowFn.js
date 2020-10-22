export  const vueWindowFn = function(Vue) {

    Vue.prototype.$love = function(info) {
        alert(info)
    }
}
