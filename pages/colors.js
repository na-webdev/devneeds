import { IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { RgbaColorPicker } from "react-colorful";
import Layout from "../components/layout";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { Box } from "@mui/system";
import { invertColor } from "../components/functions";

function Colors() {
  const boxRef = useRef();
  const [copied, setCopied] = useState(false);
  const [color, setColor] = useState({ r: 22, g: 22, b: 22, a: 1 });
  function copy() {
    navigator.clipboard.writeText(boxRef.current.textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }
  return (
    <Layout
      style={{
        backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        position: "relative",
      }}
      color={invertColor(
        `#${color.r.toString(16)}${color.g.toString(16)}${color.b.toString(16)}`
      )}
    >
      <h1
        style={{
          textAlign: "center",
          color: invertColor(
            `#${color.r.toString(16)}${color.g.toString(16)}${color.b.toString(
              16
            )}`
          ),
        }}
      >
        Colors
      </h1>
      <div
        style={{
          margin: "20px auto 20px",
          width: "30%",
          minWidth: "230px",
          textAlign: "center",
        }}
      >
        <RgbaColorPicker
          color={color}
          onChange={setColor}
          style={{ margin: "0 auto", width: "230px" }}
        />
        <Box
          onClick={copy}
          ref={boxRef}
          sx={{
            backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
            borderRadius: "16px",
            padding: "10px",
            margin: "10px auto",
            textAlign: "center",
            width: "230px",
            "&:hover": {
              cursor: "pointer",
            },
            color: invertColor(
              `#${color.r.toString(16)}${color.g.toString(
                16
              )}${color.b.toString(16)}`
            ),
          }}
        >
          <p style={{ margin: 0 }}>
            background-color: rgba({color.r}, {color.g}, {color.b}, {color.a});
            {"\n"}
          </p>
          color:{" "}
          {invertColor(
            `#${color.r.toString(16)}${color.g.toString(16)}${color.b.toString(
              16
            )}`
          )}
          ;{"\n"}
        </Box>
        <IconButton onClick={copy} aria-label="clipboard" title="Copy all">
          <IntegrationInstructionsIcon
            sx={{
              color: invertColor(
                `#${color.r.toString(16)}${color.g.toString(
                  16
                )}${color.b.toString(16)}`
              ),
            }}
          />
        </IconButton>
        {copied && (
          <p
            style={{
              color: invertColor(
                `#${color.r.toString(16)}${color.g.toString(
                  16
                )}${color.b.toString(16)}`
              ),
            }}
          >
            Copied!
          </p>
        )}
      </div>
    </Layout>
  );
}

export default Colors;
