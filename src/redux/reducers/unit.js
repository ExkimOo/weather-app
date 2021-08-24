const initialState = {
    unit: "C",
}

const unit = (state = initialState, action) => {
    switch(action.type) {
        case "SET_UNIT": 
        return {
            ...state,
            unit: action.payload,
        };
        default: 
            return state
    }
}

export default unit;