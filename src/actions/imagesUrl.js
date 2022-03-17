import Swal from 'sweetalert2';
import { types } from "../types/types";
import { fileUpload } from '../helpers/fileUpload';

export const startUploading = (file, name) => {
    return async (dispatch) => {
        Swal.fire({
            title: 'Cargando...',
            text: 'Espere por favor...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });
        const fileUrl = await fileUpload(file);
        dispatch(loadUrl(fileUrl, name));
        Swal.close();
    }
}
export const loadUrl = (fileUrl, name) => ({
    type: types.imagesLoadUrl,
    payload: {
        [name]: fileUrl
    }
})