/**
 * @des store 标识一个状态仓库，一个app所有的状态都在这里维护
 */

import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
//创建一个中间件以便执行异步action
/*const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)*/

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
