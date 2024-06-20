import { ChangeEvent } from "react";

interface IFormattedNumberInputProps {
  value: string | null;
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormattedNumberInput({
  value,
  onValueChange,
}: IFormattedNumberInputProps) {
  return (
    <input
      className="w-300pxr rounded-md border border-gray-300 px-8pxr py-12pxr focus:outline-none focus:ring-2 focus:ring-cyan-400"
      placeholder="숫자를 입력해 주세요. *소수점 가능"
      value={value || ""}
      onChange={onValueChange}
    />
  );
}

export default FormattedNumberInput;
