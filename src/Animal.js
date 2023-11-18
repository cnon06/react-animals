import React, { useState } from "react";

import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import heart from "./images/heart.svg";
import horse from "./images/horse.svg";

import "./Animal.css";

function Animal({ type }) {
  const animalMap = { bird, cat, cow, dog, gator, heart, horse };

  const [up, setUp] = useState(0);

  const handleUp = () => {
    setUp(up + 1);
  };

  return (
    <li onClick={handleUp} className="animal">
      <img src={animalMap[type]} alt="" style={{ width: 100 + "px" }} />
      <img
        className="heart"
        src={animalMap["heart"]}
        alt=""
        style={{ width: 10 + up * 10 + "px" }}
      />
    </li>
  );
}

export default Animal;
