import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchRecipes = async () => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  return response.data.meals || [];
};

const useRecipes = () => {
  const { data: meals = [], isLoading: loading } = useQuery({
    queryKey: ["recipes"], 
    queryFn: fetchRecipes,  
  });

  return { meals, loading };
};

export default useRecipes;
