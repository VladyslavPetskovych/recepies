import React, { useState } from "react";
import SingleMealCard from "./SingleMealCard";
import { Meal } from "../../types/meal";
import useRecipes from "../../hooks/useRecepies";

type MealsListProps = {
  searchTerm: string;
  category: string;
};

const filterMeals = (meals: Meal[], searchTerm: string, category: string) => {
  return meals
    .filter((meal: Meal) =>
      meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((meal: Meal) => (category ? meal.strCategory === category : true));
};

const paginateMeals = (
  meals: Meal[],
  currentPage: number,
  mealsPerPage: number
) => {
  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  return meals.slice(indexOfFirstMeal, indexOfLastMeal);
};

const renderPaginationButtons = (
  totalPages: number,
  currentPage: number,
  handlePageChange: (page: number) => void
) => {
  const pages = [];
  if (totalPages <= 10) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
  } else {
    for (let i = 1; i <= 7; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    pages.push(
      <span key="dots" className="px-4 py-2 mx-1">
        ...
      </span>
    );
    pages.push(
      <button
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`px-4 py-2 mx-1 rounded ${
          currentPage === totalPages ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}
      >
        {totalPages}
      </button>
    );
  }
  return pages;
};

function MealsList({ searchTerm, category }: MealsListProps) {
  const { meals, loading } = useRecipes();
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 2;

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredMeals = filterMeals(meals, searchTerm, category);
  const currentMeals = paginateMeals(filteredMeals, currentPage, mealsPerPage);
  const totalPages = Math.ceil(filteredMeals.length / mealsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row flex-wrap items-center justify-center">
        {currentMeals.length > 0 ? (
          currentMeals.map((meal: Meal) => (
            <SingleMealCard key={meal.idMeal} meal={meal} />
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>

      <div className="mt-4 flex items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          &#8249;
        </button>

        {renderPaginationButtons(totalPages, currentPage, handlePageChange)}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default MealsList;
