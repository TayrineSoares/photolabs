import { useReducer, useState } from "react";


// creates a custom hook
const useApplicationData = () => {


  // Reducer function for managing favorite photos
  const [likedPhotos, dispatch] = useReducer((likedPhotos, photoId) => {
    return (
    likedPhotos.includes(photoId)
    ? likedPhotos.filter((id) => id !== photoId) // Remove from the list if already liked - equivalent to unlinking the pic 
    : [...likedPhotos, photoId] // Add to the list if not liked
    )
  }, [])
  console.log('THIS IS MY LIKEDPHOTOS ARRAY', likedPhotos);


  // Modal and selected photo state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null); 

  // Action to update favorite photos 
  const updateToFavPhotoIds = (photoId) => dispatch(photoId);

  // Toggle modal function (open/close)
  const toggleModal = (photo = null) => {
    
    setSelectedPhoto(photo); // Store selected photo
    setIsModalOpen (!isModalOpen); // Open modal if photo is passed, otherwise close
  };


  // Our useApplicationData Hook will return an object
  return {
    state: { likedPhotos, isModalOpen, selectedPhoto }, 
    updateToFavPhotoIds,
    toggleModal,
  }

};

export default useApplicationData; 
      
    
      