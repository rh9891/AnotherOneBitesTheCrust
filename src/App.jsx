import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./components/Landing";
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
      <Router>
        <Routes>
          <Route element={<Landing />} exact path="/" />
          <Route
            element={
              <Customize
                ingredients={ingredients}
                setIngredients={setIngredients}
              />
            }
            path="/customize"
          />
          <Route element={<h1>Checkout</h1>} path="/checkout"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
