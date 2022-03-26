import {
  Grid,
  IconButton,
  Stack,
  utton,
  Typography,
  Button,
} from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRef, useState } from "react";
import Box from "../components/Box";
import styles from "../styles/Home.module.css";
import MBox from "@mui/material/Box";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ClearIcon from "@mui/icons-material/Clear";
import BasicModal from "./Modal";
import AddLibForm from "./Forms/AddLib";
import { deleteBoard, deleteSet } from "../redux/actions/boardActions";

function LinkBox(props) {
  const [copy, setCopy] = useState(false);
  const linkRef = useRef();

  function copyContent(e) {
    let content = linkRef.current.textContent;
    navigator.clipboard.writeText(content);
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  }
  return (
    <MBox
      onClick={(e) => copyContent(e)}
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
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography fontSize={15} fontWeight="bold">
          {props.linkName}
        </Typography>
        {copy && (
          <Typography sx={{ transition: "0.5s" }} fontSize={12}>
            Copied!
          </Typography>
        )}
      </Stack>
      <div ref={linkRef}>
        {props.linkData.map((link) => (
          <Stack
            key={link}
            direction="row"
            sx={{
              padding: "4px 0",
              marginBottom: "2px",
            }}
          >
            <Typography fontSize={14} noWrap>
              {link + "\n"}
            </Typography>
          </Stack>
        ))}
      </div>
    </MBox>
  );
}

function Board(props) {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const handleCloseForm = () => setEditOpen(false);
  const handleOpenForm = () => setEditOpen(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function copyAll() {
    let allLinks = "";
    Object.values(props.links).map((link) => {
      link.map((text) => (allLinks += "\n" + text));
    });
    navigator.clipboard.writeText(allLinks);
  }
  return (
    <Grid className={styles.board} item xs={12} sm={6} lg={4} xl={3}>
      <BasicModal open={open} handleClose={handleClose}>
        <Typography textAlign="center" fontSize={18} marginBottom={2}>
          Are you sure to delete {props.name}?
        </Typography>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button
            variant="text"
            onClick={handleClose}
            sx={{ color: "white", borderRadius: "16px", padding: "4px 15px" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() =>
              deleteBoard({ boardName: props.name, category: props.category })
            }
            variant="text"
            sx={{ color: "white", borderRadius: "16px", padding: "4px 15px" }}
          >
            Delete
          </Button>
        </Stack>
      </BasicModal>
      <BasicModal open={editOpen} handleClose={handleCloseForm}>
        <AddLibForm
          handleClose={handleCloseForm}
          defValue={{ name: props.name, links: props.links }}
          category={props.category}
        />
      </BasicModal>
      <Box style={{ flex: 1 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          marginBottom={2}
        >
          <Typography noWrap fontWeight="bold">
            {props.name}
          </Typography>
          <div>
            <IconButton
              onClick={copyAll}
              aria-label="clipboard"
              title="Copy all"
              sx={{
                color: "#313334",
              }}
            >
              <IntegrationInstructionsIcon
                sx={{
                  "&:hover": {
                    color: "white",
                  },
                }}
              />
            </IconButton>
            <IconButton
              onClick={handleOpenForm}
              aria-label="clipboard"
              title="Edit"
              sx={{
                color: "#313334",
              }}
            >
              <ModeEditIcon
                sx={{
                  "&:hover": {
                    color: "white",
                  },
                }}
              />
            </IconButton>
            <IconButton
              onClick={handleOpen}
              aria-label="clipboard"
              title="Delete"
              sx={{
                color: "#313334",
              }}
            >
              <ClearIcon
                sx={{
                  "&:hover": {
                    color: "white",
                  },
                }}
              />
            </IconButton>
          </div>
        </Stack>
        {Object.entries(props.links).map(([linkName, linkData]) => (
          <LinkBox
            key={linkName}
            linkName={linkName}
            linkData={linkData}
          ></LinkBox>
        ))}
      </Box>
    </Grid>
  );
}

function BoardCover(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editOpen, setEditOpen] = useState(false);
  const handleCloseForm = () => setEditOpen(false);
  const handleOpenForm = () => setEditOpen(true);

  return (
    <div
      style={{
        marginBottom: "30px",
      }}
    >
      <BasicModal open={open} handleClose={handleClose}>
        <Typography textAlign="center" fontSize={18} marginBottom={2}>
          Are you sure to delete {props.libName}?
        </Typography>
        <Stack spacing={2} direction="row" justifyContent="center">
          <Button
            variant="text"
            onClick={handleClose}
            sx={{ color: "white", borderRadius: "16px", padding: "4px 15px" }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => deleteSet({ category: props.libName })}
            variant="text"
            sx={{ color: "white", borderRadius: "16px", padding: "4px 15px" }}
          >
            Delete
          </Button>
        </Stack>
      </BasicModal>
      <BasicModal open={editOpen} handleClose={handleCloseForm}>
        <AddLibForm handleClose={handleCloseForm} category={props.libName} />
      </BasicModal>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ "&:hover #deleteSet": { visibility: "visible" } }}
      >
        <Typography fontSize={22}>{props.libName}</Typography>
        <Stack direction="row" alignItems="center">
          <IconButton
            onClick={() => setOpen(true)}
            id="deleteSet"
            aria-label="clipboard"
            sx={{
              color: "#313334",
              visibility: "collapse",
            }}
          >
            <DeleteIcon
              sx={{
                "&:hover": {
                  color: "white",
                },
              }}
            />
          </IconButton>
          <IconButton
            onClick={handleOpenForm}
            aria-label="clipboard"
            sx={{
              color: "#313334",
            }}
          >
            <AddIcon
              sx={{
                "&:hover": {
                  color: "white",
                },
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Grid
        container
        spacing={2}
        sx={{
          paddingTop: 2,
        }}
      >
        {Object.entries(props.lib).map(([name, links]) => (
          <Board
            key={name}
            name={name}
            links={links}
            category={props.libName}
          ></Board>
        ))}
      </Grid>
    </div>
  );
}

export { BoardCover };
