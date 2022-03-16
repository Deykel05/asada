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
    datos: []
}
export const requestsReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.requestsAddNew:
            return {
                ...state,
                datos: action.payload
            }
        case types.requestsLoadUrl:
            return {
                ...state,
                datos: [action.payload, ...state.datos]
            }
        default:
            return state;
    }
}