const { LOADER_COMMENTS, LOADER_COMMENTS_SUCCES, LOADER_COMMENTS_ERROR } = require("../types/commentaireType")

const initialStateCommentaire = {
    isLoading: false,
    comments: [],
    error: ''

}

const commentaireReducer = (state = initialStateCommentaire, action) => {
    switch (action.type) {
        case LOADER_COMMENTS:
            return {
                ...state,
                isLoading : true
            }
        case LOADER_COMMENTS_SUCCES:
            return {
                ...state,
                isLoading: false,
                commentaires: action.payload,
                error: ''
            }
        case LOADER_COMMENTS_ERROR:
            return {
                ...state,
                isLoading: false,
                commentaires: '',
                error: action.payload
            }    
        default:
            return state;
    }
}

export default commentaireReducer
