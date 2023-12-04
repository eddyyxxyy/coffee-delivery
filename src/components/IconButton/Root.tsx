import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const rootDiv = tv({
  base: "rounded-md p-2 font-sans-r text-sm flex items-center gap-1",
  variants: {
    color: {
      purple: "bg-product-purple",
      purpleLight: "bg-product-purple-light",
      purpleDark: "bg-product-purple-dark",
      yellow: "bg-product-yellow",
      yellowLight: "bg-product-yellow-light",
      yellowDark: "bg-product-yellow-dark",
    },
  },
});

export type RootProps = VariantProps<typeof rootDiv> & ComponentProps<"div">;

export function Root({ className, color, ...props }: RootProps) {
  return <div {...props} className={rootDiv({ color, className })} />;
}
