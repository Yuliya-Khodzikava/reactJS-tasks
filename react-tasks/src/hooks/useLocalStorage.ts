import { useCallback, useState, useEffect } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];

export const useLocalStorage: UseLocalStorage = function(key) {
  const [value, setItem] = useState(key);

  useEffect(()=>{
      localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  const removeItem = useCallback(() => {
      localStorage.clear()
  }, [])

  return [value, { setItem, removeItem }]
}