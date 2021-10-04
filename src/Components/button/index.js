import { useContext } from "react";

import { CartContext } from "../providers/cart";
import { CatalogueContext } from "../providers/catalogue";
import { ButtonStyle } from "./styles";
const Button = ({ type, item }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { catologue, addToCatalogue, removeFromCatalogue } =
    useContext(CatalogueContext);
  const text = type === "catalogue" ? "Add to Cart" : "Remove from cart";

  const handleClick = () => {
    if (type === "catalogue") {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };

  return <ButtonStyle onClick={handleClick}>{text}</ButtonStyle>;
};

export default Button;
