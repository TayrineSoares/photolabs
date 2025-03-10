import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";


const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">

      {/* map over topics array and send data as a prop to the child TopicListItem */ }
      {topics.map((item, index) => {
        return (
          <TopicListItem key={item.id} title={item.title}  />
        )
      })}
    
    </div>
  );
};

export default TopicList;
