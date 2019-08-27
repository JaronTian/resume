// !function(){
//     var person = window.person = {
//         name: 'frank'
//     }
// }.call()

!function(){
    var person = {
        name: 'frank',
        age: 18
    }
    window.frankGrowUp = function(){ // 闭包：函数访问量函数外面的变量，这个函数和变量就是闭包
        person.age += 1
        return person.age
    }
}.call() // 立即执行函数用来隔离作用域，person变成局部作用域

// 1. 立即执行函数使得 person 无法被外部访问
// 2. 闭包使得匿名函数可以操作 person
// 3. window.frankGrowUp 保存了匿名函数的地址
// 4. 任何地方都可以使用 window.frankGrowUp 操作 person
// => 任何地方都可以使用 window.frankGrowUp 操作 person，
//     ，但是不能直接访问 person

var accessor = function(){
    var person = {
        name: 'frank',
        age: 18
    }
    return function(){ // 闭包：函数访问了函数外面的变量，这个函数和变量就是闭包
        person.age += 1
        return person.age
    }
}

var growUp = accessor.call()
console.log(growUp.call()) // 19