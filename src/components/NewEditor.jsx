import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import "../App.css";

const Container = styled(Box)`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;

const NewEditor = ({ language, heading, value, onChange, icon, color }) => {

    const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <Container style={open ? null : {flexGrow : 0}}>
      <Header>
        <Heading>
          <Box
            style={{
                background : color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              color : "#000",
              paddingBottom: 2
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
        fontSize="small"
        style={{ alignSelf: 'center'}}
        onClick={() => setOpen(!open)}
         />
      </Header>
      <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        options={{
          mode: language,
          lineWrapping: true,
          lineNumbers: true,
          theme: "material",
          lint: true,
        }}
      />
    </Container>
  );
};

export default NewEditor;
