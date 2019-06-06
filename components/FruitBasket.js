const FruitBasket = ({ fruitBasket }) => {
  return (
    <div className="container">
      {fruitBasket.map(fruit => {
        return (
          <FruitCard key={fruit.id} name={fruit.type} emoji={fruit.emoji} />
        );
      })}
    </div>
  );
};
