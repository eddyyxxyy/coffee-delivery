import { Icon, IconWeight } from "@phosphor-icons/react";
import { tv, VariantProps } from "tailwind-variants";

const iconVariants = tv({
  variants: {
    iconColor: {
      purple: "text-product-purple",
      yellowDark: "text-product-yellow-dark",
      white: "text-base-white",
    },
    iconWeight: {
      fill: "fill",
      thin: "thin",
      light: "light",
      bold: "bold",
      regular: "regular",
      duotone: "duotone",
    },
  },
});

const textVariants = tv({
  variants: {
    textColor: {
      purple: "text-product-purple",
      purpleLight: "text-product-purple-light",
      purpleDark: "text-product-purple-dark",
      yellow: "text-product-yellow",
      yellowLight: "text-product-yellow-light",
      yellowDark: "text-product-yellow-dark",
    },
  },
});

export type InnerProps = {
  icon: Icon;
  iconSize: number;
  text?: string | undefined;
  productsCount?: number | undefined;
} & VariantProps<typeof iconVariants> &
  VariantProps<typeof textVariants>;

export function Inner({
  icon: IconProp,
  iconColor,
  iconSize,
  iconWeight,
  text,
  textColor,
  productsCount,
}: InnerProps) {
  return (
    <>
      <IconProp
        size={iconSize}
        weight={iconVariants({ iconWeight }) as IconWeight}
        className={iconVariants({ iconColor })}
      />
      {text && <span className={textVariants({ textColor })}>{text}</span>}
      {productsCount && (
        <div className="absolute -right-1.5 -top-1.5 flex max-h-5 max-w-[1.5rem] items-center justify-center truncate rounded-full bg-product-yellow-dark px-1 text-xs font-bold text-base-white">
          {productsCount > 99 ? "99+" : productsCount}
        </div>
      )}
    </>
  );
}
