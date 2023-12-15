import { ComponentProps } from "react";

export type TInputProps = ComponentProps<"input"> & {
  optionalText?: string;
};

export function Input({ optionalText, className, ...props }: TInputProps) {
  return (
    <div className="flex items-center gap-1 rounded-[0.25rem] border border-base-button bg-base-input p-3 text-base-text focus-within:ring-1 focus-within:ring-product-yellow-dark">
      <input
        className={className + " w-full bg-base-input outline-none"}
        {...props}
      />
      {optionalText && (
        <span className="text-xs italic text-base-label">{optionalText}</span>
      )}
    </div>
  );
}
