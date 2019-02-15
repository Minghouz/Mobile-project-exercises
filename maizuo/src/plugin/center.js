/* 定义一个中间对象 */
let center = {}
/* 监听方法 */
center.on = function(eventName,callback){
	if(!center[eventName]){
		center[eventName] = [];
	}
	center[eventName].push(callback);
}
/* 触发方法 */
center.emit = function(eventName,params){
	let callbackArr = center[eventName];
	callbackArr.map(callback=>{
		callback(params);
		return '';
	})
}

export default center;