import { INCREASE, DECREASE, RESET } from "../actions/actionTypes";

const initialState = {count: 0}

function counterReducer(state=initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {...state, count: state.count+action.value}
        case DECREASE:
            return {...state, count: state.count-1}
        case RESET:
            return initialState
    }
}

export default counterReducer;