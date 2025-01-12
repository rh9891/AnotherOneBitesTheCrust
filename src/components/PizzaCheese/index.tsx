import { motion, AnimatePresence } from "framer-motion";

import { CheeseType } from "../../Types";
import VeganCheese from "../../assets/images/VeganCheese.png";
import RicottaCheese from "../../assets/images/RicottaCheese.png";
import MozarellaCheese from "../../assets/images/MozarellaCheese.png";
import GoatCheese from "../../assets/images/GoatCheese.png";
import * as Styled from "./Styles";

type PizzaCheeseProps = {
  cheese: CheeseType;
};

export default function PizzaCheese({ cheese }: PizzaCheeseProps) {
  const cheeseMap: Record<CheeseType, { src: string; alt: string }> = {
    "vegan-cheese": { src: VeganCheese, alt: "Vegan Sauce" },
    "ricotta-cheese": { src: RicottaCheese, alt: "Ricotta Sauce" },
    "mozarella-cheese": { src: MozarellaCheese, alt: "MozarellaCheese" },
    "goat-cheese": { src: GoatCheese, alt: "Goat Cheese" },
  };

  const selectedCheese = cheeseMap[cheese];

  if (!selectedCheese) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={cheese}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
        className="ingredients"
      >
        <Styled.Image src={selectedCheese.src} alt={selectedCheese.alt} />
      </motion.div>
    </AnimatePresence>
  );
}
