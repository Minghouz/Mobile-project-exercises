import React,{Component} from "react"

import './playing.css'
import {getNowplaying} from '../../servers/homeServer.js'
class Playing extends Component{
	constructor(){
		super();
		this.state={
			page:1,
			count:7,
			NowArr:[]
		}
	}
	
	render(){
		return (
			<div id="Playing" className="page">
			  正在热映
			</div>
		)
	}
	/* 组件创建完成 */
	componentDidCount(){
		let page = this.state.page;
		let count = this.state.count;
		console.log(page,count);
		getNowplaying(page,count).then(res=>{
			if(res.status===0){
				this.setState({
					NowArr:res.data
				})
			}
		})
		console.log(this.state.NowArr);
		console.log("componentDidCount执行了");
	}
}

export default Playing;