
//base css
import './common/style/normalize.css';
// import './layout.less';

import App from './routes/';
import ReactDOM from 'react-dom'
import React from 'react'

import Promise from 'promise-polyfill'

if (!window.Promise) {
	window.Promise = Promise
}
import fetch from 'whatwg-fetch'
if (!window.fetch) {
	window.fetch = fetch
}

ReactDOM.render(
		<App />,
	document.querySelector('#app')
);

