import { AnimatePresence, motion } from "framer-motion";
import cardStyle from "./card.module.scss";
import ICardParams from "./type-card";
export default function Card({ children, customSass }: ICardParams) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className={`${cardStyle.card} ${customSass}`}
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -5, opacity: 0 }}
        transition={{ duration: 0.3 }}
        key={"empty"}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
