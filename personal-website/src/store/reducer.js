
const initialState = {
    posts: [],
    NumOfPages: undefined
}
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET':
            return {
                ...initialState,
                posts: action.payload
            }


    }

    return state
}

export default reducer