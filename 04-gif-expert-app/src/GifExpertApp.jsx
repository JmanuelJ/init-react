import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["One Piece"]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    // const onAddCategory = () => {
    //     setCategories(cat => [...cat, 'Naruto']);
    // }
    setCategories([newCategory, ...categories]);
  }
    
  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        //setCategories={setCategories}
        onNewCategory={onAddCategory}//event => onAddCategory(event)
      />

      {/* Listado de gif */}
      <ol>
        {categories.map((category) => (
          <GifGrid 
          key={category}
          category={category}
          />
        ))
        }

        {/* {categories.map((category) => {
          return (
            <div key={category}>
              <h3>{category}</h3>
              <li>{category}</li>
            </div>
          );
        })} */}
      </ol>
    </>
  );
};