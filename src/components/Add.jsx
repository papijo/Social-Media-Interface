import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";
import MuiAlert from '@material-ui/lab/Alert'



const useStyles =  makeStyles((theme) => ({
    fab:{
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top:0,
        bottom:0,
        right: 0,
        left: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]:{
           height: "100vh",
           width:"100vh"   
        },
    },
    form:{
        padding: theme.spacing(2),
    },
    item:{
        marginBottom: theme.spacing(3)
    } 
}));

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}





const Add = () => { 
  const classes  = useStyles();
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  return (
      <>
        <Tooltip title="Add" arrow aria-label="add" onClick={() => setOpen(true)} >
            <Fab color="primary" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>
        <Modal open={open}>
            <Container className={classes.container}>
                <form className={classes.form} autoComplete="off">
                    <div className={classes.item}>
                        <TextField id="standard-basic" label="Title" size="small" style={{width: "100%"}} />
                    </div>
                    <div className={classes.item}>
                        <TextField
                        id="outlined-multiline-static"
                        multiline  
                        rows = {4}
                        defaultValue="Tell Your Story....."
                        variant = "outlined"                   
                        label="Description" 
                        size="small" 
                        style={{width: "100%"}} 
                        />
                    </div>
                    <div className={classes.item}>
                        <TextField select label = "Visibility" value="Public">
                            <MenuItem value="Public">Public</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                            <MenuItem value="Unlisted">Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                    <FormLabel component="legend">Who can comment?</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Everyone" control={<Radio size = "small" />} label="Everyone" />
                        <FormControlLabel value="My Friends" control={<Radio size = "small" />} label="My Friends" />
                        <FormControlLabel value="Nobody" control={<Radio size = "small" />} label="Nobody" />
                        <FormControlLabel
                            value="Custom"
                            disabled
                            control={<Radio size = "small"/>}
                            label="Custom (Premium)"
                        />
                    </RadioGroup>
                    </div>
                    <div className={classes.item}>
                        <Button variant="outlined" color="primary" style={{marginRight: 20}} onClick={() => setOpenAlert(true)}>Post</Button>
                        <Button variant="outlined" color="secondary" onClick={() => setOpen(false)} >Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>

        <Snackbar 
            open={openAlert} 
            autoHideDuration={2000} 
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            This is a success message!
            </Alert>
      </Snackbar>

      </>
  );
};

export default Add;