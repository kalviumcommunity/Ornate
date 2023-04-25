import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {

    // removing element from session storage
    sessionStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
