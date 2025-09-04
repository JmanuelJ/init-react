import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Piece", "Dragon Ball"]);

  const onAddCategory = () => setCategories([...categories, 'Naruto']);
    // const onAddCategory = () => {
    //     setCategories(cat => [...cat, 'Naruto']);
    // }

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Input */}

      {/* Listado de gif */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
