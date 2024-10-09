import  { useState, useEffect } from "react";
import { Meal } from "../types/meal";
import SingleMealCard from "../components/Search/SingleMealCard";

function SavedMeals() {
  const [savedMeals, setSavedMeals] = useState<Meal[]>([]);


  useEffect(() => {
    const meals = JSON.parse(localStorage.getItem("savedMeals") || "[]");
    setSavedMeals(meals);
  }, []);

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold text-center my-6">Saved Recipes</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {savedMeals.length > 0 ? (
          savedMeals.map((meal: Meal) => (
            <div key={meal.idMeal} className="relative">
              <SingleMealCard meal={meal} />
            </div>
          ))
        ) : (
          <p>No saved meals yet!</p>
        )}
      </div>
    </div>
  );
}

export default SavedMeals;
