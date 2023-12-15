import arabe from "../assets/arabe.png";
import cafeComLeite from "../assets/cafe-com-leite.png";
import capuccino from "../assets/capuccino.png";
import hotChocolate from "../assets/chocolate-quente.png";
import cubano from "../assets/cubano.png";
import expresso from "../assets/expresso.png";
import expressoAmericano from "../assets/expresso-americano.png";
import expressoCremoso from "../assets/expresso-cremoso.png";
import expressoGelado from "../assets/expresso-gelado.png";
import havaiano from "../assets/havaiano.png";
import irlandes from "../assets/irlandes.png";
import latte from "../assets/latte.png";
import macchiato from "../assets/macchiato.png";
import mochaccino from "../assets/mochaccino.png";
import { ICoffeeSchema } from "../types/coffeType";

export const coffeeList: ICoffeeSchema[] = [
  {
    id: "traditionalExpresso",
    imgSrc: expresso,
    coffeeTags: ["traditional"],
    coffeePrice: 9.99,
  },
  {
    id: "americanExpresso",
    imgSrc: expressoAmericano,
    coffeeTags: ["traditional"],
    coffeePrice: 9.99,
  },
  {
    id: "creamyExpresso",
    imgSrc: expressoCremoso,
    coffeeTags: ["traditional"],
    coffeePrice: 9.99,
  },
  {
    id: "coldExpresso",
    imgSrc: expressoGelado,
    coffeeTags: ["traditional", "iced"],
    coffeePrice: 9.99,
  },
  {
    id: "coffeeAndMilk",
    imgSrc: cafeComLeite,
    coffeeTags: ["traditional", "withMilk"],
    coffeePrice: 9.99,
  },
  {
    id: "latte",
    imgSrc: latte,
    coffeeTags: ["traditional", "withMilk"],
    coffeePrice: 9.99,
  },
  {
    id: "capuccino",
    imgSrc: capuccino,
    coffeeTags: ["traditional", "withMilk"],
    coffeePrice: 9.99,
  },
  {
    id: "macchiato",
    imgSrc: macchiato,
    coffeeTags: ["traditional", "withMilk"],
    coffeePrice: 9.99,
  },
  {
    id: "mochaccino",
    imgSrc: mochaccino,
    coffeeTags: ["traditional", "withMilk"],
    coffeePrice: 9.99,
  },
  {
    id: "hotChocolate",
    imgSrc: hotChocolate,
    coffeeTags: ["traditional", "withMilk"],
    coffeePrice: 9.99,
  },
  {
    id: "cuban",
    imgSrc: cubano,
    coffeeTags: ["special", "alcoholic", "iced"],
    coffeePrice: 9.99,
  },
  {
    id: "hawaiian",
    imgSrc: havaiano,
    coffeeTags: ["special"],
    coffeePrice: 9.99,
  },
  {
    id: "arab",
    imgSrc: arabe,
    coffeeTags: ["special"],
    coffeePrice: 9.99,
  },
  {
    id: "irish",
    imgSrc: irlandes,
    coffeeTags: ["special", "alcoholic"],
    coffeePrice: 9.99,
  },
];
