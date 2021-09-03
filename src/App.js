import react, { useState } from "react";
import "./styles.css";
const button = ["Indian", "Continental", "Chineese"];
const dishes = {
  Indian: {
    dishList: ["Chole-Bhature", "Pani-puri", "Samosa"],
    rating: ["5/5", "4.5/5", "4/5"]
  },

  Continental: {
    dishList: ["Pudding", "Taco", "Waffles"],
    rating: ["4/5", "3/5", "4/5"]
  },

  Chineese: {
    dishList: ["Paneer-chilli", "Chow-Mein", "Spring-roll"],
    rating: ["5/5", "4.5/5", "4/5"]
  }
};

export default function App() {
  const [foodName, setFoodName] = useState("Indian");

  return (
    <div className="App">
      <h1>
        Yummy<span style={{ color: "purple" }}>Food</span>
      </h1>

      <p style={{ padding: "0.5rem 0rem" }}>
        Checkout my favorite foods with rating.
        <br />
        Select a genre to get started.{" "}
      </p>
      <hr />

      <div>
        {button.map((item, index) => {
          return (
            <button
              className="btn"
              key={index}
              onClick={() => setFoodName(item)}
            >
              {item}
            </button>
          );
        })}
        <ul className="uList">
          {dishes[foodName].dishList.map((item, index) => {
            return (
              <li key={index} className="list">
                {item}
                <span className="rating">{dishes[foodName].rating[index]}</span>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
