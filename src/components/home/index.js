import React from 'react'
import styles from './home.css'

export default class Home extends React.Component {
	componentWillMount() {
		this.props.actions.enterHome()
	}
	render() {
		console.log('render')
		return (
			<div className={styles.home}>
				{ this.props.data.home.topics.map((topic, index) => {
						return  (
								<p key={index}>{topic.topic}</p>
						)
					})
				}
			</div>
		)
	}
}