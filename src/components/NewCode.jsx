import { Box, styled } from "@mui/material";
import React, { useContext } from "react";
import NewEditor from "./NewEditor";
import { NewCodepenContext } from "../context/NewContext";

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`;

const NewCode = () => {
  const { html, setHTML, css, setCSS, js, setJS } =
    useContext(NewCodepenContext);
  return (
    <Container>
      <NewEditor
        language="xml"
        heading="HTML"
        icon="/"
        value={html}
        onChange={setHTML}
        color='#FF3C41'
      />
      <NewEditor
        language="css"
        heading="CSS"
        icon="*"
        value={css}
        onChange={setCSS}
         color='#0EBEFF'
      />
      <NewEditor
        language="js"
        heading="Javascript"
        icon="{}"
        value={js}
        onChange={setJS}
        color='#FCD000'
      />
    </Container>
  );
};

export default NewCode;
