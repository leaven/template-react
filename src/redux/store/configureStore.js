/**
 * @des store 标识一个状态仓库，一个app所有的状态都在这里维护
 */

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require(`redux-logger`)

  middlewares.push(logger)
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer)

export default store