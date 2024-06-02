import axios from "axios";
import { applyMiddleware, createStore,combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// action name constants   
const inc = "increment";
const dec = "decrement";
const incByAmount = "incrementByAmount";
const init = "init";

// store
const store = createStore(combineReducers({account:accountReducer,bonus:bonusReducer}), applyMiddleware(logger.default,thunk.default));

const histry = [];

// reducer
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case inc:
      return { amount: state.points + 1 };
    default:
      return state;
  }
}

// global state
// store.subscribe(() => {
//   histry.push(store.getState());
//   // console.log(store.getState());
//   console.log(histry);
// });

// Async API Call
function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount));
  };
}


// Action creators
function initUser(value) {
    return {type:init, payload:value}
}

function increment() {
  return { type: inc };
}
function decrement() {
  return { type: dec };
}
function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}

setInterval(() => {
  store.dispatch(initUser(1));
}, 2000);

















































