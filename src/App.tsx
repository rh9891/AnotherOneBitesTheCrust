import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Ingredients } from "./Types";
import Landing from "./components/Landing";
import CustomizeSauce from "./components/CustomizeSauce";
import CustomizeCheese from "./components/CustomizeCheese";
import CustomizeToppings from "./components/CustomizeToppings";
import Checkout from "./components/Checkout";

export default function App() {
  const [ingredients, setIngredients] = useState<Ingredients>({
    sauce: "tomato-sauce",
    cheese: "mozarella-cheese",
    toppings: [],
  });

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Landing />} path="/" />
          <Route
            element={
              <CustomizeSauce
                sauce={ingredients.sauce}
                setIngredients={setIngredients}
              />
            }
            path="/customize-sauce"
          />
          <Route
            element={
              <CustomizeCheese
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            }
            path="/customize-cheese"
          />
          <Route
            element={<CustomizeToppings ingredients={ingredients} setIngredients={setIngredients} />}
            path="/customize-additional-toppings"
          />
          <Route element={<Checkout ingredients={ingredients} />} path="/checkout"></Route>
        </Routes>
      </Router>
    </div>
  );
}