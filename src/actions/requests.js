import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config";
import { collection, addDoc, updateDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { types } from "../types/types";
import { fileUpload } from '../helpers/fileUpload';
// export const startNewRequest = (newRequest) => {
//     return async (dispatch, getState) => {

//         // const { uid } = getState().auth;

//         // const newNote = {
//         //     title: '',
//         //     body: '',
//         //     date: new Date().getTime()
//         // }

//         const doc = await addDoc(collection(db, `mAznoXO4HSVNtTTO0UrrLblODKU2`, 'services/requests'), newRequest);

//         dispatch(addNewRequest(doc.id, newRequest));
//     }
// }
// export const addNewRequest = (id, request) => ({
//     type: types.requestsAddNew,
//     payload: {
//         id,
//         ...request
//     }
// })
export const addNewRequest = (request) => ({
    type: types.requestsAddNew,
    payload: {
        ...request
    }
})
export const startUploading = (file, name) => {
    return async (dispatch) => {
        // Swal.fire({
        //     title: 'Uploading...',
        //     text: 'Please wait...',
        //     allowOutsideClick: false,
        //     showConfirmButton: false,
        //     willOpen: () => {
        //         Swal.showLoading();
        //     }
        // });
        const fileUrl = await fileUpload(file);
        dispatch(loadUrl(fileUrl, name));
        Swal.close();
    }
}
export const loadUrl = (fileUrl, name) => ({
    type: types.requestsLoadUrl,
    payload: {
        [name]: fileUrl
    }
})