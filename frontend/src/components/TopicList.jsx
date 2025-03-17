import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

// Receive topics data from the parent TopNavigationBar
const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">

      {/* map over topics array and send data as a prop to the child TopicListItem */ }
      {props.topics.map((item) => {
        return (
          <TopicListItem key={item.id} title={item.title} id={item.id} setSelectedTopic={props.setSelectedTopic}  />
        )
      })}
    
    </div>
  );
};

export default TopicList;
