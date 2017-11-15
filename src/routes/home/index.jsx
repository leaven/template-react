import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as homeActions from '../../redux/actions/home'
import './index.less'

class Home extends Component {
	componentWillMount() {
		this.props.actions.getHomeTopic()
	}
	render() {
		return (
			<div className="home">
				{ this.props.home.topics.map((topic, index) => {
						return  (
								<p key={index}>{topic.topic}</p>
						)
					})
				}
			</div>
		)
	}
}

export default connect(
	state => ({ home: state.home }),
	dispatch => ({ actions: bindActionCreators(homeActions, dispatch) })
)(Home)