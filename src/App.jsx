import { Grid, makeStyles } from "@material-ui/core";
import Add from "./components/Add";
import Feed from "./components/Feed";
import LeftBar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import RightBar from "./components/Rightbar";


const useStyles =  makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]:{
      display: "none",
    }
  }
}));


const App = () => {
  const classes  = useStyles();
  return (
      <div>
        <Navbar />
        <Grid container>
          <Grid item sm = {2}xs={2} >
            <LeftBar />
          </Grid>
          <Grid item sm = {7} xs={10}>
            <Feed />
          </Grid>
          <Grid item sm = {3}className={classes.right} >
            <RightBar />
          </Grid>
          <Add />
        </Grid>
        
      
      
      </div>
    );
};

export default App;