import styles from "./FoodItem.module.css";
export default function FoodItem({ food, setfoodid }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemimg} src={food.image} alt="" />
      <div className={styles.title}>
        <p className={styles.name}>{food.title}</p>
      </div>
      <div className={styles.itembtn}>
        <button
          onClick={() => {
            setfoodid(food.id);
          }}
          className={styles.btn}
        >
          View Reple
        </button>
      </div>
    </div>
  );
}
