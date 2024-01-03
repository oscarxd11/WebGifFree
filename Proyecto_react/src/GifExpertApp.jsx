import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch']);
  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return;
    setcategories([onNewCategory, ...categories])
  }
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={valor => onAddCategory(valor)}
      />






      {categories.map(category =>
        (<GifGrid key={category} category={category} />)
      )}

    </>
  )
}
