import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);

  const changeLanguage = (): void => {
    const switchedLang = lang === "pt" ? "en" : "pt";
    i18n
      .changeLanguage(switchedLang)
      .then(() => setLang(switchedLang))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <header>{t("headerTest")}</header>
      <button className="border-2 border-sky-500 p-2" onClick={changeLanguage}>
        Change language
      </button>
      {<Outlet />}
    </>
  );
}
