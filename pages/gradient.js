import { Button, IconButton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { invertColor } from "../components/functions";
import Layout from "../components/layout";
import colorGradient from "javascript-color-gradient";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ReplayIcon from "@mui/icons-material/Replay";

function Gradient() {
  const [color1, setColor1] = useState("#161616");
  const [color2, setColor2] = useState("#161616");
  const [color3, setColor3] = useState("#161616");
  const [degree, setDegree] = useState("135deg");
  const boxRef = useRef();
  const [copied, setCopied] = useState(false);
  const gradientArray = colorGradient
    .setGradient(color1, color2, color3)
    .getArray();
  const [gradient, setGradient] = useState("#161616");

  const buttonData = [
    [180, 0],
    [225, 45],
    [270, 90],
    [315, 135],
    [0, 180],
    [45, 225],
    [90, -90],
    [135, -45],
  ];

  const colorInputData = [
    [color1, setColor1],
    [color2, setColor2],
    [color3, setColor3],
  ];

  const styles = {
    layout: {
      textAlign: "center",
      background: gradient,
      color: invertColor(color2),
    },
    inputStack: {
      marginBottom: "20px",
      "& input": {
        borderRadius: "4px",
        border: "none",
        outline: "none",
        fontSize: "18px",
        textAlign: "center",
      },
    },
    degreeInput: {
      backgroundColor: "rgba(31, 32, 33, 0.5)",
      width: "80px",
      padding: "3px 0",
      color: invertColor(color2),
    },
    generate: {
      color: invertColor(color2),
      borderRadius: "16px",
      padding: "4px 15px",
      fontSize: 18,
      background: gradient,
    },
    gradientBox: {
      width: "100%",
      maxWidth: "400px",
      margin: "20px auto",
      background: `linear-gradient(${degree}, ${gradientArray.join(", ")})`,
      transition: "0.3s",
      borderRadius: "16px",
      boxShadow: `0 4px 5px rgba(0, 0, 0, 0.5)`,
      backdropFilter: `blur(0px)`,
      position: "relative",
      zIndex: "2",
      padding: "20px",
      height: "fit-content",
      wordWrap: "wrap",
      "&:hover": { cursor: "pointer" },
    },
  };

  function copy() {
    navigator.clipboard.writeText(boxRef.current.textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  function selectButton(e, deg) {
    setDegree(deg);
  }

  return (
    <Layout style={styles.layout} color={invertColor(color2)}>
      <h1>Create 3-color gradient</h1>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={styles.inputStack}
      >
        <div style={{ padding: "5px" }}>
          <input
            value={degree}
            style={styles.degreeInput}
            type="text"
            onChange={(e) => setDegree(e.target.value)}
          />
        </div>
        {colorInputData.map(([colr, colorFunc], i) => (
          <div key={i} style={{ padding: "5px" }}>
            <input
              type="color"
              value={colr}
              style={{
                backgroundColor: colr,
                color: invertColor(colr),
              }}
              onChange={(e) => {
                colorFunc(e.target.value);
              }}
            />
          </div>
        ))}
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
        {buttonData.map(([shadowDeg, rotateDeg], i) => (
          <IconButton
            key={i}
            onClick={(e) => selectButton(e, `${shadowDeg}deg`)}
          >
            <ArrowCircleDownIcon
              sx={{
                color: invertColor(color2),
                transform: `rotate(${rotateDeg}deg)`,
              }}
            />
          </IconButton>
        ))}
        <IconButton
          onClick={(e) => {
            setColor1("#161616");
            setColor2("#161616");
            setColor3("#161616");
            setDegree("135deg");
          }}
        >
          <ReplayIcon
            sx={{
              color: invertColor(color2),
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
        sx={styles.generate}
      >
        Generate
      </Button>
      <Box onClick={copy} ref={boxRef} sx={styles.gradientBox}>
        background: linear-gradient({degree}, {gradientArray.join(", ")});
      </Box>

      <IconButton onClick={copy}>
        <IntegrationInstructionsIcon
          sx={{
            color: invertColor(color2),
          }}
        />
      </IconButton>
      {copied && <p>Copied!</p>}
    </Layout>
  );
}

export default Gradient;
