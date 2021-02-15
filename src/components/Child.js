import React, { } from "react";

  export default function Child({ setFood }) {
    const foods = { Title: 'State Lifted From Child', Protein: 'Beef', Carbohydrate: 'Pancakes', Fruit: 'Bananas', Veges: 'Broccoli'}

    return (
      <div className="child">
        <button onClick={() => { setFood(foods)}}>
          Set Parent Object Value From Child
        </button>
      </div>
    );
  }