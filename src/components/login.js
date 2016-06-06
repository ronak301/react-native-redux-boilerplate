import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />);
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './config.json';
import ParallaxView from 'react-native-parallax-view';

class Login extends Component {

  render() {
    const Icon = createIconSetFromFontello(fontelloConfig);
    const { props } = this.props;
    return (
      <View onPress = {() => Actions.register({data:{name:'Ronak'}})} style={styles.container}>
        <Image
          source={{uri:'http://www.comedyflavors.com/wp-content/uploads/2015/02/hero.gif'}}
          style={{height:200,width:300, borderRadius: 10}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Login;
