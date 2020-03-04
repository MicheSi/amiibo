import { GET_AMIIBO_START, GET_AMIIBO_SUCCESS, GET_AMIIBO_FAIL } from '../actions';

const initialState = {
    isLoading: false,
    error: '',
    amiibo: [],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_AMIIBO_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_AMIIBO_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                amiibo: action.payload,
            }
        case GET_AMIIBO_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}