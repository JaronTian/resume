// 初始化
var APP_ID = 'xiq5lRgBGzFzh91gpwf9NzbM-9Nh9j0Va';
var APP_KEY = 'wMbB0ijtXYFr7DHTvz3dMRza';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find().then(
  function (messages){ // 获取 Message 成功则添加到 ol 中
    // 获取需要更新的 todo
    let array = messages.map((item) => item.attributes)
    array.forEach((item) => {
      let li = document.createElement('li')
      li.innerText = item.content
      let messageList = document.querySelector('#messageList')
      messageList.append(li)
    })
  },
  function(error){ // 获取 Message 失败则：
    alert('获取不到 Message')
    console.log(error)
  }
);

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit',function(e){
    e.preventDefault() // 阻止刷新
     let content = myForm.querySelector('input[name=content]').value
     var Message = AV.Object.extend('Message');
     var message = new Message();
     message.set('content', content);// words 列名称
     message.save().then(function (Object) { // 如果保存成功则打出‘保存成功。’
        window.location.reload()
        console.log('保存成功。')
    })
})

// 测试代码
// var XXXX = AV.Object.extend('Frank2'); // 创建表
// var OOOO = new XXXX(); // 在表中创建一行数据
// OOOO.set('xxxxxxx', 'Fuck world!');// words 列名称
// OOOO.set('words', 'Fuck world!');// words 列名称
// OOOO.save().then(function (OOOO) { // 如果保存成功则打出‘保存成功。’
//   console.log('保存成功。')
//   console.log(arguments)
  
// }) 