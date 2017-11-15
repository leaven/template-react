import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import detail from './detail';
import home from './home';

const rootReducer = combineReducers({
    home: home,
    detail: detail,
    routing: routerReducer
});

export default rootReducer;