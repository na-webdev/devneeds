import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Slider,
  Stack,
  Tab,
  Typography,
} from "@mui/material";

import { useRef, useState } from "react";
import Layout from "../components/layout";
import CustomSlider from "../components/Slider";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let boxes = arr.map((num) => {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  return [x, y];
});
function Glass() {
  const [copied, setCopied] = useState(false);
  const cssRef = useRef();
  const cssObjRef = useRef();
  const [color, setColor] = useState("#1f202180");
  const [css, setCss] = useState(true);
  const [transparency, setTransparency] = useState(0.5);
  const [blur, setBlur] = useState(0.1);
  const [outline, setOutline] = useState(0.1);
  const [bg, setBg] = useState("31, 32, 33");
  const [shadow, setShadow] = useState(0.1);
  const styles = {
    glass: {
      height: "400px",
      backgroundColor: `rgba(${bg}, ${transparency})`,
      transition: "0.3s",
      borderRadius: "16px",
      boxShadow: `0 4px 30px rgba(0, 0, 0, ${shadow})`,
      backdropFilter: `blur(${blur}px)`,
      border: `1px solid rgba(31, 32, 33, ${outline})`,
      position: "relative",
      zIndex: "2",
      padding: "20px",
    },
  };

  function copy() {
    if (css) navigator.clipboard.writeText(cssRef.current.textContent);
    else navigator.clipboard.writeText(cssObjRef.current.textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  return (
    <Layout style={{ backgroundColor: `rgba(${bg}, ${transparency})` }}>
      <Grid container spacing={4}>
        <Grid
          item
          alignContent="center"
          xs={12}
          md={6}
          sx={{ position: "relative", marginTop: "20px" }}
        >
          <h1
            style={{
              position: "absolute",
              top: "42%",
              left: "50%",
              zIndex: "1",
              transform: "translate(-50%, -50%)",
            }}
          >
            Glassmorphism
          </h1>
          {boxes.map(([x, y], i) => {
            console.log(x, y);
            return (
              <div
                key={i}
                style={{
                  ...styles.glass,
                  width: "100px",
                  height: "100px",
                  zIndex: "0",
                  position: "fixed",
                  transform: `rotate(60deg) translate(${x * 10}vh, -${
                    y * 30
                  }vh)`,
                  backdropFilter: "blur(15px)",
                }}
              />
            );
          })}

          <div style={styles.glass} />
        </Grid>
        <Grid item alignContent="center" xs={12} md={6}>
          <div style={{ ...styles.glass, height: "fit-content" }}>
            <input
              type="color"
              value={color}
              onChange={(e) => {
                let color = e.target.value;
                setColor(color);
                setBg(
                  `${parseInt(color.slice(-6, -4), 16)}, ${parseInt(
                    color.slice(-4, -2),
                    16
                  )}, ${parseInt(color.slice(-2), 16)}`
                );
              }}
              style={{
                background: "transparent",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
              }}
              name=""
              id=""
            />
            <Typography fontSize={20}>Transparency</Typography>
            <CustomSlider
              defaultValue={transparency}
              onChange={(e) => setTransparency(e.target.value)}
              min={0}
              max={1}
              step={0.01}
            />
            <Typography fontSize={20}>Blur</Typography>
            <CustomSlider
              defaultValue={blur}
              onChange={(e) => setBlur(e.target.value)}
              min={0}
              max={12}
              step={0.1}
            />
            <Typography fontSize={20}>Outline</Typography>
            <CustomSlider
              defaultValue={outline}
              onChange={(e) => setOutline(e.target.value)}
              min={0}
              max={1}
              step={0.01}
            />
            <Typography fontSize={20}>Shadow</Typography>
            <CustomSlider
              defaultValue={shadow}
              onChange={(e) => setShadow(e.target.value)}
              min={0}
              max={1}
              step={0.01}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
              marginBottom={2}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Button
                  variant="text"
                  onClick={() => setCss(true)}
                  sx={{
                    color: "white",
                    borderRadius: "16px",
                    padding: "4px 15px",
                    fontSize: 18,
                    background: css
                      ? `rgba(${bg}, ${transparency})`
                      : "transparent",
                  }}
                >
                  CSS
                </Button>
                <Button
                  variant="text"
                  onClick={() => setCss(false)}
                  sx={{
                    color: "white",
                    borderRadius: "16px",
                    padding: "4px 15px",
                    fontSize: 20,
                    background: !css
                      ? `rgba(${bg}, ${transparency})`
                      : "transparent",
                  }}
                >
                  CSS Obj
                </Button>
              </Stack>
              <IconButton
                onClick={copy}
                aria-label="clipboard"
                title="Copy all"
              >
                <IntegrationInstructionsIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
            </Stack>
            {css ? (
              <Box
                onClick={copy}
                ref={cssRef}
                sx={{
                  ...styles.glass,
                  height: "fit-content",
                  "&:hover": { cursor: "pointer" },
                }}
              >
                {copied && (
                  <span
                    style={{
                      position: "absolute",
                      right: 10,
                      top: 10,
                      fontSize: 12,
                    }}
                  >
                    Copied!
                  </span>
                )}
                background-color: rgba({bg}, {transparency});{"\n"}
                border-radius: 16px;{"\n"} box-shadow: 0 4px 30px rgba(0, 0, 0,{" "}
                {shadow});{"\n"} backdrop-filter: blur({blur}px);{"\n"} border:
                1px solid rgba(31, 32, 33, {outline});
              </Box>
            ) : (
              <div
                ref={cssObjRef}
                onClick={copy}
                style={{
                  ...styles.glass,
                  height: "fit-content",
                }}
              >
                {copied && (
                  <span
                    style={{
                      position: "absolute",
                      right: 10,
                      top: 10,
                      fontSize: 12,
                    }}
                  >
                    Copied!
                  </span>
                )}
                backgroundColor: &quot;rgba({bg}, {transparency})&quot;,{"\n"}
                borderRadius: &quot;16px&quot;,
                {"\n"}
                boxShadow: &quot;0 4px 30pxrgba(0, 0, 0, {shadow})&quot;,{"\n"}
                backdropFilter: &quot;blur(
                {blur}px)&quot;,{"\n"} border: &quot;1px solid rgba(31, 32, 33,{" "}
                {outline})&quot;{"\n"}
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Glass;
