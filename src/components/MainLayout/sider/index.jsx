import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

const Sider = () => {
	return (
		<aside>
			<li><Link to='/home'>Home</Link></li>
			<li><Link to='/detail'>Detail</Link></li>
		</aside>
	)
}

export default Sider