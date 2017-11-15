import React, { Component } from 'react'
import Header from './header'
import Sider from './sider/'

import './index.less'

export default class MainLayout extends Component {
	render() {
		return (
			<div className="layout">
				<Header />
				<main>
						<Sider />
						<div className="content">
							{this.props.children}
						</div>
				</main>
			</div>
		)
	}
}