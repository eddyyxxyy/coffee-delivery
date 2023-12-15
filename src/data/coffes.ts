import { t } from "i18next";

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
import { coffeType } from "../types/coffeType";

export const coffeeList: coffeType[] = [
  {
    id: "traditionalExpresso",
    imgSrc: expresso,
    coffeeName: t("traditionalExpressoName"),
    coffeeDesc: t("traditionalExpressoDesc"),
    coffeeTags: [t("traditionalTag")],
    coffeePrice: 9.99,
  },
  {
    id: "americanExpresso",
    imgSrc: expressoAmericano,
    coffeeName: t("americanExpressoName"),
    coffeeDesc: t("americanExpressoDesc"),
    coffeeTags: [t("traditionalTag")],
    coffeePrice: 9.99,
  },
  {
    id: "creamyExpresso",
    imgSrc: expressoCremoso,
    coffeeName: t("creamyExpressoName"),
    coffeeDesc: t("creamyExpressoDesc"),
    coffeeTags: [t("traditionalTag")],
    coffeePrice: 9.99,
  },
  {
    id: "coldExpresso",
    imgSrc: expressoGelado,
    coffeeName: t("coldExpressoName"),
    coffeeDesc: t("coldExpressoDesc"),
    coffeeTags: [t("traditionalTag"), t("icedTag")],
    coffeePrice: 9.99,
  },
  {
    id: "coffeeAndMilk",
    imgSrc: cafeComLeite,
    coffeeName: t("coffeeAndMilkName"),
    coffeeDesc: t("coffeeAndMilkDesc"),
    coffeeTags: [t("traditionalTag"), t("withMilkTag")],
    coffeePrice: 9.99,
  },
  {
    id: "latte",
    imgSrc: latte,
    coffeeName: t("latteName"),
    coffeeDesc: t("latteDesc"),
    coffeeTags: [t("traditionalTag"), t("withMilkTag")],
    coffeePrice: 9.99,
  },
  {
    id: "capuccino",
    imgSrc: capuccino,
    coffeeName: t("capuccinoName"),
    coffeeDesc: t("capuccinoDesc"),
    coffeeTags: [t("traditionalTag"), t("withMilkTag")],
    coffeePrice: 9.99,
  },
  {
    id: "macchiato",
    imgSrc: macchiato,
    coffeeName: t("macchiatoName"),
    coffeeDesc: t("macchiatoDesc"),
    coffeeTags: [t("traditionalTag"), t("withMilkTag")],
    coffeePrice: 9.99,
  },
  {
    id: "mochaccino",
    imgSrc: mochaccino,
    coffeeName: t("mochaccinoName"),
    coffeeDesc: t("mochaccinoDesc"),
    coffeeTags: [t("traditionalTag"), t("withMilkTag")],
    coffeePrice: 9.99,
  },
  {
    id: "hotChocolate",
    imgSrc: hotChocolate,
    coffeeName: t("hotChocolateName"),
    coffeeDesc: t("hotChocolateDesc"),
    coffeeTags: [t("traditionalTag"), t("withMilkTag")],
    coffeePrice: 9.99,
  },
  {
    id: "cuban",
    imgSrc: cubano,
    coffeeName: t("cubanName"),
    coffeeDesc: t("cubanDesc"),
    coffeeTags: [t("specialTag"), t("alcoholicTag"), t("icedTag")],
    coffeePrice: 9.99,
  },
  {
    id: "hawaiian",
    imgSrc: havaiano,
    coffeeName: t("hawaiianName"),
    coffeeDesc: t("hawaiianDesc"),
    coffeeTags: [t("specialTag")],
    coffeePrice: 9.99,
  },
  {
    id: "arab",
    imgSrc: arabe,
    coffeeName: t("arabName"),
    coffeeDesc: t("arabDesc"),
    coffeeTags: [t("specialTag")],
    coffeePrice: 9.99,
  },
  {
    id: "irish",
    imgSrc: irlandes,
    coffeeName: t("irishName"),
    coffeeDesc: t("irishDesc"),
    coffeeTags: [t("specialTag"), t("alcoholicTag")],
    coffeePrice: 9.99,
  },
];
