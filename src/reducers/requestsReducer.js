import { types } from "../types/types";

const initalState = {
    requests: [],
    active: null
}
export const requestsReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.requestsAddNew:
            return {
                ...state,
                datos: action.payload
            }
        case types.requestsActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.requestsUpdated:
            return {
                ...state,
                requests: state.requests.map(
                    request => request.id === action.payload.id
                        ? action.payload.request
                        : request)
            }
        case types.requestsActiveClean:
            return {
                ...state,
                active: null
            }
        case types.requestsLoad:
            return {
                ...state,
                requests: [...action.payload]
            }
        case types.requestsDelete:
            return {
                ...state,
                active: null,
                requests: state.requests.filter(request => request.id !== action.payload)
            }
        case types.requestsLogoutClean:
            return {
                active: null,
                notes: []
            }

        default:
            return state;
    }
}