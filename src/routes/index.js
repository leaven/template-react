/**
 * @des app入口，最上层组件
 */
import React from 'react'
import createHistory from 'history/createHashHistory'
import * as Actions from '../redux/actions';
import { ConnectedRouter } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect, Provider } from 'react-redux'
import configureStore from '../redux/store/configureStore.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from '../components/home';
import Detail from '../components/detail';

const store = configureStore()

//将state转化为props传给主入口组件
function mapStateToProps(state) {
	return {
		data: state
	}
}

//将actions转化为props传给主入口组件
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

let connectComponent = connect(mapStateToProps, mapDispatchToProps);
let DetailPage = connectComponent(Detail);
let HomePage = connectComponent(Home);

const history = createHistory()

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
			    <div>
			    	<ul>
			        <li><Link to="/home">Home</Link></li>
			        <li><Link to="/detail">Detail</Link></li>
			      </ul>
			      <Route exact path="/" component={HomePage} />
			      <Route  path="/home" component={HomePage} />
			      <Route  path="/detail" component={DetailPage} />
			    </div>
			  </ConnectedRouter>
			</Provider>
		)
	}
}

