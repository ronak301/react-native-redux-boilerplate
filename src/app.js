  import React, {
  Component,
  StyleSheet
} from 'react-native';

import {Scene, Router, TabBar, Modal, Schema, Actions, Reducer} from 'react-native-router-flux'
import reducers from './reducers'
import {
  connect
 } from 'react-redux'

import Counter from './components/counter'
import Login from './components/login'
import Register from './components/register'

const ReduxRouter = connect()(Router);

class App extends Component {
  render() {
    return (
      <ReduxRouter>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" hideNavBar = {true}/>
          <Scene key="register" component={Register}  title="Register"/>
          <Scene key="counter" initial={true} component={Counter} title="Counter"/>
         </Scene>
      </ReduxRouter>
    );
  }
}

module.exports = App;
