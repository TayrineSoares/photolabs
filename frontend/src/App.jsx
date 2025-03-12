// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.scss';
import { useReducer, useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// import mock data
import mockPhotoData from './mocks/photos';
import mockTopicsData from './mocks/topics'



const App = () => {

  // -------------------------------------------------------------------
  // LOGIC FOR GLOBAL STATE OF ALL LIKES 
  // useReducer is a state manager that controls your global state
  // const [state, dispatch] = useReducer(reducerFunction, initialState);
  // state → The current state (likedPhotos in our case).
  // dispatch(action) → A function to update the state.

  // In this case, the reducerFunction takes in (likedPhotos, photoId) as arguments and the initial state is an empty array. 
  // The Hook returns: 
      //  likedPhotos → the current state (an array of liked photo IDs).
      //  dispatch → a function that you can call to update likedPhotos by passing a photoId.
  

  const [likedPhotos, dispatch] = useReducer((likedPhotos, photoId) => {
    return (
    likedPhotos.includes(photoId)
    ? likedPhotos.filter((id) => id !== photoId) // Remove from the list if already liked - equivalent to unlinking the pic 
    : [...likedPhotos, photoId] // Add to the list if not liked
    )
  }, [])
  console.log('I AM INSIDE APP.JSX AND THIS IS MY LIKEDPHOTOS ARRAY', likedPhotos);

  // --------------------------------------------------------------------
  // LOGIC FOR MODAL STATE & SELECTED PHOTO
  // useState to control the state of the Modal. Starts with false (closed)
  // The toggleModal is a function that will be called with the onClick on the PhotoListItem component. 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null); 

  const toggleModal = (photo) => {

    setSelectedPhoto(photo); // Store selected photo
    setIsModalOpen (!isModalOpen); // Open modal if photo is passed, otherwise close
  };
  
  // --------------------------------------------------------------------
  
  return (
    <div className="App">
      {/*send photos and topics mock data as a prop to the childs */ }
      {/*send likedPhotos and dispatch all the way down to PhotoFavButton */ }
      {/*send toggleModal all the way down to PhotoListItem */ }
      
      <HomeRoute 
        photos={mockPhotoData} 
        topics={mockTopicsData}
        likedPhotos={likedPhotos}
        dispatch={dispatch} 
        toggleModal={toggleModal}
      /> 

      {/* Conditionally render the modal and pass data to children  */}
      {isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} selectedPhoto={selectedPhoto} likedPhotos={likedPhotos} dispatch={dispatch} />}
      
    </div>
  );
};

export default App;
