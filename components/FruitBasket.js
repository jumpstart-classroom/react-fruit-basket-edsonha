const FruitBasket = ({ fruitBasket }) => {
  return (
    <div className="container">
      {fruitBasket.map(fruit => {
        return (
          <FruitCard key={fruit.type} name={fruit.type} emoji={fruit.emoji} />
        );
      })}
    </div>
  );
};
