
'use strict';

import {applyMiddleware, createStore} from 'redux'
import thunk from'redux-thunk'
import reducers from '../reducers'
import {persistStore, autoRehydrate} from 'redux-persist'
import {AsyncStorage} from 'react-native'

var middleware = applyMiddleware(thunk);

function configureStore(onComplete) {
  const initialState = {
    count  : 0
  }
  const store = createStore(reducers , {counter : {count : 0} } , applyMiddleware(thunk));
  persistStore(store, {storage: AsyncStorage}, onComplete);
  return store;
}

module.exports = configureStore;
