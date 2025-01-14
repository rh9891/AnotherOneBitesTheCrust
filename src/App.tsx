import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {Ingredients} from "./Types";
import Landing from "./components/Landing";
import CustomizeSauce from "./components/CustomizeSauce";
import CustomizeCheese from "./components/CustomizeCheese";
import CustomizeToppings from "./components/CustomizeToppings";
import Checkout from "./components/Checkout";

const LOCAL_STORAGE_KEY = "pizzaOrder";

export default function App() {
    const [ingredients, setIngredients] = useState<Ingredients>(() => {
        const savedOrder = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedOrder
            ? JSON.parse(savedOrder)
            : {
                sauce: "tomato-sauce",
                cheese: "mozzarella-cheese",
                toppings: [],
            };
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ingredients));
    }, [ingredients]);

    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<Landing/>} path="/"/>
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
                        element={<CustomizeToppings ingredients={ingredients} setIngredients={setIngredients}/>}
                        path="/customize-additional-toppings"
                    />
                    <Route element={<Checkout ingredients={ingredients}/>} path="/checkout"></Route>
                </Routes>
            </Router>
        </div>
    );
}