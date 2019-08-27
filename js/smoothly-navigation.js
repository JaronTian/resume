// !function(){
//   var view = document.querySelector('nav.menu')
//   var controller = function(view){
//     let aTags = view.querySelectorAll('nav.menu > ul > li > a')
//     function animate(time) { //缓动
        //   requestAnimationFrame(animate);
        //   TWEEN.update(time);
        // }
        // requestAnimationFrame(animate);
//     for(let i=0; i<aTags.length; i++){
//       aTags[i].onclick = function(x){
//         x.preventDefault()
//         let a = x.currentTarget // 获取被点击的元素
//         let href = a.getAttribute('href') // '#siteAbout',获取原文不然会被浏览器加协议
//         let element = document.querySelector(href) //返回匹配指定选择器的第一个元素
//         let top = element.offsetTop //获取元素距离页面顶部的像素数
//         //let top = dooument.querySelector(x.currentTarget.getAttribute('href')).offsetTop
        
        
//         let currentTop = window.scrollY //当前高度
//         let targetTop = top - 80 // 目标高度
//         let s = targetTop-currentTop // 路程
    
//         var coords = {y: currentTop }; // 开始位置
//         var t = Math.abs(s/100)*300 // 时间
//         if(t>500){ t = 500 }
//         var tween = new TWEEN.Tween(coords)
//           .to({y: targetTop}, t) //目标位置
//           .easing(TWEEN.Easing.Quadratic.InOut) // 缓动类型
//           .onUpdate(() => { 
//             window.scrollTo(0,coords.y) //把内容滚动到指定的坐标。调用函数生成缓动的中间位置
//           })
//           .start(); // 开始缓动
//       }
//     }
//   }
//   controller(view)
// }.call() 

!function(){
  var view = document.querySelector('nav.menu')
  var controller = {
    view: null,
    aTags: null,
    initAnimation: function(){
      function animate(time){
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    scrollToElement: function(element){
      let top = element.offsetTop //获取元素距离页面顶部的像素数
      //let top = dooument.querySelector(x.currentTarget.getAttribute('href')).offsetTop
      let currentTop = window.scrollY //当前高度
      let targetTop = top - 80 // 目标高度
      let s = targetTop-currentTop // 路程
  
      var coords = {y: currentTop }; // 开始位置
      var t = Math.abs(s/100)*300 // 时间
      if(t>500){ t = 500 }
      var tween = new TWEEN.Tween(coords)
        .to({y: targetTop}, t) //目标位置
        .easing(TWEEN.Easing.Quadratic.InOut) // 缓动类型
        .onUpdate(() => { 
          window.scrollTo(0,coords.y) //把内容滚动到指定的坐标。调用函数生成缓动的中间位置
        })
        .start(); // 开始缓动
    },
    bindEvents: function(){
      let aTags = this.view.querySelectorAll('nav.menu > ul > li > a')
      for(let i=0; i<aTags.length; i++){
        aTags[i].onclick = (x) => {
          x.preventDefault()
          let a = x.currentTarget // 获取被点击的元素
          let href = a.getAttribute('href') // '#siteAbout',获取原文不然会被浏览器加协议
          let element = document.querySelector(href) //返回匹配指定选择器的第一个元素
          this.scrollToElement(element)
        }
      }
    },
    init: function(view){
      this.view = view
      this.initAnimation()
      this.bindEvents()
    }
  }
  controller.init(view)
}.call()

