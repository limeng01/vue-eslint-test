export  const vueWindowObject =  {
    title: '我是测试vue.use 第一个参数为对象',
    install: function (Vue) {
        const _this = this
        Vue.prototype.$letMeSay = function() {
            alert(_this.title)
        }

    }
}
