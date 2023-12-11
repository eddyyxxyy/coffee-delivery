import { createContext, ReactNode, useState } from "react";

import { CoffeeCardProps } from "../components/CoffeeCard";

interface IAppContextData {
  checkoutProducts: Map<
    string,
    { quantity: number; imageUrl: string; value: number }
  >;
  quantity: number;
  orderInfo: IOrderInfo | null;
  handleAddToCart: (product: CoffeeCardProps, quantity: number) => void;
  updateProductQuantity: (productId: string, newQuantity: number) => void;
  handleConfirmOrder: (orderInfo: IOrderInfo) => void;
}

interface IAppContextProviderProps {
  children: ReactNode;
}

interface IOrderInfo {
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  paymentType: string;
}

export const AppContext = createContext<IAppContextData>(
  {} as IAppContextData,
);

export function AppContextProvider({ children }: IAppContextProviderProps) {
  const [checkoutProducts, setCheckoutProducts] = useState<
    Map<string, { quantity: number; imageUrl: string; value: number }>
  >(() => {
    const productsFromStorageJSON = localStorage.getItem(
      "@coffee-delivery:selectedProducts",
    );

    if (productsFromStorageJSON !== null) {
      const parsedProductsFromStorage = new Map(
        JSON.parse(productsFromStorageJSON) as Map<
          string,
          { quantity: number; imageUrl: string; value: number }
        >,
      );

      return parsedProductsFromStorage;
    }

    return new Map();
  });

  const [orderInfo, setOrderInfo] = useState<null | IOrderInfo>(null);

  function handleAddToCart(product: CoffeeCardProps, quantity: number): void {
    setCheckoutProducts((prevCheckoutProducts) => {
      const newCheckoutProducts = new Map(prevCheckoutProducts);

      const currentProduct = newCheckoutProducts.get(product.id);
      const currentQuantity = (currentProduct?.quantity ?? 0) + quantity;

      newCheckoutProducts.set(product.id, {
        quantity: currentQuantity,
        imageUrl: product.imgSrc,
        value: product.coffeePrice,
      });

      localStorage.setItem(
        "@coffee-delivery:selectedProducts",
        JSON.stringify(Array.from(newCheckoutProducts.entries())),
      );

      return newCheckoutProducts;
    });
  }

  function handleConfirmOrder(orderInfo: IOrderInfo) {
    setOrderInfo(orderInfo);
    setCheckoutProducts(new Map());
    localStorage.removeItem("@coffee-delivery:selectedProducts");
  }

  function updateProductQuantity(
    productId: string,
    newQuantity: number,
  ): void {
    setCheckoutProducts((prevCheckoutProducts) => {
      const newCheckoutProducts = new Map(prevCheckoutProducts);

      if (newQuantity <= 0) {
        newCheckoutProducts.delete(productId);
      } else {
        const updatedProduct = newCheckoutProducts.get(productId);
        if (updatedProduct) {
          updatedProduct.quantity = newQuantity;
          newCheckoutProducts.set(productId, updatedProduct);
        }
      }

      localStorage.setItem(
        "@coffee-delivery:selectedProducts",
        JSON.stringify(Array.from(newCheckoutProducts.entries())),
      );

      return newCheckoutProducts;
    });
  }

  return (
    <AppContext.Provider
      value={{
        checkoutProducts,
        quantity: Array.from(checkoutProducts.values()).reduce(
          (acc, product) => acc + product.quantity,
          0,
        ),
        orderInfo,
        handleAddToCart,
        updateProductQuantity,
        handleConfirmOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
