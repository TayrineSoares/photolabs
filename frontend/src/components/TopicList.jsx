import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// Receive topics data from the parent TopNavigationBar
const TopicList = (props) => {
  const { topics, setSelectedTopic } = props; 
  return (
    <div className="top-nav-bar__topic-list">

      {/* map over topics array and send data as a prop to the child TopicListItem */ }
      {topics.map((item) => {
        return (
          <TopicListItem key={item.id} title={item.title} id={item.id} setSelectedTopic={setSelectedTopic}  />
        )
      })}
    
    </div>
  );
};

export default TopicList;
