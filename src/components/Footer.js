import React from 'react'
import {Typography,Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles= makeStyles((theme)=>({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
      </footer>
    )
}

export default Footer
