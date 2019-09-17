// 测试代码
// var XXXX = AV.Object.extend('Frank2'); // 创建表
// var OOOO = new XXXX(); // 在表中创建一行数据
// OOOO.set('xxxxxxx', 'Fuck world!');// words 列名称
// OOOO.set('words', 'Fuck world!');// words 列名称
// OOOO.save().then(function (OOOO) { // 如果保存成功则打出‘保存成功。’
//   console.log('保存成功。')
//   console.log(arguments)
  
// }) 

// 初始化
// var APP_ID = 'xiq5lRgBGzFzh91gpwf9NzbM-9Nh9j0Va';
// var APP_KEY = 'wMbB0ijtXYFr7DHTvz3dMRza';

// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY
// });

// var query = new AV.Query('Message');
// query.find().then(
//   function (messages){ // 获取 Message 成功则添加到 ol 中
//     // 获取需要更新的 todo
//     let array = messages.map((item) => item.attributes)
//     array.forEach((item) => {
//       let li = document.createElement('li')
//       li.innerText = `${item.name}: ${item.content}`
//       let messageList = document.querySelector('#messageList')
//       messageList.append(li)
//     })
//   },
//   function(error){ // 获取 Message 失败则：
//     alert('获取不到 Message')
//     console.log(error)
//   }
// );

// let myForm = document.querySelector('#postMessageForm')
// myForm.addEventListener('submit',function(e){
//     e.preventDefault() // 阻止刷新
//      let content = myForm.querySelector('input[name=content]').value
//      let name = myForm.querySelector('input[name=name]').value
//      var Message = AV.Object.extend('Message');
//      var message = new Message();
//      message.set({
//        'name': name,
//        'content': content
//      });
//      message.save().then(function (Object) { // 如果保存成功则
//       let li = document.createElement('li')
//       li.innerText = `${Object.attributes.name}: ${Object.attributes.content}`
//       let messageList = document.querySelector('#messageList')
//       messageList.append(li)
//       myForm.querySelector('input[name=content]').value = ''
//       console.log(Object)
//     })
// })

!function(){
  var view = View('section.message') // V 只负责看得见的东西

  var model = Model({resourceName: 'Message'})

  var controller = Controller({
    init: function(view, controller){
      this.messageList = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.loadMessages()
    },
    loadMessages: function(){
      this.model.fetch()
        .then(
          (messages) => { // 获取 Message 成功则添加到 ol 中
            // 获取需要更新的 todo
            let array = messages.map((item) => item.attributes)
            array.forEach((item) => {
              let li = document.createElement('li')
              li.innerText = `${item.name}: ${item.content}`
              this.messageList.append(li)
            })
          },
          function(error){ // 获取 Message 失败则：
            alert('获取不到 Message')
            console.log(error)
          }
        );
    },
    bindEvents: function(){ // 绑定事件只做监听事件
      this.form.addEventListener('submit',(e)=>{
          e.preventDefault() // 表单提交后会刷新，阻止刷新
          this.saveMessage()
      })
    },
    saveMessage: function(){
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      this.model.save({
        'name': name, 'content':  content
      }).then(function (Object) { // 如果保存成功则
        let li = document.createElement('li')
        li.innerText = `${Object.attributes.name}: ${Object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        myForm.querySelector('input[name=content]').value = ''
        console.log(Object)
      })
    }
  })
  controller.init(view, model)
}.call()