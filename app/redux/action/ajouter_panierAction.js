import {ADD_TO_CART} from '../types/ajouter_panierType'

export const addToCart = (data) => {
    console.warn('data: ', data)
    return {
        type: ADD_TO_CART,
        data: data,
    }
}
