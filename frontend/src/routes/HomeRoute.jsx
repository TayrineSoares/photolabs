import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

// receive data from parent App
const HomeRoute = (props) => {

  return (
    <div className='home-route'>

      {/*send topics data as a prop to the child */ }
      <TopNavigationBar topics={props.topics} likedPhotos={props.likedPhotos}/>
      <div className='photo-list' >
        {/*send data as a prop to the childs */ }
        <PhotoList photos={props.photos} likedPhotos={props.likedPhotos} dispatch={props.dispatch} toggleModal={props.toggleModal} />
      </div>
    </div>
  )
};

export default HomeRoute;
