import { slides } from '../../constants/dummyData'
import { SHOW_SLIDE } from '../types/slideType';

initialState = {
    listSlide: slides,
    dataSlide: slides,
}


const slideReducer = (state = initialState, action ) => {
switch (action.type) {
    case SHOW_SLIDE:
       return  {...state};
       
    default:
        return state
        
}

}

export default slideReducer;