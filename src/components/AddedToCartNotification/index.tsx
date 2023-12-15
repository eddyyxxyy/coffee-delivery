import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function AddedToCartNotification() {
  const { t } = useTranslation();
  const [renderComponent, setRenderComponent] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setRenderComponent(false);
    }, 5000);
  }, [renderComponent]);

  if (!renderComponent) {
    return null;
  }

  return (
    <Link
      to="/checkout"
      onClick={() => setRenderComponent(false)}
      className="absolute right-2 top-20 z-30 animate-downFadeAndBack cursor-pointer rounded-md bg-green-500 px-4 py-2 md:right-4 md:top-24 md:px-6 md:py-3 lg:right-8 lg:top-28"
    >
      <span className="font-sans-b text-xs text-base-white md:text-lg">
        {t("addedToCartNotification")}
      </span>
    </Link>
  );
}
