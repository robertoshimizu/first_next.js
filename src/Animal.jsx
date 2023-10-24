import { useState } from "react";

const Animal = () => {
  // under the imports
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

  // under location
  const [animal, updateAnimal, updateBreed] = useState("");

  // under the location label
  return (
    <label htmlFor="animal">
      Animal
      <select
        id="animal"
        value={animal}
        onChange={(e) => {
          updateAnimal(e.target.value);
          updateBreed("");
        }}
        onBlur={(e) => {
          updateAnimal(e.target.value);
          updateBreed("");
        }}
      >
        <option />
        {ANIMALS.map((animal) => (
          <option key={animal} value={animal}>
            {animal}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Animal;
