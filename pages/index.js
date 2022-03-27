import Layout from "../components/layout";
import { BoardCover } from "../components/BoardComponents";
import BasicModal from "../components/Modal";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import AddSetForm from "../components/Forms/AddSet";
import { useState } from "react";

const styles = {
  buttonStyle: {
    color: "black",
    backgroundColor: "rgba(31, 32, 33, 0.9)",
    position: "fixed",
    right: "20px",
    bottom: "20px",
    "&:hover svg": {
      color: "white",
    },
    "&:hover": {
      backgroundColor: "rgba(31, 32, 33, 0.9)",
    },
  },
  iconStyle: {
    width: "30px",
    height: "30px",
  },
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let boards = useSelector((state) => state.boards);
  return (
    <Layout style={{ paddingBottom: "40px" }}>
      <BasicModal open={open} handleClose={handleClose}>
        <AddSetForm handleClose={handleClose} />
      </BasicModal>
      {Object.entries(boards).map(([libName, lib]) => {
        return (
          <BoardCover key={libName} libName={libName} lib={lib}></BoardCover>
        );
      })}
      {Object.entries(boards).length == 0 && (
        <p style={{ textAlign: "center" }}>You have not got any boards...</p>
      )}
      <IconButton
        onClick={handleOpen}
        aria-label="clipboard"
        sx={styles.buttonStyle}
      >
        <AddIcon sx={styles.iconStyle} />
      </IconButton>
    </Layout>
  );
}
