import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { invertColor } from "../components/functions";
import Layout from "../components/layout";
import CustomSlider from "../components/Slider";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function Neo() {
  const [color, setColor] = useState("#222222");
  const insetRef = useRef();
  const outsetRef = useRef();
  const [copied, setCopied] = useState(false);
  const [inset, setInset] = useState(true);
  const [distance, setDistance] = useState(15);
  const [bg, setBg] = useState("#222222");
  const [blur, setBlur] = useState(30);
  const [step1, setStep1] = useState(5);
  const [radius, setRadius] = useState(16);
  const [shadow, setShadow] = useState(1);
  const [intensity1, setIntensity1] = useState(
    (parseInt(bg.slice(1), 16) - 65793 * step1).toString(16)
  );
  const [intensity2, setIntensity2] = useState(
    (parseInt(bg.slice(1), 16) + 65793 * step1).toString(16)
  );
  const styles = {
    neo: {
      height: "350px",
      width: "100%",
      padding: "25px",
      borderRadius: `${radius}px`,
      background: bg,
      boxShadow: `inset ${shadow == 2 || shadow == 3 ? "-" : ""}${distance}px ${
        shadow == 3 || shadow == 4 ? "-" : ""
      }${distance}px ${blur}px #${intensity1}, inset ${
        shadow == 1 || shadow == 4 ? "-" : ""
      }${distance}px ${
        shadow == 1 || shadow == 2 ? "-" : ""
      }${distance}px ${blur}px #${intensity2}`,
      display: "grid",
      placeItems: "center",
    },
    neoForm: {
      background: bg,
      padding: "25px",
      borderRadius: "16px",
      boxShadow: `${shadow == 2 || shadow == 3 ? "-" : ""}${distance}px ${
        shadow == 3 || shadow == 4 ? "-" : ""
      }${distance}px ${blur}px #${intensity1}, ${
        shadow == 1 || shadow == 4 ? "-" : ""
      }${distance}px ${
        shadow == 1 || shadow == 2 ? "-" : ""
      }${distance}px ${blur}px #${intensity2}`,
    },
  };

  function copy() {
    if (inset) navigator.clipboard.writeText(insetRef.current.textContent);
    else navigator.clipboard.writeText(outsetRef.current.textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }
  function selectButton(e, num) {
    setShadow(num);
  }
  return (
    <Layout
      style={{ backgroundColor: bg, color: invertColor(color) }}
      color={invertColor(color)}
    >
      <Grid
        container
        spacing={8}
        sx={{ minHeight: "90vh" }}
        justifyContent="center"
      >
        <Grid item xs={12} md={5} sx={{ position: "relative" }}>
          <div style={styles.neo}>
            <h1>Neomorphism</h1>
          </div>
        </Grid>
        <Grid item xs={12} md={5} alignSelf="start">
          <div style={styles.neoForm}>
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              sx={{ "& svg": { borderRadius: "50%" } }}
            >
              <input
                type="color"
                value={color}
                onChange={(e) => {
                  let color = e.target.value;
                  setIntensity1(
                    (parseInt(color.slice(1), 16) - 65793 * step1).toString(16)
                  );
                  setIntensity2(
                    (parseInt(color.slice(1), 16) + 65793 * step1).toString(16)
                  );
                  setColor(color);
                  setBg(color);
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
              <IconButton
                onClick={(e) => selectButton(e, 1)}
                aria-label="clipboard"
                title="Copy all"
              >
                <ArrowCircleDownIcon
                  sx={{
                    color: invertColor(color),
                    transform: "rotate(-45deg)",
                  }}
                />
              </IconButton>
              <IconButton
                onClick={(e) => selectButton(e, 2)}
                aria-label="clipboard"
                title="Copy all"
              >
                <ArrowCircleDownIcon
                  sx={{
                    color: invertColor(color),
                    transform: "rotate(45deg)",
                  }}
                />
              </IconButton>
              <IconButton
                onClick={(e) => selectButton(e, 3)}
                aria-label="clipboard"
                title="Copy all"
              >
                <ArrowCircleDownIcon
                  sx={{
                    color: invertColor(color),
                    transform: "rotate(135deg)",
                  }}
                />
              </IconButton>
              <IconButton
                onClick={(e) => selectButton(e, 4)}
                aria-label="clipboard"
                title="Copy all"
              >
                <ArrowCircleDownIcon
                  sx={{
                    color: invertColor(color),
                    transform: "rotate(225deg)",
                  }}
                />
              </IconButton>
            </Stack>

            <Typography fontSize={20}>Intensity</Typography>
            <CustomSlider
              value={step1}
              onChange={(e) => {
                setStep1(e.target.value);

                setIntensity1(
                  (
                    parseInt(bg.slice(1), 16) -
                    65793 * parseInt(e.target.value)
                  ).toString(16)
                );
                setIntensity2(
                  (
                    parseInt(bg.slice(1), 16) +
                    65793 * parseInt(e.target.value)
                  ).toString(16)
                );
              }}
              min={0}
              max={15}
              step={1}
            />
            <Typography fontSize={20}>Distance</Typography>
            <CustomSlider
              value={distance}
              onChange={(e) => {
                setDistance(e.target.value);
                setBlur(e.target.value);
              }}
              min={0}
              max={50}
            />
            <Typography fontSize={20}>Blur</Typography>
            <CustomSlider
              value={blur}
              onChange={(e) => setBlur(e.target.value)}
              min={0}
              max={100}
            />
            <Typography fontSize={20}>Radius</Typography>
            <CustomSlider
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              min={16}
              max={150}
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
                  onClick={() => setInset(true)}
                  sx={{
                    color: invertColor(color),
                    borderRadius: "16px",
                    padding: "4px 15px",
                    fontSize: 16,
                    background: inset ? `#${intensity1}` : "transparent",
                  }}
                >
                  inset
                </Button>
                <Button
                  variant="text"
                  onClick={() => setInset(false)}
                  sx={{
                    color: invertColor(color),
                    borderRadius: "16px",
                    padding: "4px 15px",
                    fontSize: 16,
                    background: !inset ? `#${intensity1}` : "transparent",
                  }}
                >
                  outset
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
            {inset ? (
              <Box
                onClick={copy}
                ref={insetRef}
                sx={{
                  ...styles.neo,
                  height: "fit-content",
                  "&:hover": { cursor: "pointer" },
                  position: "relative",
                  justifyContent: "flex-start",
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
                background-color: {bg};{"\n"}
                padding: 25px;{"\n"} box-shadow: inset{" "}
                {shadow == 2 || shadow == 3 ? "-" : " "}
                {distance}px
                {shadow == 3 || shadow == 4 ? "-" : " "}
                {distance}px {blur}px #{intensity1}, inset{" "}
                {shadow == 1 || shadow == 4 ? "-" : ""}
                {distance}px {shadow == 1 || shadow == 2 ? "-" : ""}
                {distance}
                px {blur}px #{intensity2};{"\n"}
                border-radius: {radius}px;{"\n"}
              </Box>
            ) : (
              <Box
                ref={outsetRef}
                onClick={copy}
                sx={{
                  ...styles.neoForm,
                  height: "fit-content",
                  position: "relative",
                  justifyContent: "flex-start",
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
                background-color: {bg};{"\n"}
                padding: 25px;{"\n"}
                box-shadow: {shadow == 2 || shadow == 3 ? "-" : " "}
                {distance}px
                {shadow == 3 || shadow == 4 ? "-" : " "}
                {distance}px {blur}px #{intensity1},{" "}
                {shadow == 1 || shadow == 4 ? "-" : ""}
                {distance}px {shadow == 1 || shadow == 2 ? "-" : ""}
                {distance}
                px {blur}px #{intensity2};{"\n"}
                border-radius: 16px;{"\n"}
              </Box>
            )}
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Neo;
