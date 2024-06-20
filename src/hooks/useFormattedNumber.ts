import { ChangeEvent, useState } from "react";

function useFormattedNumber() {
  const [value, setValue] = useState<string | null>(null);

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setValue(value);
    }
  };

  const formatNumber = (value: string | null) => {
    if (!value) return "";

    const [integer, decimal] = value.toString().split(".");
    const formattedInteger =
      integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
      (decimal ? `.${decimal}` : "");

    return formattedInteger;
  };
  return { value, handleValueChange, formatNumber };
}

export default useFormattedNumber;
