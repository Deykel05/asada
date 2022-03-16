import Swal from 'sweetalert2';
import { types } from "../types/types";
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        // dispatch(uiStartLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                // dispatch(uiFinishLoading());
                dispatch(login(user.uid, 'Deykel'));
            })
            .catch((error) => {
                // dispatch(uiFinishLoading());
                Swal.fire('Error', error.message, 'error');
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout());
     }
};

export const logout = () => ({
    type: types.logout
});