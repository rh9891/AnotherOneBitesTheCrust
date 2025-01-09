export type SauceType =
  | "tomato-sauce"
  | "romesco-sauce"
  | "pesto-sauce"
  | "creamy-spinach-sauce"
  | "bbq-sauce";

export type CheeseType =
  | "vegan-cheese"
  | "ricotta-cheese"
  | "mozarella-cheese"
  | "goat-cheese";

export type Ingredients = {
  sauce: SauceType;
  cheese: CheeseType;
  toppings: string[];
};

export type Sauces = {
  tomatoSauce: boolean;
  spinachauce: boolean;
  romescoSauce: boolean;
  pestoSauce: boolean;
  bbqSauce: boolean;
};

export type Cheese = {
  vegan: boolean;
  ricotta: boolean;
  mozarella: boolean;
  goat: boolean;
};

export type Toppings = {
  basil: boolean;
  tomatoes: boolean;
  mushrooms: boolean;
  pineapple: boolean;
  sunDriedTomatoes: boolean;
  springOnions: boolean;
  shrimp: boolean;
  olives: boolean;
};
