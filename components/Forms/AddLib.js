import {
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import styles from "./form.module.css";
import { useForm } from "react-hook-form";
import { addNewBoard } from "../../redux/actions/boardActions";

export default function AddLibForm({ handleClose, defValue, category }) {
  let formDef = {};
  let resultMonitor = {
    field0: ["data00"],
  };
  if (defValue) {
    formDef["boardName"] = defValue.name;
    let pairs = Object.entries(defValue.links);
    resultMonitor = {};
    for (let i = 0; i < pairs.length; i++) {
      resultMonitor[`field${i}`] = [];
      formDef[`field${i}`] = pairs[i][0];
      for (let j = 0; j < pairs[i][1].length; j++) {
        resultMonitor[`field${i}`].push(`data${i}${j}`);
        formDef[`data${i}${j}`] = pairs[i][1][j];
      }
    }
  }
  const [monitor, setMonitor] = useState(resultMonitor);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function addNewInput(fieldId, inputId) {
    let newMonitor = { ...monitor };
    newMonitor[`field${fieldId}`].push(`data${fieldId}${inputId}`);
    setMonitor(newMonitor);
  }

  function addNewField(fieldId) {
    let newMonitor = { ...monitor, [`field${fieldId}`]: [`data${fieldId}0`] };
    setMonitor(newMonitor);
  }

  const onSubmit = (data) => {
    let vals = Object.entries(data);
    let result = {};
    for (let i = 0; i < vals.length; i++) {
      if (data[`field${i}`]) {
        result[data[`field${i}`]] = [];
        for (let j = 0; j < vals.length; j++) {
          if (data[`data${i}${j}`])
            result[data[`field${i}`]].push(data[`data${i}${j}`]);
        }
      }
    }
    let newBoard = {
      [data.boardName]: result,
    };
    addNewBoard({ category, boardData: newBoard });
    handleClose();
  };
  if (defValue) {
    return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("boardName", { required: true })}
          type="text"
          placeholder="Board name..."
          defaultValue={formDef.boardName}
        />
        {Object.entries(monitor).map(([fieldName, inputList], i) => {
          return (
            <div
              key={fieldName}
              className={styles.coverBox}
              style={{
                marginBottom: "15px",
                backgroundColor: "#161616",
                padding: "12px",
                borderRadius: "16px",
              }}
            >
              <input
                {...register(`${fieldName}`, { required: true })}
                type="text"
                placeholder="Field name..."
                defaultValue={formDef[fieldName]}
                style={{ borderColor: "#313334" }}
              />
              <Grid container>
                {inputList.map((inputName, index) => {
                  return (
                    <Grid key={inputName} item xs={12}>
                      <input
                        {...register(`${inputName}`, { required: true })}
                        type="text"
                        placeholder="Field data..."
                        defaultValue={formDef[inputName]}
                      />
                    </Grid>
                  );
                })}
                <Grid item xs={12}>
                  <IconButton onClick={() => addNewInput(i, inputList.length)}>
                    <AddIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </div>
          );
        })}
        <Stack direction="row">
          <IconButton
            onClick={() => addNewField(Object.values(monitor).length)}
          >
            <AddIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={handleClose}
            variant="text"
            sx={{ color: "white", borderRadius: "16px", padding: "4px 15px" }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="text"
            sx={{ color: "white", borderRadius: "16px", padding: "4px 15px" }}
          >
            Save
          </Button>
        </Stack>
      </form>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("boardName", { required: true })}
        type="text"
        placeholder="Board name..."
      />
      {Object.entries(monitor).map(([fieldName, inputList], i) => {
        return (
          <div
            key={fieldName}
            className={styles.coverBox}
            style={{
              marginBottom: "15px",
              backgroundColor: "#161616",
              padding: "12px",
              borderRadius: "16px",
            }}
          >
            <input
              {...register(`${fieldName}`, { required: true })}
              type="text"
              placeholder="Field name..."
            />
            <Grid container>
              {inputList.map((inputName, index) => {
                return (
                  <Grid key={inputName} item xs={12}>
                    <input
                      {...register(`${inputName}`, { required: true })}
                      type="text"
                      placeholder="Field data..."
                    />
                  </Grid>
                );
              })}
              <Grid item xs={12}>
                <IconButton onClick={() => addNewInput(i, inputList.length)}>
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
        );
      })}
      <IconButton onClick={() => addNewField(Object.values(monitor).length)}>
        <AddIcon />
      </IconButton>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={handleClose}
          variant="text"
          sx={{ color: "white", borderRadius: "16px", padding: "4px 15px" }}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="text"
          sx={{ color: "white", borderRadius: "16px", padding: "4px 15px" }}
        >
          Save
        </Button>
      </Stack>
    </form>
  );
}
