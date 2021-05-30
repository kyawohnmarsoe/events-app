import {
    ADD_TO_ENTERIES,
    REMOVE_FROM_ENTERIES,
} from './enteryTypes'

const initialState={
    totalEnteries:[],
}

const enteryReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_ENTERIES:
            return {
                ...state,
                totalEnteries:action.payload,
            }
        case REMOVE_FROM_ENTERIES:
            return {
                ...state,
                totalEnteries:action.payload,
            }
        default:
            return state
    }
}

export default enteryReducer