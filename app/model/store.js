// import {AsyncStorage} from "react-native";
// import {persistReducer, persistStore} from "redux-persist";
// import {createStore, applyMiddleware, compose} from "redux";
// import thunk from 'redux-thunk';
// import {createLogger} from 'redux-logger';
// import rootReducer from "./reducers";
// import ApiMiddleware from "../middlewares/ApiMiddleware";


// /* const persistConfig = {
//      key: 'root',
//      storage: AsyncStorage,
//      whitelist: ['authKeyReducer'],
//      blacklist: []
// }; */
// const middlewares = [];
// middlewares.push(thunk);
// middlewares.push(ApiMiddleware);

// const loggerMiddleware = createLogger({
//     predicate: () => process.env.NODE_ENV === 'development'
// })
// middlewares.push(loggerMiddleware);

// const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
// let persistor = persistStore(store);

// export {store, persistor};
// import { combineReducers, createStore, applyMiddleware } from 'redux'
// // import restaurantReducer from './reducer/restaurantReducer';
// // import commentaireReducer from './reducer/commentaireReducer';
// import thunk from 'redux-thunk'
// import rootReducer from './reducer'


// // const rootReducer = combineReducers({
// //    restaurant: restaurantReducer,
// //    commentaire: commentaireReducer
   
// // })

// const store = createStore(rootReducer, applyMiddleware(thunk))

// export default store

// store.js
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import loginReducer from './reducer/loginReducer';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    loginReducer : loginReducer, 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
