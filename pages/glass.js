import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import { useRef, useState } from "react";
import Layout from "../components/layout";
import CustomSlider from "../components/Slider";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { invertColor } from "../components/functions";
import { BoxGeometry } from "three";

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
  const [color, setColor] = useState("#161616");
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

  const sliderData = {
    Transparency: {
      val: transparency,
      func: (e) => setTransparency(e.target.value),
      min: 0,
      max: 1,
      step: 0.01,
    },
    Blur: {
      val: blur,
      func: (e) => setBlur(e.target.value),
      min: 0,
      max: 12,
      step: 0.1,
    },
    Outline: {
      val: outline,
      func: (e) => setOutline(e.target.value),
      min: 0,
      max: 1,
      step: 0.01,
    },
    Shadow: {
      val: shadow,
      func: (e) => setShadow(e.target.value),
      min: 0,
      max: 1,
      step: 0.01,
    },
  };

  function copy() {
    if (css) navigator.clipboard.writeText(cssRef.current.textContent);
    else navigator.clipboard.writeText(cssObjRef.current.textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  return (
    <Layout
      style={{
        backgroundColor: `rgba(${bg}, ${transparency})`,
        color: invertColor(color),
      }}
      color={invertColor(color)}
    >
      <Grid container spacing={4}>
        <Grid
          item
          alignContent="center"
          xs={12}
          md={7}
          sx={{ position: "relative", marginTop: "20px" }}
        >
          <h1
            style={{
              position: "absolute",
              top: "38%",
              left: "50%",
              zIndex: "1",
              transform: "translate(-50%, -50%)",
            }}
          >
            Glassmorphism
          </h1>
          {boxes.map(([x, y], i) => {
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
        <Grid item alignContent="center" xs={12} md={5}>
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
            {Object.entries(sliderData).map(([title, data]) => (
              <>
                <Typography fontSize={20}>{title}</Typography>
                <CustomSlider
                  value={data.val}
                  onChange={data.func}
                  min={data.min}
                  max={data.max}
                  step={data.step}
                />
              </>
            ))}
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
                    color: invertColor(color),
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
                    color: invertColor(color),
                    borderRadius: "16px",
                    padding: "4px 15px",
                    fontSize: 18,
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
                    color: invertColor(color),
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
                      right: 5,
                      top: 5,
                      fontSize: 12,
                    }}
                  >
                    Copied!
                  </span>
                )}
                background-color: rgba({bg}, {transparency});{"\n"}
                color: {invertColor(color)};{"\n"}
                padding: 20px;{"\n"} border-radius: 16px;{"\n"} box-shadow: 0
                4px 30px rgba(0, 0, 0, {shadow});{"\n"} backdrop-filter: blur(
                {blur}
                px);{"\n"} border: 1px solid rgba(31, 32, 33, {outline});
              </Box>
            ) : (
              <Box
                ref={cssObjRef}
                onClick={copy}
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
                      right: 5,
                      top: 5,
                      fontSize: 12,
                    }}
                  >
                    Copied!
                  </span>
                )}
                backgroundColor: &quot;rgba({bg}, {transparency})&quot;,{"\n"}
                padding: &quot;20px&quot;,{"\n"}
                color: &quot;{invertColor(color)}&quot;,{"\n"}
                borderRadius: &quot;16px&quot;,
                {"\n"}
                boxShadow: &quot;0 4px 30pxrgba(0, 0, 0, {shadow})&quot;,{"\n"}
                backdropFilter: &quot;blur(
                {blur}px)&quot;,{"\n"} border: &quot;1px solid rgba(31, 32, 33,{" "}
                {outline})&quot;{"\n"}
              </Box>
            )}
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Glass;
