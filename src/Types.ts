export type SauceType =
    | "tomato-sauce"
    | "romesco-sauce"
    | "pesto-sauce"
    | "creamy-spinach-sauce"
    | "bbq-sauce";

export type CheeseType =
    | "vegan-cheese"
    | "ricotta-cheese"
    | "mozzarella-cheese"
    | "goat-cheese";

export type Ingredients = {
    sauce: SauceType;
    cheese: CheeseType;
    toppings: string[];
};

export const sauceNames: Record<SauceType, string> = {
    "tomato-sauce": "tomato sauce",
    "romesco-sauce": "romesco sauce",
    "pesto-sauce": "pesto sauce",
    "creamy-spinach-sauce": "creamy spinach sauce",
    "bbq-sauce": "BBQ sauce",
};

export const cheeseNames: Record<CheeseType, string> = {
    "vegan-cheese": "vegan cheese",
    "ricotta-cheese": "ricotta cheese",
    "mozzarella-cheese": "mozzarella cheese",
    "goat-cheese": "goat cheese",
};

export const toppingNames: Record<string, string> = {
    pepperoni: "pepperoni",
    chicken: "chicken",
    ham: "ham",
    shrimp: "shrimp",
    peppers: "peppers",
    tomatoes: "tomatoes",
    "spring-onions": "spring onions",
    mushrooms: "mushrooms",
    olives: "olives",
    onions: "onions",
    pineapple: "pineapple",
    "shredded-parmesan-cheese": "shredded parmesan cheese",
};
  