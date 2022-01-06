import React from "react";
import menu from "../menu.js";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">Our Menu</h1>
      <Card
        name={menu[0].name}
        ingredients={menu[0].ingredients}
        price={menu[0].price}
        imgurl={menu[0].imgURL}
      />
      <Card
        name={menu[1].name}
        ingredients={menu[1].ingredients}
        price={menu[1].price}
        imgurl={menu[1].imgURL}
      />
      <Card
        name={menu[2].name}
        ingredients={menu[2].ingredients}
        price={menu[2].price}
        imgurl={menu[2].imgURL}
      />
    </div>
  );
}

export default App;
