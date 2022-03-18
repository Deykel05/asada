import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config";
import { collection, addDoc, updateDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadRequests } from '../helpers/loadRequests';

export const startNewRequest = (newRequest) => {

    return async (dispatch) => {
        const doc = await addDoc(collection(db, `mAznoXO4HSVNtTTO0UrrLblODKU2`, 'services/requests'), newRequest);
        //dispatch(addNewRequest(doc.id, newRequest));
        Swal.fire('Solicitud Enviada con exito', newRequest.tipoSolicitud, 'success')
            .then(function () {
                window.location = "/";
            });
    }
}
export const startLoadingRequests = (uid) => {
    return async (dispatch) => {
        const requests = await loadRequests(uid);
        dispatch(setRequests(requests));

    }
}
export const setRequests = (requests) => ({
    type: types.requestsLoad,
    payload: requests
});
export const activeRequest = (id, note) => ({
    type: types.requestsActive,
    payload: {
        id,
        ...note
    }
});
// export const addNewRequest = (id, request) => ({
//     type: types.requestsAddNew,
//     payload: {
//         id,
//         ...request
//     }
// })
export const addNewRequest = (id, request) => ({
    type: types.requestsAddNew,
    payload: {
        ...request
    }
})
