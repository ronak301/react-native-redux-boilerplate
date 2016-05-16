/*
* @flow
*/

'use strict';

export type State = {
  [count : string] : number
}

function counter(state = {count : 0} : State , action): State {
  let count = state.count;
  switch (action.type) {
    case 'INCREAMENT':
      return Object.assign({},state,{count:count + 1});
      break;
    case 'DECREAMENT':
      return {...state, count:count - 1};
      break;
    default:
      return state;
      break;
  }
}

module.exports = counter;
