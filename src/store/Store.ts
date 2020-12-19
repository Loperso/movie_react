import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './RootReducer';

const Store = createStore(RootReducer, applyMiddleware(thunk));

export type RootReducerType = ReturnType<typeof RootReducer>;

export default Store;