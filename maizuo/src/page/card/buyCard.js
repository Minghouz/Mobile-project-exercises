import React,{Component} from "react"

import './buyCard.css'

class buyCard extends Component{
	constructor(){
		super();
		this.state={
			
		}
	}
	
	render(){
		return (
			<div id="buyCard" className="page">
			  		<div className="tel">
							<span className="inputName">卡号:</span>
							<input type="number" placeholder="请输入卡号"/>
							<span className="inputBoder"></span>
						</div>
						<div className="code">
						  <span className="inputName">密码:</span>
							<input type="text" placeholder="请输入密码"/>
							<span className="inputBoder"></span>
						</div>
						<button className="login">查询</button>
			</div>
		)
	}
}

export default buyCard;