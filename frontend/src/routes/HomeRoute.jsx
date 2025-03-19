import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';


const HomeRoute = (props) => {
  const {setSelectedTopic, topics, likedPhotos } = props;

  return (
    <div className='home-route'>

      <TopNavigationBar 
        setSelectedTopic={setSelectedTopic} 
        topics={topics} 
        likedPhotos={likedPhotos} 
      />
        
      <div className='photo-list' >
        <PhotoList 
        photos={props.photos} 
        likedPhotos={props.likedPhotos} 
        dispatch={props.dispatch} 
        toggleModal={props.toggleModal} 
        />
      </div>
    </div>
  )
};

export default HomeRoute;