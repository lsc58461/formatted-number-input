import { useRef, useState } from "react";
import useFormattedNumber from "../hooks/useFormattedNumber";
import FormattedNumberInput from "./FormattedNumberInput";

function FormattedNumber() {
  const { value, handleValueChange, formatNumber } = useFormattedNumber();
  const [isCopied, setIsCopied] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clipboardCallback = () => {
    setIsCopied(true);

    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      setIsCopied(false);
    }, 2000);
  };

  const handleClipboardWrite = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    navigator.clipboard.writeText(formatNumber(value)).then(clipboardCallback);
  };

  return (
    <div className="relative">
      <FormattedNumberInput value={value} onValueChange={handleValueChange} />
      <div className="mt-8pxr w-300pxr rounded-md border border-gray-300 px-8pxr py-12pxr">
        <div className="flex items-end justify-between">
          <h1 className="text-20pxr font-semibold text-gray-800">
            Formatted Number
          </h1>
          <p className="text-12pxr font-medium text-gray-600">클릭시 복사</p>
        </div>
        <button
          className="word-break mt-4pxr h-full min-h-44pxr w-full break-all rounded-md bg-gray-800 px-8pxr py-10pxr font-medium text-gray-50 transition-all duration-150 focus:outline-none active:scale-105 active:shadow-2xl"
          type="button"
          onClick={handleClipboardWrite}
        >
          {formatNumber(value)}
        </button>
        <p
          className={`absolute -bottom-40pxr right-8pxr text-right text-12pxr font-medium text-cyan-500 transition-all duration-200 ease-in-out ${isCopied ? "opacity-100" : "opacity-0"}`}
        >
          복사 성공
          <br />
          봐주셔서 감사합니다 !
        </p>
      </div>
    </div>
  );
}

export default FormattedNumber;
