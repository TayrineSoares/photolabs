import React from 'react';
import './App.scss';
import { useReducer, useState } from 'react';
import PhotoFavButton from './components/PhotoFavButton';
import HomeRoute from './components/HomeRoute';


// import mock data
import mockPhotoData from './mocks/photos';
import mockTopicsData from './mocks/topics'



const App = () => {
  
  // logic for global state of all likes 
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
  //console.log(likedPhotos);
  
  return (
    <div className="App">
      {/*send photos and topics mock data as a prop to the childs */ }
      <HomeRoute 
        photos={mockPhotoData} 
        topics={mockTopicsData}
        likedPhotos={likedPhotos}
        dispatch={dispatch} /> 
    </div>
  );
};

export default App;
