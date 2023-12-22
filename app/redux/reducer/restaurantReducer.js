// import { combineReducers } from 'redux';
// import restaurants from '../../constants/dummyData'
// import { SELECT_RESTAURANT } from '../types/RestaurantType';


// const initialState = {
//   listRestaurant: restaurants,
//   selectedRestaurant: [],
//   selectedFavorite: restaurants
//   };
  
  // const restaurantReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //      case 'SET_RESTAURANT':
  //       return action.payload

  //     case SELECT_RESTAURANT:
  //         const indexResult = state.selectedRestaurant.findIndex(restaurant => restaurant.id === action.payload )
  //       if(indexResult >= 0) {
  //         const newSelectedFavorite = [...state.selectedFavorite];
  //         newSelectedFavorite.splice(indexResult, 1);
  //       return {...state, selectedFavorite: newSelectedFavorite}
  //       }else {
  //      const selectedRestaurant =  state.selectedRestaurant.find(restaurant => restaurant.id === action.payload);
  //       return {...state, selectedFavorite: state.selectedFavorite.concat(selectedRestaurant)}
  //       }
       
  //     default:
  //       return state;
  //   }
  // };
//   const selectedRestaurantReducer = (state = null, action) => {
//     switch (action.type) {
//       case 'SELECT_RESTAURANT':
//         return action.payload;
//       default:
//         return state;
//     }
//   };
//   const selectedDishReducer = (state = null, action) => {
//   switch (action.type) {
//     case 'SELECT_DISH':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   restaurants: restaurantReducer,
//   selectedRestaurant: selectedRestaurantReducer,
//   selectedDish: selectedDishReducer,
// });
  
  //export default restaurantReducer;
 import {ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM, SET_RESTAURANTS, SELECT_RESTAURANT, SELECT_DISH, GET_RESTAURANT_DATA } from "../types/RestaurantType"; 
import { restaurantData } from "../../constants/data";
import {data} from '../../constants'

const initialState = {
  restaurantData: data,
  selectedRestaurant: null,
  favorites: [],

  };

  export default restaurantsReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'LOAD_RESTAURANT_DATA':
        return {
          ...state, 
          restaurantData: action.payload
        };
        case SELECT_RESTAURANT:
      return {
         ...state, 
         selectedRestaurant: action.payload 
        };
        case ADD_FAVORITE_ITEM: 
          return {
            ...state,
            favorites: [
              ...state.favorites,
              action.payload
            ]
          };
          case REMOVE_FAVORITE_ITEM: 
            return {
              ...state,
              favorites: state.favorites.filter(
                restaurant => restaurant.id !== action.payload.id,
              ),
            };
      default: 
        return state;
    }
  } 








