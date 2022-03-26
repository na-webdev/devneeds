import { RgbaColorPicker } from "react-colorful";
import { Box } from "@mui/system";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import { IconButton } from "@mui/material";
import { invertColor } from "./functions";

function ColorPicker(props) {
  return (
    <div>
      <h1>Colors</h1>
      <div
        style={{
          margin: "20px auto 20px",
          width: "30%",
          minWidth: "230px",
        }}
      >
        <RgbaColorPicker
          color={props.color}
          onChange={props.setColor}
          style={{
            margin: "0 auto",
            width: "230px",
          }}
        />
        <Box
          onClick={props.copy}
          ref={props.boxRef}
          sx={{
            backgroundColor: `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a})`,
            borderRadius: "16px",
            padding: "10px",
            margin: "10px auto",
            width: "230px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <p
            style={{
              margin: 0,
            }}
          >
            background-color: rgba({props.color.r}, {props.color.g},{" "}
            {props.color.b}, {props.color.a}
            );
            {"\n"}
          </p>
          color:{" "}
          {invertColor(
            `#${props.color.r.toString(16)}${props.color.g.toString(
              16
            )}${props.color.b.toString(16)}`
          )}
          ;{"\n"}
        </Box>
        <IconButton
          onClick={props.copy}
          aria-label="clipboard"
          title="Copy all"
        >
          <IntegrationInstructionsIcon
            sx={{
              color: invertColor(
                `#${props.color.r.toString(16)}${props.color.g.toString(
                  16
                )}${props.color.b.toString(16)}`
              ),
            }}
          />
        </IconButton>
        {props.copied && <p>Copied!</p>}
      </div>
    </div>
  );
}

export default ColorPicker;
