import { useRef } from "react";

export const useFocus = () => {
  const htmlElRef = useRef<HTMLInputElement>(null);

  const setFocus = () => {
    if (htmlElRef?.current?.focus) htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus] as const;
};
