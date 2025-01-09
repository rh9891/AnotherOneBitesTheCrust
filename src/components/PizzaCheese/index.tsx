import { CheeseType } from '../../Types';
import VeganCheese from '../../assets/images/VeganCheese.png';
import RicottaCheese from '../../assets/images/RicottaCheese.png';
import MozarellaCheese from '../../assets/images/MozarellaCheese.png';
import GoatCheese from '../../assets/images/GoatCheese.png';
import * as Styled from './Styles';

type PizzaCheeseProps = {
  cheese: CheeseType;
}

export default function PizzaCheese ({ cheese }: PizzaCheeseProps) {
  const cheeseMap: Record<CheeseType, { src: string; alt: string }> = {
    "vegan-cheese": { src: VeganCheese, alt: "Vegan Sauce" },
    "ricotta-cheese": { src: RicottaCheese, alt: "Ricotta Sauce" },
    "mozarella-cheese": { src: MozarellaCheese, alt: "MozarellaCheese" },
    "goat-cheese": { src: GoatCheese, alt: "Goat Cheese" },
  };

  const selectedCheese = cheeseMap[cheese];

  if (!selectedCheese) return null;

  return <Styled.Image className="ingredients" src={selectedCheese.src} alt={selectedCheese.alt} />;
}