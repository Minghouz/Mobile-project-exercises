import React,{Component} from "react"
import {Link} from 'react-router-dom'
import center from '../plugin/center.js'

import './SideNav.css'

class SideNav extends Component{
	constructor(){
		super();
		this.trigger = this.trigger.bind(this);
		this.state={
			isShow:false,
			itemArr:[
				{
					tit:'首页',
					path:'/Home'
				},
				{
					tit:'影片',
					path:'/Films'
				},
				{
					tit:'影院',
					path:'/Cinimas'
				},
				{
					tit:'我的',
					path:'/Mine'
				},
				{
					tit:'卖座卡',
					path:'/Card'
				}
			]
		}
		center.on('navtrigger',this.trigger)
	}
	trigger(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
	render(){
			let {isShow,itemArr}=this.state;
		return (
		<div className={"sideWrap"+(isShow ? "" : " hide")}>
			
			<div className={"filter"+(isShow ? " show" : " hide")}  onClick={this.sideWrapClick.bind(this)}></div>
			<div className={"SideNav"+(isShow ? " show" : " hide")} >
			<nav className="nav">{
				itemArr.map(item=>{
					return <Link key={item.tit} to={item.path} onClick={this.navitemClick.bind(this)}>{item.tit}</Link>
				})}
			</nav>
			
			</div>
		</div>
		)
	}
	sideWrapClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
	navitemClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
}

export default SideNav;