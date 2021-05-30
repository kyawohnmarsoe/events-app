import {
    FETCH_EVENTS_REQUEST,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAIL,
} from './eventTypes'
import axios from 'axios'

export const fetchEventsRequest=()=>{
    return{
        type:FETCH_EVENTS_REQUEST
    }
}
export const fetchEventsSuccess=(eventsInfo)=>{
       return{ 
           type:FETCH_EVENTS_SUCCESS,
            payload:eventsInfo,
    }
}
export const fetchEventsFail=(error)=>{
    return{
        type:FETCH_EVENTS_FAIL,
        payload:error,
    }
}


export const fetchEvents=()=> dispatch=>{
        dispatch(fetchEventsRequest())
        axios.get('https://run.mocky.io/v3/b20b77ab-7e67-4375-b4ea-233d09177da3')
        .then(response=>{
           return dispatch(fetchEventsSuccess(response.data))
        })
        .catch(error=>{
            console.log(error.message)
            return dispatch(fetchEventsFail(error.message))
        })
}

