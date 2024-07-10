import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "ab9a944d0f16430888eda591048fc3f7";
export default function Search({ setfoodData }) {
  const [query, setquery] = useState("");
  const [pull, setpull] = useState(1);
  //Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setfoodData(data.results);
      console.log(data.results);
    }
    fetchFood();
  }, [pull]);
  function p(e) {
    setpull(!pull);
    e.preventDefault();
  }
  return (
    <div className={styles.searchcontainer}>
      <form className={styles.f} onSubmit={p}>
        <input
          className={styles.input}
          onChange={(e) => {
            setquery(e.target.value);
          }}
          value={query}
          type="text"
        />
        <button type="submit" className={styles.btn}>
          提交
        </button>
      </form>
    </div>
  );
}
