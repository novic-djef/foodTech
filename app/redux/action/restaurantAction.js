
import { SELECT_RESTAURANT, ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM, SET_RESTAURANTS, SELECT_DISH, GET_RESTAURANT_DATA } from '../types/RestaurantType'
import {data} from '../../constants'


export const setRestaurants = () => {
  return {
    type: 'LOAD_RESTAURANT_DATA',
    payload: data
  }
}
export const selectRestaurant = (restaurant) => {
  return {
    type: SELECT_RESTAURANT,
    payload: restaurant,
  };
};

export const addFavorite = restaurant => dispatch => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: restaurant
  })
}
export const removeFavorite = restaurant => dispatch => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: restaurant
  })
}










//  cette partie indique comment on appelle une API directement
// import axios from "axios";

// export const GET_MOVIES = 'GET_MOVIES';
// export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
// export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

// const API_URL = 'https://api.themoviedb.org/3/movie/popular';
// const API_KEY = 'd412348ab20276723ef07e448f614ba3';
// const PARAMS = 'page=2';
// const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

// console.log('url: ', `${API_URL}?api_key=${API_KEY}&${PARAMS}`)

// export const getMovies = () => {
//     try {
//         return async dispatch => {
//             const res = await axios.get(`${BASE_URL}`);
//             if (res.data) {
//                 dispatch({
//                     type: GET_MOVIES,
//                     payload: res.data.results
//                 });
//             } else {
//                 console.warn('Impossible de recuperer')
//             }
//         }
//     } catch (error) {
//         console.log('error: ', error);
//     }
// }

// export const addFavorite = movie => dispatch => {
//     dispatch({
//       type: ADD_FAVORITE_ITEM,
//       payload: movie,
//     });
//   };
//   export const removeFavorite = movie => dispatch => {
//     dispatch({
//       type: REMOVE_FAVORITE_ITEM,
//       payload: movie,
//     });
//   };
