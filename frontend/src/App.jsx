import React from 'react';
import './App.scss';
import HomeRoute from './components/HomeRoute';
import mockPhotoData from './mocks/photos';
import mockTopicsData from './mocks/topics'



const App = () => {
  
  return (
    <div className="App">
      {/*send photos and topics data as a prop to the childs */ }
      <HomeRoute photos={mockPhotoData} topics={mockTopicsData}/> 
    </div>
  );
};

export default App;
