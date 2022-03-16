export const fileUpload = async (file) => {
    // const cloudUrl = 'https://389581389148867:L1pYHB0hS1aK4AhfjVcPhg3uUeI@api.cloudinary.com/v1_1/dxd8omv7x/upload';
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dxd8omv7x/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (error) {
        console.log(error);
    }
}