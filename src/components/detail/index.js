import React from 'react'
import './detail.less'

export default class Detail extends React.Component {
	constructor(props) {
		console.log(props.actions)
		super(props)
	}
	render() {
		return (
			<div className="detail">Detail</div>
		)
	}
}