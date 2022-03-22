import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import { useRef, useState } from "react";
import { invertColor } from "../components/functions";
import Layout from "../components/layout";
import colorGradient from "javascript-color-gradient";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const rgbaToHex = (color) => {
  if (/^rgb/.test(color)) {
    const rgba = color.replace(/^rgba?\(|\s+|\)$/g, "").split(",");

    // rgb to hex
    // eslint-disable-next-line no-bitwise
    let hex = `#${(
      (1 << 24) +
      (parseInt(rgba[0], 10) << 16) +
      (parseInt(rgba[1], 10) << 8) +
      parseInt(rgba[2], 10)
    )
      .toString(16)
      .slice(1)}`;

    // added alpha param if exists
    if (rgba[4]) {
      const alpha = Math.round(0o1 * 255);
      const hexAlpha = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
      hex += hexAlpha;
    }

    return hex;
  }
  return color;
};

function Gradient() {
  const [color1, setColor1] = useState("rgba(22, 22, 22, 1)");
  const [color2, setColor2] = useState("rgba(22, 22, 22, 1)");
  const [color3, setColor3] = useState("rgba(22, 22, 22, 1)");
  const [degree, setDegree] = useState("135deg");
  const boxRef = useRef();
  const [copied, setCopied] = useState(false);
  const gradientArray = colorGradient
    .setGradient(rgbaToHex(color1), rgbaToHex(color2), rgbaToHex(color3))
    .getArray();
  console.log(gradientArray);
  const [gradient, setGradient] = useState("rgba(22, 22, 22, 1");
  function copy() {
    navigator.clipboard.writeText(boxRef.current.textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }
  return (
    <Layout style={{ textAlign: "center", background: gradient }}>
      <h1>Create 3-color gradient</h1>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          marginBottom: "20px",
          "& input": {
            padding: "12px",
            borderRadius: "16px",
            border: "none",
            outline: "none",
            fontSize: "18px",
            width: "230px",
            textAlign: "center",
          },
        }}
      >
        <div style={{ padding: "5px" }}>
          <input
            value={color1}
            style={{
              backgroundColor: color1,
              color: invertColor(rgbaToHex(color1)),
            }}
            type="text"
            onChange={(e) => {
              setColor1(e.target.value);
            }}
          />
        </div>
        <div style={{ padding: "5px" }}>
          <input
            value={color2}
            style={{
              backgroundColor: color2,
              color: invertColor(rgbaToHex(color2)),
            }}
            type="text"
            onChange={(e) => setColor2(e.target.value)}
          />
        </div>
        <div style={{ padding: "5px" }}>
          <input
            value={color3}
            style={{
              backgroundColor: color3,
              color: invertColor(rgbaToHex(color3)),
            }}
            type="text"
            onChange={(e) => setColor3(e.target.value)}
          />
        </div>
      </Stack>
      <Button
        onClick={() => {
          setGradient(`linear-gradient(135deg, ${gradientArray.join(", ")})`);
        }}
        variant="text"
        sx={{
          color: "white",
          borderRadius: "16px",
          padding: "4px 15px",
          fontSize: 18,
          background: gradient,
        }}
      >
        Generate
      </Button>
      <Box
        onClick={copy}
        ref={boxRef}
        sx={{
          width: "100%",
          maxWidth: "400px",
          margin: "20px auto",
          background: gradient,
          transition: "0.3s",
          borderRadius: "16px",
          boxShadow: `0 4px 30px rgba(0, 0, 0, 1)`,
          backdropFilter: `blur(0px)`,
          border: `1px solid rgba(31, 32, 33, 1)`,
          position: "relative",
          zIndex: "2",
          padding: "20px",
          height: "fit-content",
          wordWrap: "wrap",
          "&:hover": { cursor: "pointer" },
        }}
      >
        background: linear-gradient(135deg, ${gradientArray.join(", ")});
      </Box>

      <IconButton onClick={copy} aria-label="clipboard" title="Copy all">
        <IntegrationInstructionsIcon
          sx={{
            color: "white",
          }}
        />
      </IconButton>
      {copied && <p>Copied!</p>}
    </Layout>
  );
}

export default Gradient;
