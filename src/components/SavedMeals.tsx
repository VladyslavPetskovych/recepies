import React, { useState, useEffect } from "react";
import { Meal } from "../types/meal";
import SingleMealCard from "../components/Search/SingleMealCard";



// function CombineIngridients(meal:Meal){

//     for
// }





function SavedMeals() {
  const [savedMeals, setSavedMeals] = useState<Meal[]>([]);
  const [selectedMeals, setSelectedMeals] = useState<Meal[]>([]);
  const [sumIngridients, setSumIngridients] = useState<Map>({});

  useEffect(() => {

    const meals = JSON.parse(localStorage.getItem("savedMeals") || "[]");
    setSavedMeals(meals);
    console.log("Saved Meals:", meals); 
  }, []);

  const toggleMealSelection = (meal: Meal) => {
    setSelectedMeals((prevSelected) => {
      if (
        prevSelected.some((selectedMeal) => selectedMeal.idMeal === meal.idMeal)
      ) {
        return prevSelected.filter(
          (selectedMeal) => selectedMeal.idMeal !== meal.idMeal
        );
      } else {
        return [...prevSelected, meal];
      }
    });
    console.log("Selected Meals:", selectedMeals); 
  };

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-bold text-center my-6">Saved Recipes</h1>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {savedMeals.length > 0 ? (
          savedMeals.map((meal: Meal) => (
            <div key={meal.idMeal} className="relative">
              <SingleMealCard
                meal={meal}
                isSelected={selectedMeals.some(
                  (selectedMeal) => selectedMeal.idMeal === meal.idMeal
                )}
                onToggle={() => toggleMealSelection(meal)}
              />
            </div>
          ))
        ) : (
          <p>No saved meals yet!</p>
        )}
      </div>
      <div>
        <div>
          {/* {meal.map((meal) => {
            return <p>{}</p>;
          })} */}
        </div>
      </div>
    </div>
  );
}

export default SavedMeals;
