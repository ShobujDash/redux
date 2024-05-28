import { createStore ,applyMiddleware} from "redux";
import axios from 'axios'
import logger from 'redux-logger'

// action name constants
const inc = 'increment'
const dec = 'decrement'
const incByAmount = "incrementByAmount";
const init = 'init'


// store
const store = createStore(reducer,applyMiddleware(logger.default));

const histry = [];



// reducer
function reducer(state = { amount: 1 }, action) {


  if (action.type === inc) {
    // immutability
    return { amount: state.amount + 1 };
  }
  if (action.type === dec) {
    // immutability
    return { amount: state.amount -1 };
  }
  if (action.type === incByAmount) {
    // immutability
    return { amount: state.amount + action.payload };
  }
  return state;
}

// global state
// store.subscribe(() => {
//   histry.push(store.getState());
//   // console.log(store.getState());
//   console.log(histry);
// });


// Action creators
function initUser() {
  return {type:init}
}


function increment() {
  return {type:inc}
}
function decrement() {
  return {type:dec}
}
function incrementByAmount(value) {
  return {type:incByAmount,payload:value}
}

setInterval(() => {
  store.dispatch(incrementByAmount(99));
}, 2000);















