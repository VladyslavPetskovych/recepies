
import React, { useState, useEffect } from "react";
import FindRecepie from "./InputFindRecepie";
import MealsList from "./MealsList";
import useRecipes from "../../hooks/useRecepies";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const { meals } = useRecipes(); 

  const categories = [...new Set(meals.map((meal) => meal.strCategory))];

  return (
    <div className="h-screen">
      <FindRecepie
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />
      <MealsList searchTerm={searchTerm} category={category} />
    </div>
  );
}

export default Search;
