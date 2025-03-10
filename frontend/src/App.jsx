import React from 'react';
import './App.scss';

import PhotoList from './components/PhotoList';
import TopicListItem from './components/TopicListItem';
import TopicList from './components/TopicList';




// Creates an array of 3 items so we can map over and display 3 pictures 
// Leaving the array empty can cause issues , so .fill(null) will populate the array with [null, null, null ] 

// const photos = new Array(3).fill(null); 

const App = () => {
  
  return (
    <div className="App">
      <h1>This is my App page </h1>
      <TopicListItem />
      <TopicList />

      <div className='photo-list' >
        <PhotoList /> 
        {/* Render 3 PhotoListItems using .map */}
        {/* The first argument of the callback function passed to .map() represents the current value of the item in the array, but since we are filling the array with null, we don't need that value, so it's replaced with an underscore (_), which is a common placeholder when you don't need the value.*/} 
        {/* { photos.map((_, index) => <PhotoListItem key={index} />) } */}    

      </div>   
    </div>
  );
};

export default App;
