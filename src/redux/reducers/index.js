import { combineReducers } from 'redux';

import { layout } from './layout';
import { user } from './user';

const rootReducers = combineReducers({ layout, user });

export default rootReducers;
