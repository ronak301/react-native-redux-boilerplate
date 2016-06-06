const increaseActionType = 'INCREAMENT'
const decreaseActionType = 'DECREAMENT'

function increaseAction() {
  return {
    type:increaseActionType
  }
}

function decreaseAction() {
  return {
    type:decreaseActionType
  }
}

function fetchData(forUrl) {
  return function (dispatch , getState) {
    try {
      return fetch(forUrl);
    } catch(error) {
      throw error;
    }
  }
}

module.exports = { increaseAction , decreaseAction , fetchData}
