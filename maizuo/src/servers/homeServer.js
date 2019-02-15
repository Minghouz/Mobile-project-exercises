import axios from 'axios'
import API from '../API'

/* 定义并导出公告 */

export function getAnnouncement(){
	return new Promise((resolve,reject)=>{
		let t = new Date().getTime();
		console.log(t);
		axios.get(API.ANNOUNCEMENT_API,{
			params: {
				'__t':new Date().getTime()
			}
		}).then(response=>{
			// console.log(response);
			if(response.status === 200 && response.statusText === "OK"){
				let result = response.data;
				if(result.status ===0 && result.msg === 'ok'){
					// console.log(result.data.billboards);
					let imgData = result.data.billboards[0];
					resolve({
						status:0,
						data: imgData
					})
				}else{
					// console.log(result.data);
					resolve({
						status:1,
						info:"数据获取失败！"
					})
				}
				
			}
		}).catch(error=>{console.log(error)})
	})
}

/* 定义并导出热映电影 */

export function getNowplaying(pnum,cnum){
	return new Promise((resolve,reject)=>{
		axios.get(API.NOWPLAYING_API,{
			params: {
				'__t':new Date().getTime(),
				'page': pnum,
				'count': cnum
			}
		}).then(response=>{
			// console.log(response);
			if(response.status === 200 && response.statusText === "OK"){
				let result = response.data;
				if(result.status ===0 && result.msg === 'ok'){
					console.log(result.data);
					let Data = result.data;
					resolve({
						status:0,
						data: Data
					})
				}else{
					console.log(result.data);
					resolve({
						status:1,
						info:"数据获取失败！"
					})
				}
				
			}
		}).catch(error=>{console.log(error)})
	})
}

/* 定义并导出即将上映电影 */

export function getComingsoon(cpnum,ccnum){
	return new Promise((resolve,reject)=>{
		axios.get(API.COMINGSOON_API,{
			params: {
				'__t':new Date().getTime(),
				'page': cpnum,
				'count': ccnum
			}
		}).then(response=>{
			// console.log(response);
			if(response.status === 200 && response.statusText === "OK"){
				let result = response.data;
				if(result.status ===0 && result.msg === 'ok'){
					console.log(result.data);
					let imgData = result.data;
					resolve({
						status:0,
						data: imgData
					})
				}else{
					console.log(result.data);
					resolve({
						status:1,
						info:"数据获取失败！"
					})
				}
				
			}
		}).catch(error=>{console.log(error)})
	})
}