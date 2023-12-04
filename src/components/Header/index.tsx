import { List, MapPin, ShoppingCart, Translate } from "@phosphor-icons/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import { IconButton } from "../IconButton";

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

  const handleLinkRedirect = (): void => {
    setIsDropdownVisible(false);
  };

  return (
    <header className="z-20 flex h-16 max-h-24 items-center justify-between border border-purple-100 p-4 shadow-md md:h-20 md:px-24 md:py-4 lg:h-28 lg:px-40 lg:py-8">
      <Link
        to="/"
        onClick={handleLinkRedirect}
        className="flex h-10 items-center rounded-lg p-1 outline-none hover:ring-2 hover:ring-product-purple focus:ring-2 focus:ring-product-purple md:h-12"
      >
        <img src={Logo} className="h-8 md:h-10" alt="Coffee Delivery logo" />
      </Link>
      <button
        type="button"
        title={t("toggleDropdown")}
        onClick={toggleDropdown}
        className="rounded-md outline-none transition-all hover:rotate-90 hover:bg-product-purple-light hover:text-product-purple focus:rotate-90 focus:bg-product-purple-light focus:text-product-purple focus:ring-2 focus:ring-product-purple md:hidden lg:hidden"
      >
        <List size={32} />
      </button>
      <div className="hidden md:flex md:items-center md:gap-3">
        <IconButton.Root
          color="purpleLight"
          className="cursor-default outline-none"
        >
          <IconButton.Inner
            icon={MapPin}
            iconSize={22}
            iconColor="purple"
            iconWeight="fill"
            text="Porto Alegre, RS"
            textColor="purpleDark"
          />
        </IconButton.Root>
        <Link
          to="/checkout"
          onClick={handleLinkRedirect}
          className="cursor-pointer rounded-md outline-none transition-all hover:ring-2 hover:ring-product-yellow focus:ring-2 focus:ring-product-yellow"
        >
          <IconButton.Root
            color="yellowLight"
            className="relative cursor-pointer"
            title={t("goToCheckout")}
          >
            <IconButton.Inner
              icon={ShoppingCart}
              iconSize={22}
              iconColor="yellowDark"
              iconWeight="fill"
              textColor="purpleDark"
            />
          </IconButton.Root>
        </Link>
        <div>
          <button
            type="button"
            onClick={changeLanguage}
            title={t("changeLang")}
            className="flex gap-1 rounded-lg p-1 font-sans-b text-base uppercase text-zinc-800 outline-none transition-all hover:bg-zinc-200 hover:ring-2 hover:ring-zinc-800 focus:bg-zinc-200 focus:ring-2 focus:ring-zinc-800"
          >
            {lang === "pt" ? "pt" : "en"}
            <Translate size={22} />
          </button>
        </div>
      </div>
      {isDropdownVisible && (
        <nav className="absolute left-0 top-16 z-10 w-screen animate-downAndFade bg-base-card pb-4 shadow-md md:hidden">
          <div className="flex cursor-default items-center justify-center gap-3 pt-4">
            <IconButton.Root
              color="purpleLight"
              className="cursor-default outline-none"
            >
              <IconButton.Inner
                icon={MapPin}
                iconSize={22}
                iconColor="purple"
                iconWeight="fill"
                text="Porto Alegre, RS"
                textColor="purpleDark"
              />
            </IconButton.Root>
            <Link
              to="/checkout"
              onClick={handleLinkRedirect}
              className="cursor-pointer rounded-md outline-none focus:ring-2 focus:ring-product-yellow"
            >
              <IconButton.Root
                color="yellowLight"
                title={t("goToCheckout")}
                className="relative cursor-pointer"
              >
                <IconButton.Inner
                  icon={ShoppingCart}
                  iconSize={22}
                  iconColor="yellowDark"
                  iconWeight="fill"
                  textColor="purpleDark"
                  productsCount={5}
                />
              </IconButton.Root>
            </Link>
            <div>
              <button
                type="button"
                onClick={changeLanguage}
                title={t("changeLang")}
                className="flex gap-1 rounded-lg p-1 font-sans-b text-base uppercase text-zinc-800 outline-none transition-all hover:bg-zinc-200 hover:ring-2 hover:ring-zinc-800 focus:bg-zinc-200 focus:ring-2 focus:ring-zinc-800"
              >
                {lang === "pt" ? "pt" : "en"}
                <Translate size={22} />
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
