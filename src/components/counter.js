import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  PropTypes
} from 'react-native';

import { createStore } from 'redux'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent : 'center',
    alignItems : 'center'
  }
});

class CounterComponent extends Component {
  props : {
    value : PropTypes.func,
    onIncreaseClick : PropTypes.func,
    onDecreaseClick : PropTypes.func
  }

  render () {
    const { value,onIncreaseClick,onDecreaseClick } = this.props;
    return (
      <View style={styles.container}>
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

const increaseAction = {type:'INCREAMENT'}
const decreaseAction = {type:'DECREAMENT'}

const mapStateToProps = ({counter:{count}}) => {
  return {
    value: count
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick : () => {
      dispatch(increaseAction)
    },
    onDecreaseClick : () => {
      dispatch(decreaseAction)
    }
  }
}

let Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);

module.exports = Counter;
