import { Icon } from "@phosphor-icons/react";
import { tv, VariantProps } from "tailwind-variants";

const iconVariants = tv({
  variants: {
    iconColor: {
      purple: "text-product-purple",
      yellowDark: "text-product-yellow-dark",
    },
    iconWeight: {
      thin: "thin",
      light: "light",
      regular: "regular",
      bold: "bold",
      fill: "fill",
      duotone: "duotone",
    },
  },
});

const textVariants = tv({
  variants: {
    textColor: {
      yellowDark: "text-product-purple-dark",
    },
  },
});

export type InnerProps = {
  icon: Icon;
  iconSize: number;
  text: string;
  textColor: string;
} & VariantProps<typeof iconVariants> &
  VariantProps<typeof textVariants>;

export function Inner({
  icon: IconProp,
  iconColor,
  iconSize,
  iconWeight,
  text,
  textColor,
}: InnerProps) {
  return (
    <>
      <IconProp
        size={iconSize}
        weight={iconVariants({ iconWeight })}
        className={iconVariants({ iconColor })}
      />
      <span className={textVariants({ textColor })}>{text}</span>
    </>
  );
}
