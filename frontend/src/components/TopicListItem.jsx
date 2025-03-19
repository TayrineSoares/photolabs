import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  
  const { id, title, setSelectedTopic } = props; 

  const handleTopicClick = () => {
    setSelectedTopic(id);
  }
  
  return (
    <div className="topic-list__item" onClick={handleTopicClick}>
      <ul> {title} </ul>
    </div>
  );
};

export default TopicListItem;