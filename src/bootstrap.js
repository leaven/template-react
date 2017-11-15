import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './routes/'
import store from './redux/store/configureStore.js'

import './common/style/normalize.css'
import './common/style/base.css'

import Promise from 'promise-polyfill'
if (!window.Promise) {
	window.Promise = Promise
}
import fetch from 'whatwg-fetch'
if (!window.fetch) {
	window.fetch = fetch
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#app')
);

