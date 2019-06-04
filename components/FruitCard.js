const FruitCard = ({ name, emoji }) => {
  return (
    <div className="card green">
      <h2>{name}</h2>
      <p>{emoji}</p>
    </div>
  );
};
