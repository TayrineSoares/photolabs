import { useReducer, useEffect } from "react";

// reducer function 
const reducer = (state, action) => {

  if (action.type === "FAV_PHOTO_ADDED") {
    return {
      ...state, 
      likedPhotos: [...state.likedPhotos, action.payload.id],
    }
  }

  if (action.type === "FAV_PHOTO_REMOVED") {
    return {
      ...state, 
      likedPhotos: state.likedPhotos.filter((id) => id !== action.payload.id) // Remove from favorites
    };
  }

  if (action.type === "TOGGLE_MODAL") {
    return {
      ...state,
      selectedPhoto: action.payload.photo, 
      isModalOpen: !state.isModalOpen // Toggle modal state
    };
  }

  if (action.type === "SET_APP_DATA") {
    return {
      ...state,
      likedPhotos: action.payload.likedPhotos || [],
    };
  }

  // Store the data in the photoData variable
  if (action.type === "SET_PHOTO_DATA") {
    return {
      ...state,
      photoData: action.payload
    }
  }
}

// Setting Initial State
const initialState = {
  photoData: [],
  topicData: [],
  likedPhotos: [], 
  isModalOpen: false,
  selectedPhoto: null
}

// Custom hook
const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState); 

  //useEffect to fetch data (in this case, the photos)
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => {
        return res.json(); // Parse the JSON response
      })
      // dispatch the photos data as a payload for your reducer.
      .then(data => {
        dispatch( {type: "SET_PHOTO_DATA", payload: data})
      })
      .catch(error => {
        console.error("Error Fetching data", error)
      })
        
  },[])



  // Function to toggle (open and close) modal
  const toggleModal = (photo = null) => {
    dispatch( { type: "TOGGLE_MODAL", payload: {photo} } )
  };

  // Function to update list of liked photos
  const favouritePhotos = (id) => {
    state.likedPhotos.includes(id) ? 
      dispatch( { type: "FAV_PHOTO_REMOVED", payload: {id} } ) 
      : dispatch( { type: "FAV_PHOTO_ADDED", payload: {id} } )
  }; 

  //Action to update state from backend response
  const setAppData = (data) => {
    dispatch( {type: "SET_APP_DATA", payload: {likedPhotos: data.likedPhotos} } )
  }; 

  // Our useApplicationData Hook will return an object
  return {
    state, 
    toggleModal, 
    favouritePhotos,
    setAppData
  };
};



export default useApplicationData; 
      
    
      