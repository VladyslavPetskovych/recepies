
import { useParams } from "react-router-dom";
import { Meal } from "../types/meal";
import useRecipes from "../hooks/useRecepies";

function MealDetail() {
  const { idMeal } = useParams<{ idMeal: string }>();
  const { meals } = useRecipes();

 
  const meal = meals.find((meal: Meal) => meal.idMeal === idMeal);

  if (!meal) {
    return <p>Meal not found!</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="w-64" />
      <p>Category: {meal.strCategory}</p>
      <p>Area: {meal.strArea}</p>
      <p>Instructions: {meal.strInstructions}</p>
    </div>
  );
}

export default MealDetail;