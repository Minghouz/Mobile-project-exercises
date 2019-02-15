import React,{Component} from "react"

import {Route,NavLink,Redirect} from 'react-router-dom'

import buyCard from './buyCard.js'
import electCard from './electCard.js'

import './Card.css'

class Card extends Component{
	constructor(){
		super();
		this.state={
			
		}
	}
	
	render(){
		return (
			<div id="card" className="page">
			  <div className="tabnav">
			  	<NavLink to="/Card/buyCard">卖座卡</NavLink>
			  	<NavLink to="/Card/electCard">电子卖座卡</NavLink>
			  </div>
				<Route path="/Card/buyCard" component = {buyCard}/>
				<Route path="/Card/electCard" component = {electCard}/>
				<Route path="/Card" exact render={()=>{
					return <Redirect to={"/Card/buyCard"}/>
				}}/>
			</div>
		)
	}
}

export default Card;