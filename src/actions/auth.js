import { types } from "../types/types";
import { firebase } from '../firebase/firebase-config';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        // dispatch(uiStartLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                    // dispatch(uiFinishLoading());
                    dispatch(login(user.uid, 'Deykel'));
            })
            .catch(e => {
                // dispatch(uiFinishLoading());
                // Swal.fire('Error',e.message,'error');
            })
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
      await firebase.auth().signOut();
      dispatch(logout());
     }
};

export const logout = () => ({
    type: types.logout
});