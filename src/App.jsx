import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Customize from "./components/Customize";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route element={<Customize />} exact path="/" />
          <Route element={<h1>Checkout</h1>} path="/checkout"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
