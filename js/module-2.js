// !function(){
//     var person = window.person
//     console.log(person)
// }.call()

!function(){
    var newAge = window.frankGrowUp() // 不加() 就等于函数体，不执行
    console.log(newAge)
}.call() // 19