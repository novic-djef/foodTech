import { DETAIL_RESTAURANT_LIST_PENDING, DETAIL_RESTAURANT_LIST_SUCCESS, DETAIL_RESTAURANT_LIST_ERROR, DETAIL_RESTAURANT_LIST_RESET } from '../types/RestaurantType'


export function showDetailListPending() {
    return {
        type: DETAIL_RESTAURANT_LIST_PENDING
    }
}
export function showDetailListSucsess(res) {
    return {
        type: DETAIL_RESTAURANT_LIST_SUCCESS,
        result: res,
    }
}
export function showDetailListError(error) {
    return {
        type: DETAIL_RESTAURANT_LIST_ERROR,
        result: error
    }
}
export function showDetailListReset() {
    return {
        type: DETAIL_RESTAURANT_LIST_RESET
    }
}


