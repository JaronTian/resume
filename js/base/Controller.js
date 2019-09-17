/* 使用方法
Controller({
    init:(){
        this.view
        this.model
        this.xxx()
        this.yyy()
    },
    xxx(){},
    yyy(){}
})
*/

window.Controller = function(options){
    var init = options.init // B
    let object = {
        view: null,
        model: null,
        init: function(view, model){ // A
            this.view = view
            this.model = model
            this.model.init()
            init.call(this, view, model) // init 是第二行的 init ,因为第6行的 init 是属性
            this.bindEvents.call(this)  
        },
    }
    for(let key in options){ // 遍历 把options上的属性（除了 init）复制到 object 里
        if(key !== 'init'){
            object[key] = options[key]
        }  
    }
    return object
}
/* this 是什么
1. controller === object
2. controller.init(view, model)
controller.init.call(controller, view, model)
那么 controller.init 里面的 this 当然 TM 是 controller
也就是这个1里面的object
controller.init 里面的 this 就是 object
object.init 里面的 this 就是 object
3. initB.call(this)
initB 里面的 this === call 后面的this
call 后面 this === 第二条里的 this
第二条里面的 this === object
=> initB 里面的 this 就是 object
*/