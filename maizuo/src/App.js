import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect} from 'react-router-dom'

import AppHeader from './common/AppHeader.js'
import SideNav from './common/SideNav.js'

import Home from './page/home/Home.js'
import Mine from './page/mine/Mine.js'

import Films from './page/films/Films.js'

import Cinimas from './page/cinimas/Cinimas.js'
import Card from './page/card/Card.js'

import './App.css';

class App extends Component {
  render() {
    return (
			<BrowserRouter>
      <div className="App">
					<AppHeader></AppHeader>
	
					<Route path="/Home" component={Home}/>
					 <Route path="/Films"  component={Films}/>
					<Route path="/Cinimas" component={Cinimas}/>
					<Route path="/Mine" component={Mine}/>
					<Route path="/Card" component={Card}/>
					<Route path="/" exact render={()=>{
						return <Redirect to={"/Home"}/>
					}}/>
					
					<SideNav></SideNav>
      </div>
			</BrowserRouter>
    )
  }
}

export default App;
