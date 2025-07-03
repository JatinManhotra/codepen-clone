import React, { createContext, useState } from "react";

export const NewCodepenContext = createContext(null);

const NewCodepenState = ({ children }) => {
  const [html, setHTML] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJS] = useState("");

  return (
    <NewCodepenContext.Provider
      value={{ html, setHTML, css, setCSS, js, setJS }}
    >
      {children}
    </NewCodepenContext.Provider>
  );
};

export default NewCodepenState;
