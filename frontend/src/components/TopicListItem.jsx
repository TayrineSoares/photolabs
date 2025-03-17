import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  {/* data come as a prop from the parent TopicList */ }
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


