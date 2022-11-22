import { legacy_createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

import reducers from './reducer/index';

export default legacy_createStore(reducers,  applyMiddleware(thunk))