import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as detailActions from '../../redux/actions/detail'
import './index.less'

class Detail extends Component {
	constructor(props) {
		super(props)
		props.actions.getDetailTopic()
	}
	render() {
		const { details } = this.props.detail
		if (details.length) {
			return (
				<div className="detail">
					{
						details.map((detail, index) => {
							return (
								<p key={index}>{detail.title}</p>
							)
						})
					}
				</div>
			)
		}
		return null
	}
}

export default connect(
	state => ({ detail: state.detail }),
	dispatch => ({ actions: bindActionCreators(detailActions, dispatch) })
)(Detail)