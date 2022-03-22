import { Stack, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import { useState } from "react";
import Layout from "../components/layout";

function Gradient() {
  const [color1, setColor1] = useState("rgba(31, 32, 33, 0.5)");
  const [color2, setColor2] = useState("rgba(31, 32, 33, 0.5)");
  const [color3, setColor3] = useState("rgba(31, 32, 33, 0.5)");
  return (
    <Layout>
      <h1 style={{ textAlign: "center" }}>Create 3-color gradient</h1>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          "& input": {
            padding: "12px",
            borderRadius: "16px",
            border: "none",
            outline: "none",
            fontSize: "18px",
            width: "230px",
            color: "white",
          },
        }}
      >
        <div style={{ padding: "5px" }}>
          <input style={{ backgroundColor: color1 }} type="text" />
        </div>
        <div style={{ padding: "5px" }}>
          <input style={{ backgroundColor: color2 }} type="text" />
        </div>
        <div style={{ padding: "5px" }}>
          <input style={{ backgroundColor: color2 }} type="text" />
        </div>
      </Stack>
    </Layout>
  );
}

export default Gradient;
