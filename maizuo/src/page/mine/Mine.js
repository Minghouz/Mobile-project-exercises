import React,{Component} from "react"

import './Mine.css'

class Mine extends Component{
	constructor(){
		super();
		this.state={
			
		}
	}
	
	render(){
		return (
			<div id="mine" className="page">
				<div className="tels">
					<input type="number" placeholder="输入手机号"/>
					<span className="inputBoder"></span>
				</div>
				<div className="codes">
					<input type="text" placeholder="输入验证码"/>
					<span className="inputBoder"></span>
				</div>
				<button className="login">登录</button>
			</div>
		)
	}
}

export default Mine;