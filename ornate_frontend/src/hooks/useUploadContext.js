import { UploadContext } from "../context/UploadContext";
import { useContext } from "react";

export const useUploadContext = () => {
  const context = useContext(UploadContext);

  if (!context) {
    throw Error(
      "useUploadContext is to be used inside a UploadContextProvider"
    );
  }
  return context;
};
