import { Link } from "react-router-dom";
import { Meal } from "../../types/meal";

const saveMeal = (meal: Meal) => {
  const savedMeals = JSON.parse(localStorage.getItem("savedMeals") || "[]");

  if (!savedMeals.some((savedMeal: Meal) => savedMeal.idMeal === meal.idMeal)) {
    savedMeals.push(meal);
    localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
    alert("Meal saved!");
  } else {
    alert("Meal already saved!");
  }
};

const removeMeal = (meal: Meal) => {
  let savedMeals = JSON.parse(localStorage.getItem("savedMeals") || "[]");

  savedMeals = savedMeals.filter(
    (savedMeal: Meal) => savedMeal.idMeal !== meal.idMeal
  );
  localStorage.setItem("savedMeals", JSON.stringify(savedMeals));
  alert("Meal removed!");
};

const SaveButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-1/2 p-3 mr-2 bg-green-400 font-averta font-bold rounded-xl"
  >
    Add
  </button>
);

const RemoveButton = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="w-1/2 p-3 mr-2 bg-red-400 font-averta font-bold rounded-xl"
  >
    Remove
  </button>
);

const MoreButton = ({ mealId }: { mealId: string }) => (
  <Link to={`/meals/${mealId}`}>
    <button className="w-full p-3 mr-2 bg-btnYellow font-averta font-bold rounded-xl">
      More...
    </button>
  </Link>
);

function SingleMeal({ meal }: { meal: Meal }) {
  return (
    <div className="p-1 m-3 h-64 min-w-96 border-dotted border-8 w-1/3 flex flex-col hover:border-pink-200 hover:p-0.5">
      <div className="flex flex-row">
        <img
          className="w-32 object-contain"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <div className=" p-2">
          <h1>{meal.strMeal}</h1>
          <p>{meal.strArea}</p>
          <div className="flex flex-row">
            <SaveButton onClick={() => saveMeal(meal)} />
            <RemoveButton onClick={() => removeMeal(meal)} />
          </div>
          <MoreButton mealId={meal.idMeal} />
        </div>
      </div>
      <p className="bg-amber-500 w-32 p-1">{meal.strCategory}</p>
    </div>
  );
}

export default SingleMeal;
