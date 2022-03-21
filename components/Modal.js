import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  width: "fit-content",
  maxWidth: "90%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "rgba(39, 41, 43, 1)",
  borderRadius: "16px",
  color: "white",
  boxShadow: 24,
  padding: "20px",
  outline: "none",
  maxHeight: "90vh",
  overflow: "auto",
};

export default function BasicModal({ children, open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          paddingY: 3,
        }}
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
