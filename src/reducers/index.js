

const initialState = {
    isLoading: false,
    error: '',
    amiibo: [
        {
            character: '',
            image: '',
            name: '',
            amiiboSeries: '',
            gameSeries: ''
        }
    ]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}