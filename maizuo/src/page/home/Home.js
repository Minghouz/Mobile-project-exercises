import React,{Component} from "react"



import {getAnnouncement,getNowplaying,getComingsoon} from "../../servers/homeServer.js"
import './Home.css'

class Home extends Component{
	constructor({match,history,location}){
		super();
		this.history = history;
		this.state={
			page:1,
			count:5,
			cpage:1,
			ccount:3,
			slideImg:[],
			playingFilms:[],
			comingFilms:[]
		}
	}
// 	let playingDom = (<div className="playingBox">
// 				<h2>热映图</h2>
// 	</div>)
	render(){
		let {slideImg,playingFilms,comingFilms} = this.state;
		return (
			<div id="home" className="page">
			{/* 卖座公告轮播 */}
				<div className="announcement">
					<div className="swiper-container" ref="container">
					    <div className="swiper-wrapper">
					    	<div className="swiper-slide">
									 <img src={slideImg} alt="卖座公告"/> 
								</div>	
					    </div>
					    <div className="swiper-pagination"></div>
					</div>
				</div>
			  <div className="now_playing">
					{playingFilms.map(item=>{
						return (<div className="films_item" key={item.id}>
								<a>
										<img src={item.cover.origin} alt={item.name}/>
								</a>
								<div className="films_title">
									<div className="title">
										<h5>{item.name}</h5>
										<p>
										<span>{item.cinemaCount}</span>家影院上映
										<span>{item.watchCount}</span>人购票
										</p>
									</div>
									<div className="score">{item.grade}</div>
								</div>
							</div>)
					})}		
						
						<div className="more-button" onClick={this.goPlaying.bind(this)}>更多热映电影</div>
				</div>
			
				<div className="coming_soon">
						<div className="coming_line">
							<span>即将上映</span>
						</div>
						
						{
							comingFilms.map(item=>{
								return (<div className="films_item" key={item.id}>
										<a>
												<img src={item.cover.origin} alt={item.name}/>
										</a>
										<div className="films_title">
											<div className="title">
												<h5>{item.name}</h5>
											</div>
											<div className="score">{item.grade}</div>
										</div>
									</div>)
							})
						}
						
						<div className="more-button" onClick={this.goComingsoon.bind(this)}>更多即将上映电影</div>
				</div>
			</div>
		)
	}
	goPlaying(){
		this.history.push("/Films/Playing");
	}
	goComingsoon(){
		this.history.push("/Films/Coming")
	}
	/* 组件创建完成 */
	componentDidMount(){
		/* 获取公告数据 */
		getAnnouncement().then(res=>{
			this.setState({
				slideImg:res.data.imageUrl
			})
		})
		let pnum = this.state.page;
		let cnum = this.state.count;
		console.log(pnum,cnum);
		/* 获取即将上映电影 */
		getNowplaying(pnum,cnum).then(res=>{
			if(res.status===0){
					this.setState({
						playingFilms:res.data.films
					})
					// console.log(this.state.playingFilms);
			}
			
		})
		/* 获取正在热映电影 */
		let cpnum = this.state.cpage;
		let ccnum = this.state.ccount;
		console.log(cpnum,ccnum);
		getComingsoon(cpnum,ccnum).then(res=>{
			if(res.status===0){
				this.setState({
					comingFilms:res.data.films
				})
			}
			// console.log(this.state.comingFilms);
		})
	}
	
	shouldComponentUpdate(props,state){
		// console.log("shouldComponentUpdate执行了")
		// console.log(props,state);
		return true;
	}
	getSnapshotBeforeUpdate(props,state){
		// console.log("getSnapsBeforeUpdate执行了")
		// console.log(props,state);
		return {};
	}
	componentDidUpdate(){
		// console.log("componentDidUpdate执行了");
	}
}

// Home.getDerivedStateFromProps({
// 	console.log(rest)
// 	// return {};
// })
export default Home;