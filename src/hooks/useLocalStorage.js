import { useState, useEffect } from "react";

function useLocalStorage(valueName, initialValue) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [value, setValues] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageValue = localStorage.getItem(valueName);
        let parsedValue;

        if (!localStorageValue) {
          localStorage.setItem(valueName, JSON.stringify(initialValue));
          parsedValue = initialValue;
        } else {
          parsedValue = JSON.parse(localStorageValue);
        }

        setValues(parsedValue);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  const saveValue = (newValue) => {
    try {
      const stringifiedValue = JSON.stringify(newValue);
      localStorage.setItem(valueName, stringifiedValue);
      setValues(newValue);
    } catch (error) {
      setError(error);
    }
  };

  return { value, saveValue, loading, error };
}

export { useLocalStorage };
