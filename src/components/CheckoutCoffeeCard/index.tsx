import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { AppContext } from "../../contexts/AppContext";
import { convertToDollars } from "../../utils/convertToDollar";
import { IconButton } from "../IconButton";

export interface CheckoutCoffeeCardProps {
  productNameId: string;
  imgUrl: string;
  price: number;
}

export function CheckoutCoffeeCard({
  productNameId,
  imgUrl,
  price,
}: CheckoutCoffeeCardProps) {
  const { updateProductQuantity, checkoutProducts } = useContext(AppContext);
  const { t, i18n } = useTranslation();

  const [formatedCoffeePrice, setformatedCoffeePrice] = useState<
    string | null
  >(null);

  const productData = checkoutProducts.get(productNameId) ?? { quantity: 0 };

  function handleMinusClick() {
    if (productData.quantity > 1) {
      updateProductQuantity(productNameId, productData.quantity - 1);
    }
  }

  function handlePlusClick() {
    if (productData.quantity < 25) {
      updateProductQuantity(productNameId, productData.quantity + 1);
    }
  }

  function handleRemoveClick() {
    if (productData.quantity) {
      updateProductQuantity(productNameId, 0);
    }
  }

  useEffect(() => {
    const realPrice = price * productData.quantity;
    if (i18n.language === "en") {
      convertToDollars(realPrice)
        .then((coffeePriceInDollar) =>
          setformatedCoffeePrice(coffeePriceInDollar),
        )
        .catch(() => {
          console.error("Error while trying to convert coffee price");
        });
    } else {
      setformatedCoffeePrice(`${realPrice}`.replace(".", ","));
    }
  }, [formatedCoffeePrice, price, productData.quantity, i18n.language]);

  return (
    <div className="w-full px-1 py-2 md:max-w-full">
      <div className="flex flex-wrap items-start justify-evenly gap-x-12 gap-y-8 md:justify-between">
        <div className="flex items-center gap-5">
          <div className="h-16 w-16">
            <img src={imgUrl} alt="" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base text-base-subtitle">
              {t(productNameId + "Name")}
            </h3>
            <div className="flex items-center gap-2">
              <div className="flex max-w-fit items-center justify-evenly gap-1 rounded-md bg-base-button p-2 text-center text-base">
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
                <span className="min-w-[1.25rem]">{productData.quantity}</span>
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
                className="group"
                onClick={handleRemoveClick}
              >
                <IconButton.Root
                  color="button"
                  className="items-center justify-center gap-3 p-2 uppercase text-base-text transition-all group-hover:bg-base-hover group-hover:text-base-subtitle group-focus:ring-2 group-focus:ring-product-purple"
                >
                  <IconButton.Inner
                    icon={Trash}
                    iconSize={16}
                    text="Remover"
                    iconColor="purple"
                    iconWeight="bold"
                  />
                </IconButton.Root>
              </button>
            </div>
          </div>
        </div>
        <span className="font-sans-b text-2xl font-bold text-base-text">
          <span className="font-sans-r text-sm font-normal">
            {t("currencySymbol")}&nbsp;
          </span>
          {i18n.language === "pt"
            ? `${(price * productData.quantity).toFixed(2)}`.replace(".", ",")
            : formatedCoffeePrice}
        </span>
      </div>
    </div>
  );
}
