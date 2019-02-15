import React,{Component} from "react"
import center from '../plugin/center.js'


import './AppHeader.css'

class AppHeader extends Component{
	render(){
		return (
			<div className="Appheader">
				<a>
					<span onClick={this.sidenavAction.bind(this)}>
					{/* <i className="iconfont icon-list"></i> */}三
					</span>
					<span className="title">卖座电影</span>
				</a>
				<a>
					<span>深圳</span>
					<span>我的</span>
				</a>
			</div>
		)
	}
	/* 点击显示隐藏侧边栏 */
	sidenavAction(){
		center.emit('navtrigger')
	}
}

export default AppHeader;