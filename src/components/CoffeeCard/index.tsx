import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { AppContext } from "../../contexts/AppContext";
import { convertToDollars } from "../../utils/convertToDollar";
import { AddedToCartNotification } from "../AddedToCartNotification";
import { IconButton } from "../IconButton";

export interface ICoffeeCardProps {
  id: string;
  imgSrc: string;
  coffeePrice: number;
  coffeeTags: string[];
}

export function CoffeeCard({
  id,
  imgSrc,
  coffeeTags,
  coffeePrice,
}: ICoffeeCardProps) {
  const { t, i18n } = useTranslation();
  const { handleAddToCart } = useContext(AppContext);

  const [productQuantity, setProductQuantity] = useState<number>(1);

  const [formattedCoffeePrice, setFormattedCoffeePrice] = useState<
    string | null
  >(null);

  const [showAddedToCartNotification, setShowAddedToCartNotification] =
    useState<boolean>(false);

  function handleMinusClick() {
    if (productQuantity > 1) {
      setProductQuantity((prevState) => prevState - 1);
    }
  }

  function handlePlusClick() {
    if (productQuantity < 25) {
      setProductQuantity((prevState) => prevState + 1);
    }
  }

  function handleAddedToCartWithNotification() {
    handleAddToCart(
      {
        id,
        imgSrc,
        coffeeTags,
        coffeePrice,
      },
      productQuantity,
    );
    if (showAddedToCartNotification === false) {
      setShowAddedToCartNotification(true);
      setTimeout(() => {
        setShowAddedToCartNotification(false);
      }, 4000);
    }
  }

  useEffect(() => {
    if (i18n.language === "en") {
      convertToDollars(coffeePrice)
        .then((coffeePriceInDollar) =>
          setFormattedCoffeePrice(coffeePriceInDollar),
        )
        .catch(() => {
          console.error("Error while trying to convert coffee price");
        });
    } else {
      setFormattedCoffeePrice(`${coffeePrice}`.replace(".", ","));
    }
  }, [formattedCoffeePrice, coffeePrice, i18n.language]);

  return (
    <>
      {showAddedToCartNotification && <AddedToCartNotification />}
      <div className="flex h-full w-full min-w-[15rem] flex-col items-center justify-center gap-3 rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card p-6">
        <div className="-mt-12 flex w-full flex-col items-center text-center ">
          <div className="h-32 w-32">
            <img src={imgSrc} alt="" className="h-full w-full" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1">
            {coffeeTags.map((coffeeTag, index) => (
              <div
                key={index}
                className="mt-3 w-fit items-center justify-center rounded-full bg-product-yellow-light px-2 py-1 text-[0.625rem] font-bold uppercase text-product-yellow-dark"
              >
                <span>{t(`${coffeeTag}Tag`)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h3 className="font-sans-b text-2xl font-bold text-base-subtitle">
            {t(`${id}Name`)}
          </h3>
          <p className="mb-8 mt-2 text-base-label">{t(`${id}Desc`)}</p>
          <div className="flex flex-wrap items-center justify-evenly gap-6">
            <span className="font-sans-b text-2xl font-bold text-base-text">
              <span className="font-sans-r text-sm font-normal">
                {t("currencySymbol")}&nbsp;
              </span>
              {i18n.language === "pt"
                ? `${coffeePrice}`.replace(".", ",")
                : formattedCoffeePrice}
            </span>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-evenly gap-1 rounded-md bg-base-button p-2 text-base">
                <button
                  type="button"
                  className="group rounded-sm outline-none focus:ring-2 focus:ring-product-purple"
                >
                  <Minus
                    size={14}
                    weight="bold"
                    className="text-product-purple transition-colors group-hover:text-product-purple-dark group-focus:text-product-purple-dark"
                    onClick={handleMinusClick}
                  />
                </button>
                <span className="min-w-[1.25rem]">{productQuantity}</span>
                <button
                  type="button"
                  className="group rounded-sm outline-none focus:ring-2 focus:ring-product-purple-dark"
                >
                  <Plus
                    size={14}
                    weight="bold"
                    className="text-product-purple transition-colors group-hover:text-product-purple-dark group-focus:text-product-purple-dark"
                    onClick={handlePlusClick}
                  />
                </button>
              </div>
              <button
                type="button"
                className="group rounded-lg outline-none focus:ring-2 focus:ring-product-purple"
                onClick={handleAddedToCartWithNotification}
              >
                <IconButton.Root
                  color="purpleDark"
                  title={t("goToCheckout")}
                  className="relative cursor-pointer transition-colors hover:bg-product-purple group-focus:bg-product-purple"
                >
                  <IconButton.Inner
                    icon={ShoppingCart}
                    iconSize={22}
                    iconColor="white"
                    iconWeight="fill"
                    textColor="purpleDark"
                  />
                </IconButton.Root>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
