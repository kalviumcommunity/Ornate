import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const register = async (name, email, password, confirmpassword) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      `${process.env.REACT_APP_API}/api/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, confirmpassword }),
      }
    );
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // Saving user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // Updating Auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };
  return {
    register,
    isLoading,
    error,
  };
};
