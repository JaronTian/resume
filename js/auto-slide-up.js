// 添加 offset 类
//findClosestAndRemoveOffset() // 先执行一次，不然一开始没有从下往上的效果
let specialTags = document.querySelectorAll('[data-x]')
for(let i=0; i<specialTags.length; i++){
  specialTags[i].classList.add('offset')
}
window.addEventListener('scroll', function(x){
    findClosestAndRemoveOffset()
  })


// helper
function findClosestAndRemoveOffset(){
    //找离窗口顶部最近的元素
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i = 1; i < specialTags.length; i++){
        if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
        minIndex = i
        }
    }
    specialTags[minIndex].classList.remove('offset')
    //给离窗口顶部最近的元素加 highlight
    for(let i=0; i<specialTags.length; i++){
        specialTags[i].classList.remove('highlight')
    }
    specialTags[minIndex].classList.add('highlight')
    //给离窗口顶部最近的元素对应的导航 li 加 highlight
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for(let i=0; i<brothersAndMe.length; i++){
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}