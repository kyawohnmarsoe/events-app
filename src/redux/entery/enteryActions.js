import {
    ADD_TO_ENTERIES,
    REMOVE_FROM_ENTERIES,
} from './enteryTypes'

export const addToEnteries=(newTotalEnteries)=>{
    return{
        type:ADD_TO_ENTERIES,
        payload:newTotalEnteries,
    }
}

export const removeFromEnteries=(newTotalEnteries)=>{
    return{
        type:REMOVE_FROM_ENTERIES,
        payload:newTotalEnteries,
    }
}