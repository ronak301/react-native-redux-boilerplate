
'use strict';

import {applyMiddleware, createStore} from 'redux'
import thunk from'redux-thunk'
import reducers from '../reducers'
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'
import promiseMiddleware from 'redux-promise';

var middleware = applyMiddleware([thunk,promiseMiddleware]);

function configureStore(onComplete) {
  const store = createStore(reducers , {} , applyMiddleware(thunk));
  persistStore(store, {storage: AsyncStorage}, onComplete);
  return store;
}

module.exports = configureStore;
