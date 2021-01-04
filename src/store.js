import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';


const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action);
};

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    });
  }

  return next(action);
};

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware, stringMiddleware, logMiddleware));


const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), timeout);
};

store.dispatch(delayedActionCreator(3000));
export default store;

// улучшенный код выше middleware  замена кода ниже enhancers
// const logEnchancer = (createStore) => (...args) => {
//   const store = createStore(...args);
//   const originalDispatch = store.dispatch;
//   store.dispatch = (action) => {
//     console.log(action.type);
//     return originalDispatch(action);
//   };
//
//   return store;
// };
//
// const stringEnchancer = (createStore) => (...args) => {
//   const store = createStore(...args);
//   const originalDispatch = store.dispatch;
//   store.dispatch = (action) => {
//
//     if (typeof action === 'string') {
//       return originalDispatch({
//         type: action
//       });
//     }
//
//     return originalDispatch(action);
//   };
//
//   return store;
// };
//
// const store = createStore(reducer, compose(
//     stringEnchancer,
//     logEnchancer));
