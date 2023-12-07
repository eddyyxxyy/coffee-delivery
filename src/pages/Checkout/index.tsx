import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import { IconButton } from "../../components/IconButton";
import { Input } from "../../components/Input";

export function Checkout() {
  const { t, i18n } = useTranslation();
  const [selectedPaymentType, setSelectedPaymentType] = useState<
    null | "credit" | "debit" | "money"
  >(null);

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
              Complete seu pedido
            </h2>
            <div className="mt-4 rounded-md bg-base-card p-6 md:p-10">
              <fieldset>
                <legend className="flex items-start gap-2">
                  <MapPinLine
                    size={22}
                    className="min-w-fit text-product-yellow-dark"
                  />
                  <p className="text-base text-base-subtitle">
                    Endereço de Entrega
                    <span className="block text-sm text-base-text">
                      Informe o endereço onde deseja receber seu pedido
                    </span>
                  </p>
                </legend>
                <div className="mt-8 flex flex-col gap-4">
                  <div className="md:w-[35%]">
                    <Input
                      placeholder="CEP"
                      type="number"
                      min={i18n.language === "en" ? 5 : 8}
                      max={i18n.language === "en" ? 9 : 8}
                      required
                    />
                  </div>
                  <Input
                    placeholder="Rua"
                    type="text"
                    minLength={5}
                    required
                  />
                  <div className="flex flex-col items-center gap-3 md:flex-row">
                    <div className="w-full md:w-[56%]">
                      <Input
                        placeholder="Número"
                        type="number"
                        min={0}
                        required
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        placeholder="Complemento"
                        type="text"
                        optionalText="Opcional"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3 md:flex-row">
                    <div className="w-full md:w-[56%]">
                      <Input placeholder="Bairro" type="text" required />
                    </div>
                    <div className="flex w-full flex-col items-center gap-3 md:flex-row">
                      <div className="w-full md:w-[80%]">
                        <Input placeholder="Cidade" type="text" required />
                      </div>
                      <div className="w-full md:w-[20%]">
                        <Input
                          placeholder="UF"
                          type="text"
                          maxLength={2}
                          required
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
                    Pagamento
                    <span className="block text-sm text-base-text">
                      O pagamento é feito na entrega. Escolha a forma que
                      deseja pagar
                    </span>
                  </p>
                </legend>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    className="group max-w-[14rem] flex-grow outline-none"
                    onClick={() => setSelectedPaymentType("credit")}
                  >
                    <IconButton.Root
                      color="button"
                      className="items-center justify-center gap-3 p-4 transition-all group-hover:bg-base-hover group-hover:text-base-subtitle group-focus:ring-2 group-focus:ring-product-purple"
                      selected={selectedPaymentType === "credit"}
                    >
                      <IconButton.Inner
                        icon={CreditCard}
                        iconSize={16}
                        iconColor="purple"
                        iconWeight="regular"
                        text="CARTÃO DE CRÉDITO"
                        textColor="base"
                      />
                    </IconButton.Root>
                  </button>
                  <button
                    type="button"
                    className="group max-w-[14rem] flex-grow outline-none"
                    onClick={() => setSelectedPaymentType("debit")}
                  >
                    <IconButton.Root
                      color="button"
                      className="items-center justify-center gap-3 p-4 transition-all group-hover:bg-base-hover group-hover:text-base-subtitle group-focus:ring-2 group-focus:ring-product-purple"
                      selected={selectedPaymentType === "debit"}
                    >
                      <IconButton.Inner
                        icon={Bank}
                        iconSize={16}
                        iconColor="purple"
                        iconWeight="regular"
                        text="CARTÃO DE DÉBITO"
                        textColor="base"
                      />
                    </IconButton.Root>
                  </button>
                  <button
                    type="button"
                    className="group max-w-[14rem] flex-grow outline-none"
                    onClick={() => setSelectedPaymentType("money")}
                  >
                    <IconButton.Root
                      color="button"
                      className="items-center justify-center gap-3 p-4 transition-all group-hover:bg-base-hover group-hover:text-base-subtitle group-focus:ring-2 group-focus:ring-product-purple"
                      selected={selectedPaymentType === "money"}
                    >
                      <IconButton.Inner
                        icon={Money}
                        iconSize={16}
                        iconColor="purple"
                        iconWeight="regular"
                        text="DINHEIRO"
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
              Cafés selecionados
            </h2>
            <div className="mt-4 rounded-md bg-base-card p-8 md:p-10">
              <button type="button">Testing</button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
