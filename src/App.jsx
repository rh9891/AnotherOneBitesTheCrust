import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Customize from "./components/Customize";

function App() {
  const [ingredients, setIngredients] = useState({
    cheese: false,
    olives: false,
    mushrooms: false,
    pineapple: false,
    sunDriedTomatoes: false,
  });

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route
            element={
              <Customize
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            }
            exact
            path="/"
          />
          <Route element={<h1>Checkout</h1>} path="/checkout"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
