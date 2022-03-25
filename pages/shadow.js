import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";
import Layout from "../components/layout";
import CustomSlider from "../components/Slider";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { bgcolor, Box } from "@mui/system";
import { invertColor } from "../components/functions";

function Shadow() {
  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState("#202122");
  const [inset, setInset] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [horizontal, setHorizontal] = useState(0);
  const [vertical, setVertical] = useState(0);
  const [blur, setBlur] = useState(0);
  const [spread, setSpread] = useState(1);
  const insetRef = useRef();
  const outsetRef = useRef();
  const [shadowColor, setShadowColor] = useState("132, 132, 133");
  const [bgColor, setBgColor] = useState("#202122");
  const styles = {
    boxShadow: {
      height: "280px",
      width: "60%",
      margin: "0 auto",
      borderRadius: "16px",
      backgroundColor: "rgba(32, 33, 34, 0.3)",
      boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spread}px rgba(${shadowColor}, ${opacity}) ${
        inset ? "inset" : ""
      }`,
    },
    formBox: {
      backgroundColor: "rgba(32, 33, 34, 0.3)",
      padding: "20px",
      borderRadius: "16px",
      border: `0.5px solid rgba(${shadowColor}, ${opacity})`,
    },
  };
  function copy() {}
  return (
    <Layout
      color={invertColor(bgColor)}
      style={{ backgroundColor: bgColor, color: invertColor(bgColor) }}
    >
      <Grid
        container
        sx={{ height: "85vh" }}
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            position: "relative",
          }}
        >
          <div style={styles.boxShadow}></div>
        </Grid>
        <Grid item alignSelf="start" xs={12} md={5}>
          <div style={styles.formBox}>
            <Stack direction="row" alignItems="center" flexWrap="wrap">
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginRight: "10px" }}
              >
                <span>Background</span>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => {
                    let currColor = e.target.value;
                    setBgColor(currColor);
                  }}
                  style={{
                    background: "transparent",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    marginLeft: "10px",
                  }}
                  name=""
                  id=""
                />
              </Stack>
              <Stack direction="row" alignItems="center" flexWrap="wrap">
                <span>Box shadow</span>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => {
                    let color = e.target.value;
                    setColor(color);
                    setShadowColor(
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
                    marginLeft: "10px",
                  }}
                  name=""
                  id=""
                />
              </Stack>
            </Stack>
            <Typography fontSize={20}>Shadow opacity</Typography>
            <CustomSlider
              value={opacity}
              onChange={(e) => setOpacity(e.target.value)}
              min={0}
              max={1}
              step={0.01}
            />
            <Typography fontSize={20}>Horizontal</Typography>
            <CustomSlider
              value={horizontal}
              onChange={(e) => setHorizontal(e.target.value)}
              min={-200}
              max={200}
              step={1}
            />
            <Typography fontSize={20}>Vertical</Typography>
            <CustomSlider
              value={vertical}
              onChange={(e) => setVertical(e.target.value)}
              min={-200}
              max={200}
              step={1}
            />
            <Typography fontSize={20}>Blur radius</Typography>
            <CustomSlider
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
              min={0}
              max={400}
              step={1}
            />
            <Typography fontSize={20}>Spread radius</Typography>
            <CustomSlider
              value={spread}
              onChange={(e) => setSpread(e.target.value)}
              min={-200}
              max={200}
              step={1}
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
                  onClick={() => setInset(false)}
                  sx={{
                    color: invertColor(bgColor),
                    borderRadius: "16px",
                    padding: "4px 15px",
                    fontSize: 16,
                    background: !inset
                      ? "rgba(32, 33, 34, 0.3)"
                      : "transparent",
                  }}
                >
                  outset
                </Button>
                <Button
                  variant="text"
                  onClick={() => setInset(true)}
                  sx={{
                    color: invertColor(bgColor),
                    borderRadius: "16px",
                    padding: "4px 15px",
                    fontSize: 16,
                    background: inset ? "rgba(32, 33, 34, 0.3)" : "transparent",
                  }}
                >
                  inset
                </Button>
              </Stack>
              <IconButton
                onClick={copy}
                aria-label="clipboard"
                title="Copy all"
              >
                <IntegrationInstructionsIcon
                  sx={{
                    color: invertColor(bgColor),
                  }}
                />
              </IconButton>
            </Stack>
            {!inset ? (
              <Box
                onClick={copy}
                ref={insetRef}
                sx={{
                  ...styles.neo,
                  height: "fit-content",
                  "&:hover": { cursor: "pointer" },
                  position: "relative",
                  justifyContent: "flex-start",
                  fontSize: 18,
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
                border-radius: 16px;{"\n"} backgroundColor: rgba(32, 33, 34,
                0.3);{"\n"} boxShadow: {horizontal}px {vertical}px {blur}px{" "}
                {spread}px rgba({shadowColor}, {opacity});{"\n"}
              </Box>
            ) : (
              <div
                ref={outsetRef}
                onClick={copy}
                style={{
                  ...styles.neoForm,
                  height: "fit-content",
                  position: "relative",
                  justifyContent: "flex-start",
                  fontSize: 18,
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
                border-radius: 16px;{"\n"} backgroundColor: rgba(32, 33, 34,
                0.3);{"\n"} boxShadow: {horizontal}px {vertical}px {blur}px{" "}
                {spread}px rgba({shadowColor}, {opacity}) inset;{"\n"}
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Shadow;
