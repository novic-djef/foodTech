 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import restaurantReducer from './reducer/restaurantReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  restaurantReducer,

})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;






