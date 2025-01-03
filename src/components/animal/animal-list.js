import { useContext, useEffect } from "react";
import "./animal.css";
import { AnimalContext } from "./animal-provider.js";
import { useNavigate } from "react-router-dom";

export const AnimalList = () => {
  // Invoke the useHistory() hook function
  const navigate = useNavigate();

  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
  }, [getAnimals]);

  return (
    <>
      <h2>Animals</h2>
      <button onClick={() => navigate("/animals/create")}>Add Animal</button>
      <div className="animals">
        {animals.map((animal) => {
          return (
            <div className="animal" key={`animal--${animal.id}`}>
              <div className="animal__name">Name: {animal.name}</div>
              <div className="animal__breed">Breed: {animal.breed}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
