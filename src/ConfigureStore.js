import { createStore } from 'redux';

import rootReducer from './reducers/Index';
console.log(rootReducer);
export default createStore(rootReducer);