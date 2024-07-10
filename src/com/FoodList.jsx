import FoodItem from "./FoodItem";

export default function FooList({ foodData, setfoodid }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setfoodid={setfoodid} />
      ))}
    </div>
  );
}
