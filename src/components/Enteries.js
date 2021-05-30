import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    btnLink:{
      textDecoration:'none',
    },
   
  }));


   
const Enteries = () => {
    const classes = useStyles();
    const totalEnteries = useSelector(state => state.enteries.totalEnteries);
    return (
        <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">

            <Typography  component="h1" variant="h5" align="center" color="textPrimary" gutterBottom>
              Total ({totalEnteries.length}) Enteries
            </Typography>

            {
              totalEnteries.map((te,index)=>{
                return (
                  <Grid container spacing={3} key={index}>
                    <Grid item xs={6}>
                    {index+1} . {te.name}
                    </Grid>
                    <Grid item xs={6}>
                    {te.eventStatus}
                    </Grid>
                  </Grid>
                )
              })
            }
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link to="/" className={classes.btnLink}>
                  <Button 
                    variant="contained" color="primary">
                    Back To Home
                  </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        </main>
    )
}

export default Enteries
