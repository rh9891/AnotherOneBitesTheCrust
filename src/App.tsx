import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Ingredients } from "./Types";
import Landing from "./components/Landing";
import CustomizeSauce from "./components/CustomizeSauce";
import CustomizeToppings from "./components/CustomizeToppings";

function App() {
  const [ingredients, setIngredients] = useState<Ingredients>({
    sauce: "",
    base: "",
    toppings: [],
  });

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Landing />} path="/" />
          <Route element={<CustomizeSauce sauce={ingredients.sauce} setIngredients={setIngredients} />} path="/customize-sauce" />
          <Route element={<CustomizeToppings />} path="/customize-toppings" />
          <Route element={<h1>Checkout</h1>} path="/checkout"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
