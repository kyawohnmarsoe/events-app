import _ from 'lodash'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import {useSelector,useDispatch} from 'react-redux';
import{addToEnteries,removeFromEnteries} from '../redux'

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: theme.spacing(2),
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },

  }));

const liveAt=(goLiveAt)=>{
    return format(new Date(goLiveAt),"dd/MM/yyyy")
}


const Event = ({card}) => {
    const classes = useStyles();
    const totalEnteries = useSelector(state => state.enteries.totalEnteries);
    const dispatch = useDispatch();

    const dispatchAdd=(card)=>{
      var newTotalEnteries = [...totalEnteries,card]
      dispatch(addToEnteries(newTotalEnteries))
      renderButton()
    }
    const dispatchRemove=(card)=>{
      var newTotalEnteries = totalEnteries.filter(te=> te.eventID !== card.eventID)
      dispatch(removeFromEnteries(newTotalEnteries))
      renderButton()
    }

    const renderButton=(id)=>{
     const hasID = _.findIndex(totalEnteries, function(te) { return te.eventID === id }) 
     if(hasID>=0){
      return (
        <Button onClick={()=> dispatchRemove(card)} size="small" variant="contained" color="default" >
          Remove From Entries
        </Button>
      )
     }
     return (
      <Button onClick={()=> dispatchAdd(card)} size="small" variant="contained" color="primary" >
       Add To Entries
      </Button>
      )
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.name}
            </Typography>
            <Typography color="primary">
              {card.eventStatus}
            </Typography>
            <Typography variant="body2">
              Go Live At : {liveAt(card.goLiveAt)} <br/>
              Match Series : {card.matchSeries}  <br/>
              Tournament Name : {card.tournament.name} <br/>
              Winning Prize : {card.prizePools.winningsPrizePoolAmount} <br/>
              Bonus Prize : {card.prizePools.bonusPrizePoolAmount}
            </Typography>
          </CardContent>
          <CardActions >
           {renderButton(card.eventID)}
          </CardActions>
        </Card>
      </Grid>
    )
}

export default Event
