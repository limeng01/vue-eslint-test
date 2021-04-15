export  const blockDom = function(Vue) {
    Vue.directive('frezzDom', {
        // 当被绑定的元素插入到 DOM 中时……
        inserted: function (el,binding) {
          console.log('我被插入')
          const config = { attributes: true, childList: true, subtree: true };
          const callback = function(mutationsList) {
            // Use traditional 'for loops' for IE 11
            for (let mutation of mutationsList) {
              if (mutation.type === "childList") {
                console.log('节点发生了改变')
              } else if (mutation.type === "attributes") {
                const targetDom = document.getElementById(binding.arg)
                let targetDomStyle =
                window.getComputedStyle(targetDom,null).getPropertyValue("overflow")
                if(targetDomStyle !== 'hidden'){
                  targetDom.style.overflow = 'hidden'
                  el.scrollTop = 0
                }else{
                  targetDom.style.overflow = 'auto'
                }
              }
            }
          };
          // 创建一个观察器实例并传入回调函数
          var observer = new MutationObserver(callback);
          // 以上述配置开始观察目标节点
          observer.observe(el, config);
        }
      })
  }
