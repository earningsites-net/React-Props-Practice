import React from "react";
import Picture from "./Picture";
import Detail from "./Detail";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Picture imgurl={props.imgurl} />
        </div>
        <div className="bottom">
          <Detail text={props.ingredients} />
          <Detail text={props.price} />
        </div>
      </div>
    </div>
  );
}

export default Card;
