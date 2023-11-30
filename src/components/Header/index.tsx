/* eslint-disable @typescript-eslint/no-unused-vars */
import { List, MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "../../assets/logo.svg";

export function Header() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);

  const userLocale = navigator.language;
  console.log(userLocale);

  const changeLanguage = (): void => {
    const switchedLang = lang === "pt" ? "en" : "pt";
    i18n
      .changeLanguage(switchedLang)
      .then(() => setLang(switchedLang))
      .catch((error) => console.log(error));
  };

  return (
    <header className="flex h-16 max-h-24 items-center justify-between border border-purple-100 p-4 shadow-sm lg:h-28 lg:px-40 lg:py-8">
      <a
        href="/"
        className="flex h-10 items-center rounded-lg p-1 outline-none focus:ring-2 focus:ring-product-purple lg:h-12"
      >
        <img src={Logo} className="h-8 lg:h-10" alt="Coffee Delivery logo" />
      </a>
      <button
        type="button"
        className="rounded-md outline-none transition-all hover:rotate-90 hover:bg-product-purple-light hover:text-product-purple focus:rotate-90 focus:bg-product-purple-light focus:text-product-purple focus:ring-2 focus:ring-product-purple md:hidden lg:hidden"
      >
        <List size={32} />
      </button>
      <div className="hidden cursor-default md:flex md:gap-3">
        <div className="text-text rounded-md bg-product-purple-light p-2 font-sans-r text-sm md:flex md:items-center">
          <MapPin size={22} weight="fill" className="text-product-purple" />
          <span className="text-product-purple-dark">Porto Alegre, RS</span>
        </div>
        <div className="rounded-md bg-product-yellow-light p-2 font-sans-r text-sm md:flex md:items-center">
          <ShoppingCart
            size={22}
            weight="fill"
            className="text-product-yellow-dark"
          />
        </div>
      </div>
      <nav className="top absolute md:hidden"></nav>
    </header>
  );
}
