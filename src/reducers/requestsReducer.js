import { types } from "../types/types";

// const initialState = {
//     titularInmueble: {},
//     localizacionPropiedad: {},
//     servicioRequerido: {},
//     datosPropiedad: {},
//     mediosNotificacion: {},
//     solicitudConstancia: {}
// }
export const requestsReducer = (state = {}, action) => {
    switch (action.type) {
        case types.requestsAddNew:
            return {
                ...state,
                datos: action.payload
            }
            break;

        default:
            return state;
    }
}