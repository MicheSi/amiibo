import axios from 'axios';

export const GET_AMIIBO_START = 'GET_AMIIBO_START';
export const GET_AMIIBO_SUCCESS = 'GET_AMIIBO_SUCCESS';
export const GET_AMIIBO_FAIL = 'GET_AMIIBO_FAIL';

export const getAmiibos = (props) => dispatch => {
    console.log('this is props', props)
    const character = props.character;
    dispatch({type: GET_AMIIBO_START});
    axios
    .get(`https://www.amiiboapi.com/api/amiibo/?character=${character}`)
    .then(res => {
        console.log('api data', res.data.amiibo);
        dispatch({type: GET_AMIIBO_SUCCESS, payload: res.data.amiibo})
    })
    .catch(err =>
        dispatch({type: GET_AMIIBO_FAIL, payload: err}))
}
