import React,{Component} from "react"

import './electCard.css'

class electCard extends Component{
	constructor(){
		super();
		this.state={
			
		}
	}
	
	render(){
		return (
			<div id="electCard" className="page">
			  	<div className="tel">
							<span className="inputName">卡号:</span>
							<input type="number" placeholder="请输入电子卖座卡号"/>
							<span className="inputBoder"></span>
					</div>
					<button className="login">查询</button>
			</div>
		)
	}
}

export default electCard;