import React, { useState } from "react";
import Animal from "./Animal";

function AnimalShow() {
  const getRandomAnimal = () => {
    const animals = ["bird", "cat", "cow", "dog", "gator", "heart", "horse"];

    return animals[Math.floor(Math.random() * animals.length)];
  };

  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, `${getRandomAnimal()}`]);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <ul className="app" style={{ listStyleType: "none" }}>
        {animals.map((animal, index) => (
          <Animal type={animal} key={index} />
        ))}
      </ul>

      {/* <p>Animals: {animals}</p> */}
    </div>
  );
}

export default AnimalShow;
