import React,{Component} from "react"
import {Redirect,Route,NavLink} from 'react-router-dom'

import Coming from './coming.js'
import Playing from './playing.js'

import './Films.css'

class Films extends Component{
	constructor(){
		super();
		this.state={
		}
	}
	
	render(){
		return (
			<div id="films" className="page">
				<div className="tabNav">
					<NavLink to="/Films/Playing">正在热映</NavLink>
					<NavLink to="/Films/Coming">即将上映</NavLink>
				</div>
				<Route path="/Films/Coming" component={Coming}/>
				<Route path="/Films/Playing" component={Playing}/>
				<Route path="/Films" exact render={()=>{
					return <Redirect to={"/Films/Playing"}/>
				}}/>
			</div>
		)
	}
}

export default Films;