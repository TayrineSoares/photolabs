import React from 'react';
import './App.scss';
import { useReducer, useState } from 'react';
import PhotoFavButton from './components/PhotoFavButton';
import HomeRoute from './components/HomeRoute';


// import mock data
import mockPhotoData from './mocks/photos';
import mockTopicsData from './mocks/topics'



const App = () => {
  
  // logic for state of all likes 
  const [likedPhotos, dispatch] = useReducer((likedPhotos, photoId) => {
    return (
    likedPhotos.includes(photoId)
    ? likedPhotos.filter((id) => id !== photoId)
    : [...likedPhotos, photoId]
    )
  }, [])
  
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
