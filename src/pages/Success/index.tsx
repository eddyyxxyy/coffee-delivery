import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import successPageDeliveryGuy from "../../assets/success-page-delivery-guy.svg";
import { AppContext } from "../../contexts/AppContext";

export function Success() {
  const { orderInfo } = useContext(AppContext);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (orderInfo === null) {
      navigate("/");
    }
  }, [orderInfo, navigate]);

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
          <link
            rel="canonical"
            href="https://coffee-delivery-eddyyxxyy.vercel.app/"
          />
        </Helmet>
      </HelmetProvider>

      <main className="flex-grow overflow-y-auto px-4 pb-24 font-sans-r md:px-14 lg:px-36">
        <div className="flex flex-col items-center px-4 pt-7 md:pt-14 lg:block lg:pt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-24">
            <div>
              <h1 className="font-sans-b text-2xl font-extrabold text-product-yellow-dark md:text-3xl lg:text-[2rem]">
                {t("orderConfirmedWithSuccess")}
              </h1>
              <p className="mb-10 mt-1 text-base text-base-subtitle md:text-xl">
                {t("orderConfirmedWithSuccessSubtitle")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-9 md:gap-y-16 lg:grid lg:grid-cols-2 lg:gap-x-24">
            <div className="relative rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] p-10">
              <div
                className="absolute -inset-px rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-gradient-to-r from-yellow-400 to-pink-400"
                aria-hidden="true"
              ></div>
              <div
                className="absolute inset-0 rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-base-bg"
                aria-hidden="true"
              ></div>
              <div className="relative z-10 flex h-full flex-col items-center justify-between gap-8 md:items-start">
                <div className="flex w-full flex-col items-center justify-center gap-3 text-base-text md:flex-row">
                  <div className="w-fit rounded-full bg-product-purple p-2">
                    <MapPin size={16} weight="fill" className="text-white" />
                  </div>
                  <p className="w-full text-center md:text-left">
                    {t("shippingIn")}{" "}
                    <span className="font-bold">
                      {orderInfo?.address.street}, {orderInfo?.address.number}
                    </span>
                    <span className="block">
                      {orderInfo?.address.neighborhood} -{" "}
                      {orderInfo?.address.city}, {orderInfo?.address.state}
                    </span>
                  </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-3 text-base-text md:flex-row">
                  <div className="w-fit rounded-full bg-product-yellow p-2">
                    <Timer size={16} weight="fill" className="text-white" />
                  </div>
                  <p className="w-full text-center md:text-left">
                    {t("estimatedWait")}
                    <span className="block font-bold">20 min - 30 min</span>
                  </p>
                </div>
                <div className="flex w-full flex-col items-center justify-center gap-3 text-base-text md:flex-row">
                  <div className="w-fit rounded-full bg-product-yellow-dark p-2">
                    <CurrencyDollar
                      size={16}
                      weight="bold"
                      className="text-white"
                    />
                  </div>
                  <p className="w-full text-center md:text-left">
                    {t("paymentOnDeliverySuccessPage")}
                    <span className="block font-bold">
                      {t(`${orderInfo?.paymentType}PaymentSuccessMessage`)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="max-h-72">
              <img
                src={successPageDeliveryGuy}
                alt=""
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
