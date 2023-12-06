import { ComponentProps } from "react";

export type IInputProps = ComponentProps<"input"> & {
  wrapperClassName: string;
  optionalText?: string;
};

export function Input({
  wrapperClassName,
  optionalText,
  ...props
}: IInputProps) {
  return (
    <div className={`${wrapperClassName} box-border max-w-full`}>
      <input {...props} />
      {optionalText && (
        <span className="text-xs italic text-base-label">{optionalText}</span>
      )}
    </div>
  );
}
