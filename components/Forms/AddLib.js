import { Grid, IconButton, Paper, TextField } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import styles from "./form.module.css";

export default function AddLibForm() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Board name..." />
      <div
        className={styles.coverBox}
        style={{
          marginBottom: "15px",
          backgroundColor: "#161616",
          padding: "12px",
          borderRadius: "16px",
        }}
      >
        <input type="text" placeholder="Field name..." />
        <Grid container>
          <Grid item xs={12}>
            <input type="text" placeholder="Field data..." />
          </Grid>
          <Grid item xs={12}>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
      <button type="submit">
        <AddIcon />
      </button>
      <button type="submit">Save</button>
    </form>
  );
}
