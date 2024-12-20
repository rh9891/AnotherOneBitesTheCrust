import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route element={<h1>Customize</h1>} exact path="/" />
          <Route element={<h1>Checkout</h1>} path="/checkout"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
