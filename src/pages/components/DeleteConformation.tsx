import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useState } from "react";

export const DeleteConformation = ({ transaction }) => {
  const deleteTransaction = async () => {
      const response = await axios.delete(
        `http://localhost:8080/delete-transaction?transactionId=${transaction._id}`
      );
      console.log(response);
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <>
        <Button onClick={handleClickOpen}>
          <DeleteIcon />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirm Delete?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this transaction
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button>Cancel</Button>
            <Button onClick={deleteTransaction} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
