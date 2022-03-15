import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config";
import { collection, addDoc, updateDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { types } from "../types/types";
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