// 现在的写法

/* 调用方法
var model = Model({resourceName: 'Message'})
var model2 = Model({resourceName: 'X'})
model.init()
model.fetch()
model.save({name: 'xxx', content: 'xxx'})
*/

// 大 Model 就是一个模板
window.Model = function(options){
    let resourceName = options.resourceName
    return{
        init: function(){ // 初始化
            var APP_ID = 'xiq5lRgBGzFzh91gpwf9NzbM-9Nh9j0Va';
            var APP_KEY = 'wMbB0ijtXYFr7DHTvz3dMRza';
            AV.init({ appId: APP_ID, appKey: APP_KEY });
        },
        fetch: function(){ // 获取数据
            var query = new AV.Query(resourceName);
            return query.find() // Promise 对象
        },
        save: function(object){ // 创建数据
            var X = AV.Object.extend(resourceName);
            var x = new x();
            message.set(object);
            return x.save()
        }
    }
}

// 以前的写法
// var model = {
//     init: function(){ // 初始化
//         var APP_ID = 'xiq5lRgBGzFzh91gpwf9NzbM-9Nh9j0Va';
//         var APP_KEY = 'wMbB0ijtXYFr7DHTvz3dMRza';
//         AV.init({ appId: APP_ID, appKey: APP_KEY });
//     },
//     fetch: function(){ // 获取数据
//         var query = new AV.Query('Message');
//         return query.find() // Promise 对象
//     },
//     save: function(object){ // 创建数据
//         var X = AV.Object.extend('Message');
//         var x = new x();
//         message.set(object);
//         return x.save()
//     }
// }