import { types } from "../types/types";

export const imagesUrlReducer = (state = {}, action) => {
    switch (action.type) {
        case types.imagesLoadUrl:
            return {
                ...state,
                datos: action.payload
            }

        default:
            return state;
    }
}