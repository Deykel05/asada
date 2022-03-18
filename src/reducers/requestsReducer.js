import { types } from "../types/types";

// const initialState = {
//     titularInmueble: {},
//     localizacionPropiedad: {},
//     servicioRequerido: {},
//     datosPropiedad: {},
//     mediosNotificacion: {},
//     solicitudConstancia: {}
// }
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
        case types.requestsLoad:
            return {
                ...state,
                requests: [...action.payload]
            }

        default:
            return state;
    }
}