import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from '../components/home'
import Detail from '../components/detail'

import { ConnectedRouter } from 'react-router-redux'
import { bindActionCreators } from 'redux'
export default class App extends Component {
	// render() {
	// 	const {actions, data} = this.props;

	// 	return (
	// 		<Router history={history} routes={routes} />
	// 	);
	// }
	render() {
		return (
				<ConnectedRouter history={history}>
			    <div>
			    	<ul>
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/home">Home</Link></li>
			        <li><Link to="/detail">Detail</Link></li>
			      </ul>
			      <Route exact path="/" component={HomePage} />
			      <Route  path="/home" component={HomePage} />
			      <Route  path="/detail" component={DetailPage} />
			    </div>
			  </ConnectedRouter>
		)
	}
}