/*
* @flow
*/

'use strict';

import update from 'react-addons-update';

export type State = {
  [count : string] : number
}

function counter(state = {count : 0} : State , action): State {
  let count = state.count;
  switch (action.type) {
    case 'INCREAMENT':
      return update(state , {
        count: { $set: count+1 }
      });
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
