// !function(){
//   var view = document.querySelector('#mySlides')
//   var controller = function(view){
//     var mySwiper = new Swiper (view.querySelector('.swiper-container'), {
//       // direction: 'vertical', // 垂直切换选项
//       loop: true, // 循环模式选项
      
//       // 如果需要分页器
//       pagination: {
//         el: '.swiper-pagination',
//       },
      
//       // 如果需要前进后退按钮
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
      
//       // 如果需要滚动条
//       scrollbar: {
//         el: '.swiper-scrollbar',
//       },
//     })
//   }
//   controller(view)
// }.call()

!function(){
  var view = View('#mySlides')
  var controller = {
    view: null,
    swiper: null,
    swiperOptions: {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    },
    init: function(view){
      this.view = view
      this.initSpiper()
    },
    initSpiper: function(){
      this.swiper = new Swiper (
        this.view.querySelector('.swiper-container'), 
        this.swiperOptions
      )
    }
  }
  controller.init(view)
}.call()
