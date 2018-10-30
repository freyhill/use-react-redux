/**
 * @file: app.js业务逻辑
 * @author: leinov
 * @date: 2018-10-29
 */
import React, { Component } from "react";
import store from "./redux.js";

class App extends Component {
	constructor() {
		super();
	}
	componentDidMount(){

	}
	// 操作action加1
	increment(){
		store.dispatch({ type: "INCREMENT" });
	}
	// 减1
	decrement (){
		store.dispatch({type:"DECREMENT"});
	}
	render() {
		let state = store.getState();
		return (
			<div className="App">
				<header className="App-header">
					<div onClick={this.increment} >加法</div>
					<div onClick={this.decrement} >减法</div>
					<div>数据{state}</div>
				</header>
			</div>
		);
	}
}

export default App;
