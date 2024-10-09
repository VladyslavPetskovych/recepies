import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MealInfo from "./components/MealInfo";
import Header from "./components/Header";
import SavedMeals from "./components/SavedMeals";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals/:idMeal" element={<MealInfo />} />
        <Route path="/saved-meals" element={<SavedMeals />} />
      </Routes>
    </Router>
  );
}

export default App;
