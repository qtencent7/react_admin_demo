import { combineReducers } from "@reduxjs/toolkit";

import auth from './auth';
import layout from './layout';

export default combineReducers({
    auth,
    layout,
})