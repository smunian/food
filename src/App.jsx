import "./app.css";
import { useState } from "react";
import Search from "./com/Search";
import FooList from "./com/FoodList";
import Nav from "./com/Nav";
import Container from "./com/Container";
import InnerContainer from "./com/InnerContainer";
import FoodDatails from "./com/FoodDetails";
function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodid, setfoodid] = useState("716406");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <InnerContainer>
          <FooList foodData={foodData} setfoodid={setfoodid} />
        </InnerContainer>
        <InnerContainer>
          <FoodDatails foodid={foodid} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
