import { createContext, ReactNode, useState } from "react";

import { CoffeeCardProps } from "../components/CoffeeCard";

interface IProducts {
  quantity: number;
  product: string;
  total: number;
}

interface IAppContextData {
  checkoutProducts: IProducts[];
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
  const [checkoutProducts, setCheckoutProducts] = useState<IProducts[]>([]);
  const [productQuantity, setProductQuantity] = useState<number>(0);

  function handleAddToCart(product: CoffeeCardProps, quantity: number): void {
    const newCheckoutProducts = [
      ...checkoutProducts,
      {
        quantity,
        product: JSON.stringify(product),
        total: product.coffeePrice * quantity,
      },
    ];

    setCheckoutProducts(newCheckoutProducts);
    setProductQuantity((prevState) => prevState + quantity);
  }

  return (
    <AppContext.Provider
      value={{ checkoutProducts, quantity: productQuantity, handleAddToCart }}
    >
      {children}
    </AppContext.Provider>
  );
}
