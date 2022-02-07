import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";


const useStyles =  makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555"
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16
  }
}));


const RightBar = () => {
  const classes  = useStyles();
  return (<Container className = {classes.container}>
    <Typography className= {classes.title}  gutterBottom>Friends</Typography>
    <AvatarGroup max={6} style={{marginBottom:20}} >
      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
      <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/6.jpg" />
      <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/7.jpg" />
      <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/8.jpg" />
    </AvatarGroup>

    <Typography className= {classes.title}  gutterBottom>Gallery</Typography>

    <ImageList style={{marginBottom: 20}} cols={2} rowHeight={100}>
       
          <ImageListItem >
            <img
              src="https://mui.com/static/images/image-list/breakfast.jpg"
              alt="img"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://mui.com/static/images/image-list/vegetables.jpg"
              alt="img"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://mui.com/static/images/image-list/burgers.jpg"
              alt="img"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://mui.com/static/images/image-list/camera.jpg"
              alt="img"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://mui.com/static/images/image-list/morning.jpg"
              alt="img"
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://mui.com/static/images/image-list/hats.jpg"
              alt="img"
            />
          </ImageListItem>
      </ImageList>

      <Typography className= {classes.title}  gutterBottom>Categories</Typography>
      <Link href="#" className={classes.link} variant = "body2">Sport</Link>
      <Link href="#" className={classes.link} variant = "body2">Food</Link>
      <Divider flexItem style={{marginBottom:5}} />
      <Link href="#" className={classes.link} variant = "body2">Music</Link>
      <Link href="#" className={classes.link} variant = "body2">Movies</Link>
      <Divider flexItem style={{marginBottom:5}} />
      <Link href="#" className={classes.link} variant = "body2">Science</Link>
      <Link href="#" className={classes.link} variant = "body2">Life</Link>

  </Container>);
};

export default RightBar;