// !function(){
//   var view = document.querySelector('#topNavBar')
//   var controller = function(view){
//     window.addEventListener('scroll', function(x){
//       if(window.scrollY > 0){
//         view.classList.add('sticky')
//       }
//       else{
//         view.classList.remove('sticky')  
//       }
//     })
//   }
//   controller.call(null,view) // contorller(view)
// }.call()
!function(){
  var view = document.querySelector('#topNavBar')
  var controller = {
    view: null,
    init: function(view){
      this.view = view
      this.bindEvents() 
      //转换成 this.bindEvents.call(this)，bindEvents() 里的 this 就是左边的 this
    },
    bindEvents: function(){
      window.addEventListener('scroll', (x) => {
        if(window.scrollY > 0){
          this.active()
        }
        else{
          this.deactive()
        }
      })
    },
    active: function(){
      this.view.classList.add('sticky')
    },
    deactive: function(){
      this.view.classList.remove('sticky')
    }
  }
  controller.init(view) 
  //转换成 controller.init.call(controller,view) ,init 函数里的 this 就是对象 controller
}.call()
