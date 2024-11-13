import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from './config';

const CloudinaryService = {
  uploadImage: async (file) => {
    try {
      console.log('CLOUDINARY_UPLOAD_PRESET:', CLOUDINARY_UPLOAD_PRESET);
      console.log('CLOUDINARY_UPLOAD_URL:', CLOUDINARY_UPLOAD_URL);
  
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

      const response = await fetch(CLOUDINARY_UPLOAD_URL, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      return data.secure_url; 
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  },
};

export default CloudinaryService;