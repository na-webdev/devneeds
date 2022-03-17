import { Grid, IconButton, Stack, Typography } from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AddIcon from "@mui/icons-material/Add";
import { getRegistryMetadata } from "query-registry";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect } from "react";
import Box from "../components/Box";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";
import MBox from "@mui/material/Box";
import AddLibForm from "../components/Forms/AddLib";

export default function Home() {
  let categories = {
    "CDN Links": {
      Bootstrap: {
        CSS: [
          `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`,
        ],
        Bundle: [
          '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>',
        ],
        Seperat: [
          `<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>`,
          `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>`,
        ],
      },
      Js: {
        CSS: [
          `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`,
        ],
        Bundle: [
          '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>',
        ],
        Seperat: [
          `<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>`,
          `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>`,
        ],
      },
    },
  };
  let arr = [1, 2, 3, 4];
  return (
    <Layout>
      {Object.entries(categories).map(([libName, lib]) => {
        return (
          <div key={libName} style={{ marginBottom: "30px" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography fontSize={22}>{libName}</Typography>
              <IconButton aria-label="clipboard" sx={{ color: "#313334" }}>
                <AddIcon sx={{ "&:hover": { color: "white" } }} />
              </IconButton>
            </Stack>
            <Grid container spacing={2} sx={{ paddingTop: 2 }}>
              {Object.entries(lib).map(([name, links]) => (
                <Grid item key={name} xs={12} md={6} lg={4}>
                  <Box>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      marginBottom={2}
                    >
                      <Typography fontWeight="bold">{name}</Typography>
                      <div>
                        <IconButton
                          aria-label="clipboard"
                          sx={{ color: "#313334" }}
                        >
                          <IntegrationInstructionsIcon
                            sx={{ "&:hover": { color: "white" } }}
                          />
                        </IconButton>
                        <IconButton
                          aria-label="clipboard"
                          sx={{ color: "#313334" }}
                        >
                          <MoreVertIcon
                            sx={{ "&:hover": { color: "white" } }}
                          />
                        </IconButton>
                      </div>
                    </Stack>
                    {Object.entries(links).map(([linkName, linkData]) => (
                      <MBox
                        key={linkName}
                        sx={{
                          marginBottom: "15px",
                          backgroundColor: "#161616",
                          padding: "8px 12px",
                          borderRadius: "16px",
                          transition: "0.5s",
                          "&:hover": {
                            backgroundColor: "#313334",
                            cursor: "pointer",
                          },
                        }}
                      >
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Typography fontSize={15} fontWeight="bold">
                            {linkName}
                          </Typography>
                          <Typography sx={{ display: "none" }} fontSize={12}>
                            Copied!
                          </Typography>
                        </Stack>
                        {linkData.map((link) => (
                          <Stack
                            key={link}
                            direction="row"
                            sx={{
                              padding: "4px 0",

                              marginBottom: "2px",
                            }}
                          >
                            <Typography fontSize={14} noWrap>
                              {link}
                            </Typography>
                          </Stack>
                        ))}
                      </MBox>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        );
      })}
      <AddLibForm />
    </Layout>
  );
}
