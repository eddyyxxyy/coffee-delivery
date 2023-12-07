import { createContext, ReactNode, useEffect, useState } from "react";

import { CoffeeCardProps } from "../components/CoffeeCard";

interface IAppContextData {
  checkoutProducts: Map<string, number>;
  quantity: number;
  handleAddToCart: (product: CoffeeCardProps, quantity: number) => void;
}

interface IAppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<IAppContextData>(
  {} as IAppContextData,
);

export function AppContextProvider({ children }: IAppContextProviderProps) {
  const [checkoutProducts, setCheckoutProducts] = useState<
    Map<string, number>
  >(() => {
    const productsFromStorageJSON = localStorage.getItem(
      "@coffee-delivery:selectedProducts",
    );

    if (productsFromStorageJSON !== null) {
      const parsedProductsFromStorage = new Map(
        JSON.parse(productsFromStorageJSON) as Map<string, number>,
      );

      return parsedProductsFromStorage;
    }

    return new Map();
  });

  function handleAddToCart(product: CoffeeCardProps, quantity: number): void {
    setCheckoutProducts((prevCheckoutProducts) => {
      const newCheckoutProducts = new Map(prevCheckoutProducts);

      const currentQuantity =
        (newCheckoutProducts.get(product.id) ?? 0) + quantity;

      newCheckoutProducts.set(product.id, currentQuantity);

      localStorage.setItem(
        "@coffee-delivery:selectedProducts",
        JSON.stringify(Array.from(newCheckoutProducts.entries())),
      );

      return newCheckoutProducts;
    });
  }

  useEffect(() => {
    const productsFromStorageJSON = localStorage.getItem(
      "@coffee-delivery:selectedProducts",
    );

    if (productsFromStorageJSON !== null) {
      const parsedProductsFromStorage = new Map(
        JSON.parse(productsFromStorageJSON) as Map<string, number>,
      );

      setCheckoutProducts(parsedProductsFromStorage);
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        checkoutProducts,
        quantity: Array.from(checkoutProducts.values()).reduce(
          (acc, quantity) => acc + quantity,
          0,
        ),
        handleAddToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
