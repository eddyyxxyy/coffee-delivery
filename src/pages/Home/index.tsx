import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";

export function Home() {
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
          <link rel="canonical" href="https://www.tobeimplemented.com" />
        </Helmet>
      </HelmetProvider>

      <main className="flex-grow overflow-y-auto">
        <h1>Home Page</h1>
      </main>
    </>
  );
}
