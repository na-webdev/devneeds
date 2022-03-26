import { GitHub, LinkedIn, Telegram } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout";
import AnimatedSphere from "../components/Sphere";

function About() {
  return (
    <Layout style={{ textAlign: "center" }}>
      <Stack
        sx={{ height: "80vh" }}
        justifyContent="center"
        alignItems="center"
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1>Dev Needs</h1>
          <Typography sx={{ margin: "0 auto", width: { md: "60%" } }}>
            It is a web application that includes commonly used tools by web
            developers. From my experience, during the development process of
            different applications, I had to visit many websites to access the
            tools which <b>DevNeeds</b> provides. So I decided to put these
            tools in one application to ease the process and not to waste time
            during development. I hope this web application also be useful for
            other developers like me.
            <p>
              * Board - it works like clipboard where you can save your commonly
              used libraries, links and with one click you can copy all board
              data or each link or library data. Currently, it stores data to
              your browser storage.
            </p>
            <p>From developer to developers</p>
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <a
              rel="noreferrer"
              href="https://github.com/na-webdev"
              target="_blank"
            >
              <GitHub />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/na-webdev"
              target="_blank"
            >
              <LinkedIn />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/na-webdev"
              target="_blank"
            >
              <Telegram />
            </a>
          </Stack>
        </div>
      </Stack>
      <AnimatedSphere />
    </Layout>
  );
}

export default About;
