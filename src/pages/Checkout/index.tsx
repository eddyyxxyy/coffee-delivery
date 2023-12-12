import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { useContext, useEffect, useMemo, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { CheckoutCoffeeCard } from "../../components/CheckoutCoffeeCard";
import { IconButton } from "../../components/IconButton";
import { Input } from "../../components/Input";
import { AppContext } from "../../contexts/AppContext";
import { convertToDollars } from "../../utils/convertToDollar";

export function Checkout() {
  const { t, i18n } = useTranslation();
  const { checkoutProducts, handleConfirmOrder } = useContext(AppContext);
  const [selectedPaymentType, setSelectedPaymentType] = useState<
    null | "credit" | "debit" | "money"
  >(null);
  const [formatedCoffeePrice, setformatedCoffeePrice] = useState<
    string | null
  >(null);

  const [city, setCity] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [street, setStreet] = useState<string>("");

  const products = useMemo(
    () => [...checkoutProducts.entries()],
    [checkoutProducts],
  );

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(() =>
      products.reduce(
        (acc, product) => acc + product[1].value * product[1].quantity,
        0,
      ),
    );

    if (i18n.language === "en") {
      convertToDollars(total)
        .then((coffeePriceInDollar) =>
          setformatedCoffeePrice(coffeePriceInDollar),
        )
        .catch(() => {
          console.error("Error while trying to convert coffee price");
        });
    } else {
      setformatedCoffeePrice(`${total}`.replace(".", ","));
    }
  }, [total, products, i18n.language]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{t("homeTitle")}</title>
          <meta name="description" content={t("homeMetaDesc")} />
          <meta
            property="og:title"
            content="Coffee Delivery - Special and Unique | eddyyxxyy"
          />
          <meta
            property="og:description"
            content="Discover Coffee Delivery, our fictitious coffee platform! Get to know our coffees and fall in love with our selection. Try buying coffee with us!"
          />
          <meta name="robots" content="noindex,nofollow"></meta>
          <link rel="canonical" href="https://www.tobeimplemented.com" />
        </Helmet>
      </HelmetProvider>

      <main className="flex-grow overflow-y-auto px-4 pb-24 font-sans-r md:px-14 lg:px-36">
        <form className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-checkoutLg lg:gap-8">
          <div>
            <h2 className="font-sans-b text-lg font-bold text-base-subtitle">
              {t("completeYourOrder")}
            </h2>
            <div className="mt-4 rounded-md bg-base-card p-6 md:p-10">
              <fieldset>
                <legend className="flex items-start gap-2">
                  <MapPinLine
                    size={22}
                    className="min-w-fit text-product-yellow-dark"
                  />
                  <p className="text-base text-base-subtitle">
                    {t("shippingAddress")}
                    <span className="block text-sm text-base-text">
                      {t("shippingAddressDesc")}
                    </span>
                  </p>
                </legend>
                <div className="mt-8 flex flex-col gap-4">
                  <div className="md:w-[35%]">
                    <Input
                      placeholder={t("zipCode")}
                      type="number"
                      disabled={!products.length}
                      minLength={i18n.language === "en" ? 5 : 8}
                      maxLength={i18n.language === "en" ? 9 : 8}
                      required
                    />
                  </div>
                  <Input
                    placeholder={t("streetAddress")}
                    type="text"
                    minLength={5}
                    required
                    disabled={!products.length}
                    onChange={(e) => setStreet(e.target.value)}
                  />
                  <div className="flex flex-col items-center gap-3 md:flex-row">
                    <div className="w-full md:w-[56%]">
                      <Input
                        placeholder={t("houseNumber")}
                        type="number"
                        min={0}
                        required
                        disabled={!products.length}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder={t("addressComplement")}
                        type="text"
                        disabled={!products.length}
                        optionalText={t("optionalFieldText")}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3 md:flex-row">
                    <div className="w-full md:w-[56%]">
                      <Input
                        placeholder={t("neighbourhood")}
                        type="text"
                        required
                        disabled={!products.length}
                        onChange={(e) => setNeighborhood(e.target.value)}
                      />
                    </div>
                    <div className="flex w-full flex-col items-center gap-3 md:flex-row">
                      <div className="w-full md:w-[80%]">
                        <Input
                          placeholder={t("city")}
                          type="text"
                          required
                          disabled={!products.length}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div className="w-full md:w-[20%]">
                        <Input
                          placeholder={t("state")}
                          type="text"
                          maxLength={2}
                          required
                          disabled={!products.length}
                          onChange={(e) => setState(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="mt-3 rounded-md bg-base-card p-8 md:p-10">
              <fieldset>
                <legend className="flex items-start gap-2">
                  <CurrencyDollar
                    size={22}
                    className="min-w-fit text-product-purple-dark"
                  />
                  <p className="text-base text-base-subtitle">
                    {t("paymentSectionHeader")}
                    <span className="block text-sm text-base-text">
                      {t("paymentSectionDesc")}
                    </span>
                  </p>
                </legend>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    className="group max-w-[14rem] flex-grow outline-none"
                    onClick={() => setSelectedPaymentType("credit")}
                    disabled={!products.length}
                  >
                    <IconButton.Root
                      color="button"
                      className="items-center justify-center gap-3 p-4 uppercase transition-all group-hover:bg-base-hover group-hover:text-base-subtitle group-focus:ring-2 group-focus:ring-product-purple"
                      selected={selectedPaymentType === "credit"}
                    >
                      <IconButton.Inner
                        icon={CreditCard}
                        iconSize={16}
                        iconColor="purple"
                        iconWeight="regular"
                        text={t("creditPaymentType")}
                        textColor="base"
                      />
                    </IconButton.Root>
                  </button>
                  <button
                    type="button"
                    className="group max-w-[14rem] flex-grow outline-none"
                    onClick={() => setSelectedPaymentType("debit")}
                    disabled={!products.length}
                  >
                    <IconButton.Root
                      color="button"
                      className="items-center justify-center gap-3 p-4 uppercase transition-all group-hover:bg-base-hover group-hover:text-base-subtitle group-focus:ring-2 group-focus:ring-product-purple"
                      selected={selectedPaymentType === "debit"}
                    >
                      <IconButton.Inner
                        icon={Bank}
                        iconSize={16}
                        iconColor="purple"
                        iconWeight="regular"
                        text={t("debitPaymentType")}
                        textColor="base"
                      />
                    </IconButton.Root>
                  </button>
                  <button
                    type="button"
                    className="group max-w-[14rem] flex-grow outline-none"
                    onClick={() => setSelectedPaymentType("money")}
                    disabled={!products.length}
                  >
                    <IconButton.Root
                      color="button"
                      className="items-center justify-center gap-3 p-4 uppercase transition-all group-hover:bg-base-hover group-hover:text-base-subtitle group-focus:ring-2 group-focus:ring-product-purple"
                      selected={selectedPaymentType === "money"}
                    >
                      <IconButton.Inner
                        icon={Money}
                        iconSize={16}
                        iconColor="purple"
                        iconWeight="regular"
                        text={t("cashPaymentType")}
                        textColor="base"
                      />
                    </IconButton.Root>
                  </button>
                </div>
              </fieldset>
            </div>
          </div>
          <div>
            <h2 className="font-sans-b text-lg font-bold text-base-subtitle">
              {t("selectedCoffees")}
            </h2>
            <div className="mt-4 space-y-6 rounded-md rounded-bl-[3rem] rounded-tr-[3rem] bg-base-card p-8 md:p-10">
              {products.length ? (
                <>
                  <ul className="space-y-6">
                    {products.map((product) => (
                      <li key={product[0]} className="border-b pb-6">
                        <CheckoutCoffeeCard
                          productNameId={product[0]}
                          imgUrl={product[1].imageUrl}
                          price={product[1].value}
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <p className="flex items-center justify-between">
                      {t("totalOfItems")}
                      <span>
                        {t("currencySymbol")}{" "}
                        {i18n.language === "pt"
                          ? `${total}`.replace(".", ",")
                          : formatedCoffeePrice}
                      </span>
                    </p>
                    <p className="flex items-center justify-between">
                      {t("shippingTotal")}
                      <span>
                        {t("currencySymbol")}{" "}
                        {i18n.language === "pt"
                          ? `${3.5}`.replace(".", ",").padEnd(4, "0")
                          : `${3.5}`.padEnd(4, "0")}
                      </span>
                    </p>
                    <p className="flex items-center justify-between text-xl font-bold">
                      Total
                      <span>
                        {t("currencySymbol")}{" "}
                        {i18n.language === "pt"
                          ? `${total + 3.5}`.replace(".", ",").padEnd(4, "0")
                          : `${Number(formatedCoffeePrice) + 3.5}`.padEnd(
                              4,
                              "0",
                            )}
                      </span>
                    </p>
                  </div>
                  <Link
                    to="/success"
                    className="block w-full rounded-md bg-product-yellow py-3 text-center text-sm font-bold uppercase text-base-white"
                    onClick={(event) => {
                      if (selectedPaymentType === null) {
                        alert(t("selectPaymentType"));
                        event.preventDefault();
                      } else if (
                        !(city && neighborhood && number && state && street)
                      ) {
                        alert(t("fillAllFieldsToConfirm"));
                        event.preventDefault();
                      } else {
                        handleConfirmOrder({
                          address: {
                            city,
                            neighborhood,
                            number,
                            state,
                            street,
                          },
                          paymentType: selectedPaymentType,
                        });
                      }
                    }}
                  >
                    {t("confirmOrder")}
                  </Link>
                </>
              ) : (
                <h3>{t("noProductsInCheckout")}</h3>
              )}
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
