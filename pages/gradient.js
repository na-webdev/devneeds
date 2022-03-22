import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Box, fontSize } from "@mui/system";
import { useRef, useState } from "react";
import { invertColor, rgbaToHex } from "../components/functions";
import Layout from "../components/layout";
import colorGradient from "javascript-color-gradient";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ReplayIcon from "@mui/icons-material/Replay";

function Gradient() {
  const [active, setActive] = useState(false);
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
  function selectButton(e, deg) {
    setDegree(deg);
  }
  return (
    <Layout
      style={{
        textAlign: "center",
        background: gradient,
        color: invertColor(rgbaToHex(color2)),
      }}
    >
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
            value={degree}
            style={{
              backgroundColor: "rgba(31, 32, 33, 0.5)",
              width: "100px",
              color: invertColor(rgbaToHex(color1)),
            }}
            type="text"
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
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
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        margin="20px 0"
        sx={{ "& svg": { borderRadius: "50%" } }}
      >
        <IconButton
          onClick={(e) => selectButton(e, "180deg")}
          aria-label="clipboard"
          title="Copy all"
        >
          <ArrowCircleDownIcon
            sx={{
              color: invertColor(rgbaToHex(color2)),
            }}
          />
        </IconButton>
        <IconButton
          onClick={(e) => selectButton(e, "225deg")}
          aria-label="clipboard"
          title="Copy all"
        >
          <ArrowCircleDownIcon
            sx={{
              color: invertColor(rgbaToHex(color2)),
              transform: "rotate(45deg)",
            }}
          />
        </IconButton>
        <IconButton
          onClick={(e) => selectButton(e, "270deg")}
          aria-label="clipboard"
          title="Copy all"
        >
          <ArrowCircleDownIcon
            sx={{
              color: invertColor(rgbaToHex(color2)),
              transform: "rotate(90deg)",
            }}
          />
        </IconButton>
        <IconButton
          onClick={(e) => selectButton(e, "315deg")}
          aria-label="clipboard"
          title="Copy all"
        >
          <ArrowCircleDownIcon
            sx={{
              color: invertColor(rgbaToHex(color2)),
              transform: "rotate(135deg)",
            }}
          />
        </IconButton>
        <IconButton
          onClick={(e) => selectButton(e, "0deg")}
          aria-label="clipboard"
          title="Copy all"
        >
          <ArrowCircleDownIcon
            sx={{
              color: invertColor(rgbaToHex(color2)),
              transform: "rotate(180deg)",
            }}
          />
        </IconButton>
        <IconButton
          onClick={(e) => selectButton(e, "45deg")}
          aria-label="clipboard"
          title="Copy all"
        >
          <ArrowCircleDownIcon
            sx={{
              color: invertColor(rgbaToHex(color2)),
              transform: "rotate(225deg)",
            }}
          />
        </IconButton>
        <IconButton
          onClick={(e) => selectButton(e, "90deg")}
          aria-label="clipboard"
          title="Copy all"
        >
          <ArrowCircleDownIcon
            sx={{
              color: invertColor(rgbaToHex(color2)),
              transform: "rotate(-90deg)",
            }}
          />
        </IconButton>
        <IconButton
          onClick={(e) => selectButton(e, "135deg")}
          aria-label="clipboard"
          title="Copy all"
        >
          <ArrowCircleDownIcon
            sx={{
              color: invertColor(rgbaToHex(color2)),
              transform: "rotate(-45deg)",
            }}
          />
        </IconButton>
        <IconButton
          onClick={(e) => {
            setColor1("rgba(22, 22, 22, 1)");
            setColor2("rgba(22, 22, 22, 1)");
            setColor3("rgba(22, 22, 22, 1)");
            setDegree("135deg");
          }}
          aria-label="clipboard"
          title="Copy all"
        >
          <ReplayIcon
            sx={{
              color: invertColor(rgbaToHex(color2)),
            }}
          />
        </IconButton>
      </Stack>
      <Button
        onClick={() => {
          setGradient(
            `linear-gradient(${degree}, ${gradientArray.join(", ")})`
          );
        }}
        variant="text"
        sx={{
          color: invertColor(rgbaToHex(color2)),
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
        background: linear-gradient({degree}, {gradientArray.join(", ")});
      </Box>

      <IconButton onClick={copy} aria-label="clipboard" title="Copy all">
        <IntegrationInstructionsIcon
          sx={{
            color: invertColor(rgbaToHex(color2)),
          }}
        />
      </IconButton>
      {copied && <p>Copied!</p>}
    </Layout>
  );
}

export default Gradient;
