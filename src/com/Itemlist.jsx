import Item from "./Item";
export default function Itemlist({ isLoading, food }) {
  return (
    <div>
      {isLoading ? (
        <p>Login...</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
