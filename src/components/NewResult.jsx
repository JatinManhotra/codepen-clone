import React, { useContext, useEffect, useState } from "react";
import  { Box,styled } from "@mui/material";
import { NewCodepenContext } from "../context/NewContext";

const Container = styled(Box)`
height : 40vh;
`;
const NewResult = () => {


  const [src, setSRC] = useState("");

  const { html, css, js } = useContext(NewCodepenContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSRC(srcCode);
    }, 1000);

    return ()=> clearTimeout(timeout)
  }, [html, css, js]);

  const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `;

  return (
    <Container>
      <iframe style={{border : 'none'}} srcDoc={src} sandbox="allow-scripts" width="100%" height="100%"/>
    </Container>
  );
};

export default NewResult;
