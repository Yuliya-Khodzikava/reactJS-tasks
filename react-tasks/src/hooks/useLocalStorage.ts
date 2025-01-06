import { useState, useEffect } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setValue: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  },
];

function getValueStorage(key: LocalStorageSetValue): LocalStorageReturnValue {
  const item = localStorage.getItem(key);
  return item === null ? null : JSON.parse(item);
}

export const useLocalStorage: UseLocalStorage = function(key) {
  const [value, setItem] = useState<LocalStorageReturnValue>(()=>
    getValueStorage(key)
  );

  const removeItem = (): void => {
    localStorage.removeItem(key);
    setItem(null);
  };

  const setValue = (value: LocalStorageSetValue): void => {
    setItem(value);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, { setValue, removeItem }];
}