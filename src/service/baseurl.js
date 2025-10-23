export const BASE_URL = "http://localhost:3006"

export const CLOUD_NAME = "dgll2kfzv"; 

export const getImageUrl = (publicId) => {
  if (!publicId) return ""; 
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${publicId}`;
};