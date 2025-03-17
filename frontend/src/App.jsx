// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.scss';
import useApplicationData from './hooks/useApplicationData';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {

  // Use custom hook to manage application state
  const {
    state,
    favouritePhotos, 
    toggleModal,
    setSelectedTopic
  } = useApplicationData();

  // --------------------------------------------------------------------
  
  return (
    <div className="App">
      {/*send photos and topics mock data as a prop to the childs */ }
      {/*send likedPhotos and dispatch all the way down to PhotoFavButton */ }
      {/*send toggleModal all the way down to PhotoListItem */ }
      
      <HomeRoute 
        photos={state.photoData} 
        topics={state.topicData}
        likedPhotos={state.likedPhotos}
        dispatch={favouritePhotos} 
        toggleModal={toggleModal}
        selectedTopic={state.selectedTopic}
        setSelectedTopic={setSelectedTopic}
      /> 

      {/* Conditionally render the modal and pass data to children  */}
      {state.isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} selectedPhoto={state.selectedPhoto} likedPhotos={state.likedPhotos} dispatch={favouritePhotos} />}

    </div>
  );
};

export default App;
