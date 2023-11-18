import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState<string[]>([]);

  const onAddCategory = (newCategory: string) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <> 
        <div>GifExpertApp</div>

        <AddCategory
            onNewCategory={onAddCategory}
        />
        
        {categories.map(category => {
            return (
                <GifGrid key={category} category={category} />
                // <div key={category}>
                //     <li>{category}</li>
                // </div>
            )
        })}

    </>
  )
}
