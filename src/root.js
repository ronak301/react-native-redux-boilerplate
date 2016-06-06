import React, {
  Component
} from 'react-native';

import {
  Provider,
  connect
 } from 'react-redux'

import { createStore } from 'redux'

import configureStore from './store/configureStore'
import App from './app'

const theme = {
  tabbar: {
    height: 50
  }
}

class Root extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }
  render() {
    if(!this.state.store) {
      return null;
    }
    return (
      <Provider store = {this.state.store}>
        <App />
      </Provider>
    )
  }

getChildContext () {
 return {
		theme : theme
 	}
}
}

Root.childContextTypes = {
	theme : React.PropTypes.object
 }

module.exports = Root;
