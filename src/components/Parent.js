import React, { useState } from "react";
import { Child, Navigation } from '.';

export default function Parent() {
  const foods = { Title: 'Initial Parent State', Protein: 'Fish', Carbohydrate: 'Rice', Fruit: 'Mango'}
  const [food, setFood] = useState(foods);

  return (
    <div className="page parent fx fxjcc fxdc">
      <Navigation/>

      <div className="foods">
        {Object.entries(food).map(([key, value]) => { 
          return (<div><b>{key}:</b> <span>{value}</span></div>) 
        })}
      </div>

      <Child setFood={setFood} />
    </div>
  );
}