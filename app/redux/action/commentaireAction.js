import axios from "axios"

const { LOADER_COMMENTS, LOADER_COMMENTS_SUCCES, LOADER_COMMENTS_ERROR } = require("../types/commentaireType")



const loaderComments = () => {
    return {
        type: LOADER_COMMENTS
    }
}

const loaderCommentsSucces = commentaires => {
    return {
        type: LOADER_COMMENTS_SUCCES,
        payload: commentaires
    }
}

const loaderCommentsError = error => {
    return {
        type: LOADER_COMMENTS_ERROR,
        payload: error
    }
}

export const apiCall = () => {
    return dispatch => {
        dispatch(loaderComments())
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res => {
            dispatch(loaderCommentsSucces(res.data))
        })
        .catch(err => {
             dispatch(loaderCommentsError(err.message))
        })
    }
}