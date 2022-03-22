import { Button, Stack } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { addNewSet } from "../../redux/actions/boardActions";
import styles from "./form.module.css";

function AddSetForm({ handleClose }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    addNewSet({ category: data.newSet });
    handleClose();
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register(`newSet`, { required: true })}
        type="text"
        style={{ borderColor: "#313334" }}
        placeholder="Set name..."
      />
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

export default AddSetForm;
