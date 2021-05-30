import {
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAIL,
} from './eventTypes';

const initialState={
    loading:false,
    eventsInfo:[],
    error:'',
    totalEnteries:[],
}

const eventReducer =(state=initialState,action)=>{
    switch(action.type){
        case FETCH_EVENTS_REQUEST:
            return {
                ...state, 
                loading:true,
            }
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                loading:false,
                eventsInfo:action.payload,
                error:'',
            }
        case FETCH_EVENTS_FAIL:
            return {
                ...state, 
                loading:false,
                eventsInfo:[],
                error:action.payload,
            }
        default:
            return state
    }
}

export default eventReducer