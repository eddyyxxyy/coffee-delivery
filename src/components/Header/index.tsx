/* eslint-disable @typescript-eslint/no-unused-vars */
import { List, MapPin, ShoppingCart, Translate } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Logo from "../../assets/logo.svg";

export function Header() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const changeLanguage = (): void => {
    const switchedLang = lang === "pt" ? "en" : "pt";
    i18n
      .changeLanguage(switchedLang)
      .then(() => setLang(switchedLang))
      .catch((error) => console.log(error));
  };

  const toggleDropdown = (): void => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="z-20 flex h-16 max-h-24 items-center justify-between border border-purple-100 p-4 shadow-md md:h-20 md:px-24 md:py-4 lg:h-28 lg:px-40 lg:py-8">
      <a
        href="/"
        className="flex h-10 items-center rounded-lg p-1 outline-none focus:ring-2 focus:ring-product-purple md:h-12"
      >
        <img src={Logo} className="h-8 md:h-10" alt="Coffee Delivery logo" />
      </a>
      <button
        type="button"
        onClick={toggleDropdown}
        className="rounded-md outline-none transition-all hover:rotate-90 hover:bg-product-purple-light hover:text-product-purple focus:rotate-90 focus:bg-product-purple-light focus:text-product-purple focus:ring-2 focus:ring-product-purple md:hidden lg:hidden"
      >
        <List size={32} />
      </button>
      <div className="hidden cursor-default md:flex md:items-center md:gap-3">
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
        <div>
          <button
            type="button"
            onClick={changeLanguage}
            title={t("changeLang")}
            className="flex gap-1 rounded-lg p-1 font-sans-b text-base uppercase text-zinc-800 outline-none hover:bg-product-purple-light hover:text-product-purple focus:ring-2 focus:ring-product-purple"
          >
            {lang === "pt" ? "en" : "pt"}
            <Translate size={22} />
          </button>
        </div>
      </div>
      {isDropdownVisible && (
        <nav className="animate-downAndFade fixed left-0 top-16 z-10 h-screen w-screen bg-base-bg md:hidden">
          <div className="flex cursor-default items-center justify-center gap-3 pt-4">
            <div className="text-text flex items-center rounded-md bg-product-purple-light p-2 font-sans-r text-sm">
              <MapPin
                size={22}
                weight="fill"
                className="text-product-purple"
              />
              <span className="text-product-purple-dark">
                Porto Alegre, RS
              </span>
            </div>
            <div className="rounded-md bg-product-yellow-light p-2 font-sans-r text-sm md:flex md:items-center">
              <ShoppingCart
                size={22}
                weight="fill"
                className="text-product-yellow-dark"
              />
            </div>
            <div>
              <button
                type="button"
                onClick={changeLanguage}
                title={t("changeLang")}
                className="flex gap-1 rounded-lg p-1 font-sans-b text-base uppercase text-zinc-800 outline-none hover:ring-2 hover:ring-product-purple focus:ring-2 focus:ring-product-purple"
              >
                {lang === "pt" ? "en" : "pt"}
                <Translate size={22} />
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
