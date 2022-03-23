import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config";
import { collection, addDoc, updateDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadRequests } from '../helpers/loadRequests';

export const startNewRequest = (newRequest) => {

    return async () => {
        const doc = await addDoc(collection(db, `mAznoXO4HSVNtTTO0UrrLblODKU2`, 'services/requests'), newRequest);
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
export const startSaveRequest = (request) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const requestToFirestore = { ...request }
        delete requestToFirestore.id
        const requesteRef = doc(db, `${uid}/services/requests/${request.id}`)
        await updateDoc(requesteRef, requestToFirestore);

        dispatch(refreshRequest(request.id, requestToFirestore));
        Swal.fire('Guardado','La solicitud se actualizó!', 'success');
    }
}

export const refreshRequest = (id, request) => ({
    type: types.requestsUpdated,
    payload: {
        id,
        request: {
            id,
            ...request
        }
    }
})
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
export const activeRequestOff = () => ({
    type: types.requestsActiveClean,
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
