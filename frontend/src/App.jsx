import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';


const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

// Creates an array of 3 items so we can map over and display 3 pictures 
// Leaving the array empty can cause issues , so .fill(null) will populate the array with [null, null, null 
const photos = new Array(3).fill(null); 

const App = () => {
  
  return (
    <div className="App">
      <h1>This is my App page </h1>

      {/* Render 3 PhotoListItems using .map */}

      <div className='photo-list' >
        
      {/* The first argument of the callback function passed to .map() represents the current value of the item in the array, but since we are filling the array with null, we don't need that value, so it's replaced with an underscore (_), which is a common placeholder when you don't need the value.*/} 
        { photos.map((_, index) => {
          return (
          <PhotoListItem key={index} data={sampleDataForPhotoListItem}/>
          )

        })}

      </div>
      
    </div>
  );
};

export default App;
