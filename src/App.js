import React, { useState } from "react";
import "./styles.css";
export default function App() {
  var foodDatabase = {
    NorthIndian: [
      { name: "Kadhai Paneer", rating: "5/5" },
      { name: "Shahi Paneer", rating: "4.8/5" },
      { name: "Dal Makhani", rating: "4.5/5" }
    ],
    Chinese: [
      { name: "Noodles", rating: "4.9/5" },
      { name: "Momos", rating: "4.9/5" },
      { name: "Spring roll", rating: "4/5" }
    ],
    Beverages: [
      { name: "Coca-cola", rating: "5/5" },
      { name: "Mint mojito", rating: "5/5" },
      { name: "Cold coffee", rating: "4/5" }
    ]
  };

  const foodCategory = Object.keys(foodDatabase);

  const [foodtoShow, setFoodToShow] = useState("NorthIndian");
  function foodClickHandler(type) {
    setFoodToShow(type);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Good-Food</h1>
        <p>check out my favorite food.select category to start.</p>
        {foodCategory.map((category) => (
          <button className="button" onClick={() => foodClickHandler(category)}>
            {category}
          </button>
        ))}
        <hr />
        <ul style={{ listStyle: "none" }}>
          {foodDatabase[foodtoShow].map((food) => (
            <li>
              <div className="list-div">
                {food.name}
                <div style={{ fontSize: "smaller" }}>{food.rating}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
