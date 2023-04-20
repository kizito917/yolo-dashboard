// External imports
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoadingButton from '@mui/lab/LoadingButton';
import Slide from '@mui/material/Slide';

// Transition used to display dialog on screen
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({dialogValue, handleClose, handleDelete, isLoading, alertData}) {
    // Function to close dialog
    const handleDialogClose = () => {
        handleClose();
    };

    // Function hooked to delete button on dialog
    const handleDialogDelete = () => {
        handleDelete();
    }

    return (
        <div>
            <Dialog
                open={dialogValue}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Delete Data?"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to delete the selected data?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant="contained" onClick={handleDialogClose}>Cancel</Button>
                <LoadingButton variant="contained" onClick={handleDialogDelete} loading={isLoading} color="error">Yes</LoadingButton>
                </DialogActions>
            </Dialog>
        </div>
    );
}
