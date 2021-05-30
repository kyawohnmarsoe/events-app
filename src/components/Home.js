import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {useSelector,useDispatch} from 'react-redux';
import {fetchEvents} from '../redux';
import Event from './Event';
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    page:{
      display:'inline-block',
      marginTop: theme.spacing(4),
    },
    btnLink:{
      textDecoration:'none',
    },
    
  }));

const Home = () => { 
  const classes = useStyles();
  const events = useSelector(state=>state.events);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchEvents())
  },[])

  //pagination
  const[currentPage,setCurrentPage]=useState(1);
  const postsPerPage= 10;
  const count = Math.ceil(events.eventsInfo.length/postsPerPage);
  const indexOfLastPost = currentPage*postsPerPage;
  const indexOfFirstPost = indexOfLastPost-postsPerPage;
  const currentPosts = events.eventsInfo.slice(indexOfFirstPost,indexOfLastPost)
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const renderContent=()=>{
      if (events.loading){
        return <center className={classes.heroContent}><CircularProgress /></center>
      }
      if (events.error){
        return(
          <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             {events.error}!
            </Typography>
            </div>
        )
      }
      return (
        <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Join Our Events!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <a className={classes.btnLink} href="https://api.whatsapp.com/send?phone=6588888888" target="_blank" rel="noreferrer">
                  <Button 
                    variant="contained" color="primary">
                    +65 8888 8888
                  </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
         {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {currentPosts.map((cp,index) => (
              <Event card={cp} key={index}/>
             ))}
          </Grid>
        </Container>
        <center >
        <Pagination onChange={handleChange} count={count} color="primary" className={classes.page}/>
        </center>
        
      </main>
      )

  }
 
    return (
        <>
        {renderContent()}
        </>
    )
}

export default Home
