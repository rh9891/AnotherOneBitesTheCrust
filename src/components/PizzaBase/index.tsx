import { SauceType } from "../../Types";
import TomatoBase from "../../assets/images/TomatoBase.png";
import RomescoBase from "../../assets/images/RomescoBase.png";
import PestoBase from "../../assets/images/PestoBase.png";
import SpinachBase from "../../assets/images/SpinachBase.png";
import BBQBase from "../../assets/images/BBQBase.png";
import * as Styled from "./Styles";

type PizzaBaseProps = {
  sauce: SauceType;
};

export default function PizzaBase({ sauce }: PizzaBaseProps) {
  const sauceMap: Record<SauceType, { src: string; alt: string }> = {
    "tomato-sauce": { src: TomatoBase, alt: "Tomato Sauce" },
    "romesco-sauce": { src: RomescoBase, alt: "Romesco Sauce" },
    "pesto-sauce": { src: PestoBase, alt: "Pesto Sauce" },
    "creamy-spinach-sauce": { src: SpinachBase, alt: "Creamy Spinach Sauce" },
    "bbq-sauce": { src: BBQBase, alt: "BBQ Sauce" },
  };

  const selectedSauce = sauceMap[sauce];

  if (!selectedSauce) return null;

  return <Styled.Image src={selectedSauce.src} alt={selectedSauce.alt} />;
}
