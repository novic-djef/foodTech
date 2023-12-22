import { DETAIL_RESTAURANT_LIST_PENDING, DETAIL_RESTAURANT_LIST_SUCCESS, DETAIL_RESTAURANT_LIST_ERROR, DETAIL_RESTAURANT_LIST_RESET } from "../types/RestaurantType";

const initialState = {
    loading: false,
    result: null,
    error: null
};

const RestaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETAIL_RESTAURANT_LIST_PENDING:
          return {
            ...state, 
            loading: true,
          }  
        case DETAIL_RESTAURANT_LIST_SUCCESS: 
            return {
                ...state,
                loading: false,
                result: action.result.data,
                error: null
            }
        case DETAIL_RESTAURANT_LIST_ERROR: 
            return {
                ...state,
                loading: false,
                result: null,
                error: action.result
            }
        case DETAIL_RESTAURANT_LIST_RESET: 
    
            default: 
                return state;
        
    }

}
export default RestaurantReducer