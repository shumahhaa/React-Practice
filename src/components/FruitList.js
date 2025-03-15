const fruits = ["🍎apple", "🍌banana", "🍊orange"];

const FruitList = () => {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
};

export default FruitList;