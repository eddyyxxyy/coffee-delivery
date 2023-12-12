import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import successPageDeliveryGuy from "../../assets/success-page-delivery-guy.svg";
import { AppContext } from "../../contexts/AppContext";

export function Success() {
  const { orderInfo } = useContext(AppContext);
  const { t } = useTranslation();

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
        <div className="px-4 pt-7 md:pt-14 lg:pt-20">
          <h1 className="font-sans-b text-2xl font-extrabold text-product-yellow-dark md:text-3xl lg:text-[2rem]">
            {t("orderConfirmedWithSuccess")}
          </h1>
          <p className="mb-10 mt-1 text-base text-base-subtitle md:text-xl">
            {t("orderConfirmedWithSuccessSubtitle")}
          </p>
          <div className="grid grid-cols-1 gap-y-9 md:gap-y-16 lg:grid lg:grid-cols-2 lg:gap-x-24">
            <div className="grid grid-rows-3 gap-y-8">
              <div className="flex items-center gap-3"></div>
            </div>
            <div>
              <img src={successPageDeliveryGuy} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
