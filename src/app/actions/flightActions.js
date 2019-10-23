import { PROCESS_REFRESH, RESET_PAYLOAD } from './types';
import axios from 'axios';

export const processRefresh = request => dispatch => {

  axios.post(process.env.REACT_APP_SPACEX_BACKEND_URL + 'refresh', request)
    .then(response => {

        let res = []
        if (response.data.length)
            res = response.data

        dispatch({
            type: PROCESS_REFRESH,
            payload: res
        })
    })
}

export const resetPayload = () => dispatch => {
    dispatch({
        type: RESET_PAYLOAD
    })
}