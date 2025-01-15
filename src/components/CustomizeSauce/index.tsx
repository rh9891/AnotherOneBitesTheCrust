import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

import { Ingredients, SauceType } from "../../Types";
import Header from "../Header";
import PizzaSauce from "../PizzaSauce";
import * as Styled from "./Styles";

type CustomizeSauceProps = {
  sauce: SauceType;
  setIngredients: Dispatch<SetStateAction<Ingredients>>;
};

type Sauce = {
  id: SauceType;
  label: string;
};

const sauces: Sauce[] = [
  { id: "tomato-sauce", label: "Total Eclipse of the Tomato" },
  { id: "romesco-sauce", label: "Romesco Like the Wind" },
  { id: "creamy-spinach-sauce", label: "Spin(ach) Me Right Round" },
  { id: "bbq-sauce", label: "Burnin' for BBQ" },
  { id: "pesto-sauce", label: "Every Pesto You Take" }
];

export default function CustomizeSauce({
                                         sauce,
                                         setIngredients
                                       }: CustomizeSauceProps) {
  const navigate = useNavigate();

  const handleSauceChange = (sauce: SauceType) => {
    setIngredients((prev: Ingredients) => ({ ...prev, sauce: sauce }));
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const handleNextPage = () => {
    navigate("/customize-cheese");
  };

  return (
    <Styled.Wrapper>
      <Header />
      <Styled.CustomizationContainer>
        <Styled.Card>
          <Styled.Container>
            <Styled.ImageContainer>
              <PizzaSauce sauce={sauce} />
            </Styled.ImageContainer>
          </Styled.Container>
          <Styled.OptionsContainer>
            <Styled.DirectionContainer>
              <Styled.Title>Set the Sauce Stage</Styled.Title>
              <Styled.Description>
                The sauce is the soul of your pizza—choose your base hit to set
                the tone for a legendary pie. Will it be classic, bold, or green
                and dreamy?
              </Styled.Description>
            </Styled.DirectionContainer>
            <div>
              {sauces.map((option) => (
                <Styled.Option key={option.id}>
                  <input
                    type="radio"
                    id={option.id}
                    name="sauce"
                    value={option.id}
                    checked={sauce === option.id}
                    onChange={() => handleSauceChange(option.id)}
                  />
                  <label htmlFor={option.id}>{option.label}</label>
                </Styled.Option>
              ))}
            </div>
            <Styled.ButtonContainer>
              <Styled.Button onClick={handleGoBack}>
                Go Back
              </Styled.Button>
              <Styled.Button onClick={handleNextPage}>
                Customize Cheese
              </Styled.Button>
            </Styled.ButtonContainer>
          </Styled.OptionsContainer>
        </Styled.Card>
      </Styled.CustomizationContainer>
    </Styled.Wrapper>
  );
}
