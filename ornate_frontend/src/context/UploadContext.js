import { createContext, useReducer } from "react";

export const UploadContext = createContext();

export const uploadReducer = (state, action) => {
  switch (action.type) {
    case "UPLOAD":
      return { uploads: action.payload };
    case "POST":
      return { uploads: [action.payload, ...state.uploads] };
    case "DELETE":
      return { uploads: state.uploads.filter((upload)=>upload._id !== action.payload._id) }
    default:
      return state;
  }
};

export const UploadContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uploadReducer, {
    uploads: null,
  });

  return (
    <UploadContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UploadContext.Provider>
  );
};
