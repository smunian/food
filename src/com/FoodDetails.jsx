import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import Itemlist from "./Itemlist";
export default function FoodDatails({ foodid }) {
  const [food, setfood] = useState({});
  const [isLoading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_KEY = "ab9a944d0f16430888eda591048fc3f7";

  useEffect(() => {
    async function foodinfo() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setfood(data);
      setLoading(false);
    }
    foodinfo();
  }, [foodid]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeimg} src={food.image}></img>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰{food.readyInMinutes}Minutes</strong>
          </span>
          <span>
            <strong> 👨‍👩‍👦 Serves{food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>＄{food.pricePerServing / 100} Per serving </span>
        </div>
        <h2>Ingredients</h2>
        <Itemlist food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {isLoading ? (
              <p>Login...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
