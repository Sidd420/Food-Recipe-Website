import React from 'react'
import './RecipeTile.css'

export default function RecipeTile({recipe}) {
  return (
    <div className="recipeTile" onClick={()=>
    window.open(recipe['recipe']['url'])}>
    <img className="recipe_img" src={recipe["recipe"]["image"]}/>
    <p className="recipe_name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}
