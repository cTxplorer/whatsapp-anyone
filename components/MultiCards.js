const Card = ({ title, content }) => (
  <div className="card">
    <h4 className="card-title">{title}</h4>
    <p className="card-content">{content}</p>
  </div>
);

const MultiCards = ({ content }) => {
  return (
    <div className="cards-container">
      {
        content.map(({ title, content }) => (
          <Card title={title} content={content} />
        ))
      }
    </div>
  );
}

export default MultiCards;