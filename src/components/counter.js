import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  PropTypes,
  Image
} from 'react-native';

import { createStore } from 'redux'
import { connect } from 'react-redux'

import {increaseAction, decreaseAction, fetchData} from '../actions/counter'

const url = 'http://ip.jsontest.com/';
const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent : 'center',
    alignItems : 'center'
  }
});

class CounterComponent extends Component {

  render () {
    var {store,theme} = this.context;
    store.dispatch(fetchData(url)).then(data => console.log(data));
    const { value,onIncreaseClick,onDecreaseClick } = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={{height: 100 , width:100}}
          source={require('../assets/example.svg')} />
        <Text>{value}</Text>
        <Text onPress = {onIncreaseClick}>+</Text>
        <Text onPress = {onDecreaseClick}>-</Text>
      </View>
    );
  }
}
CounterComponent.propTypes = {
  value : PropTypes.number.isRequired,
  onIncreaseClick : PropTypes.func.isRequired,
  onDecreaseClick : PropTypes.func.isRequired
}

CounterComponent.contextTypes = {
  store: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    value: state.counter.count
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick : () => {
      dispatch(increaseAction())
    },
    onDecreaseClick : () => {
      dispatch(decreaseAction())
    }
  }
}

let Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);

module.exports = Counter;
