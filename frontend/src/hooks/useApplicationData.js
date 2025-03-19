import { useReducer, useEffect } from "react"

// REDUCER FUNTION
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

  if (action.type === "SET_TOPIC_DATA") {
    return {
      ...state, 
      topicData: action.payload
    }
  }

  // Action for setting the photos based on a specific topic
  if (action.type === "SET_TOPIC_PHOTOS") {
    return {
      ...state, 
      photoData: action.payload, // Set the new photos for the selected topic
    }
  }

  // Action for setting the selected topic
  if (action.type === "SET_SELECTED_TOPIC") {
    return {
      ...state,
      selectedTopic: action.payload, // Store the selected topic in state
    };
  }
}


// SETTING INITIAL STATE
const initialState = {
  photoData: [],
  topicData: [],
  likedPhotos: [], 
  isModalOpen: false,
  selectedPhoto: null,
  selectedTopic: null
}

// CUSTOM HOOK
const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState); 

  //useEffect to fetch ALL photos
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')

      .then(res => res.json() )
      
      // dispatch the photos data as a payload for reducer
      .then(data => dispatch( {type: "SET_PHOTO_DATA", payload: data}))
      .catch(error => console.error("Error Fetching photos data", error))      
  },[])

  //useEffect to fetch ALL topics
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')

    .then (res => res.json())

    // dispatch the photos data as a payload for reducer
    .then (data => dispatch( {type: "SET_TOPIC_DATA", payload: data}))
    .catch(error => console.log("Error Fetching topics data", error))

  }, [])

   //useEffect to fetch photos based on a selected topic
   useEffect(() => {
    if (state.selectedTopic) {
      fetch(`http://localhost:8001/api/topics/${state.selectedTopic}/photos`)

      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch topic photos');
        }
        return res.json();
      })
      // Dispatch the topic-based photos
      .then(data => dispatch( {type: "SET_TOPIC_PHOTOS", payload: data })) 
      .catch(error => console.log("Erro Fetching photos for topic", error))
    }
  }, [state.selectedTopic]) // Runs when selectedTopic changes


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

  // Action to set selected topic
  const setSelectedTopic = (topicId) => {
    dispatch({ type: "SET_SELECTED_TOPIC", payload: topicId });
  };

  // Returns an object
  return {
    state, 
    toggleModal, 
    favouritePhotos,
    setAppData, 
    setSelectedTopic
  };
};

export default useApplicationData; 