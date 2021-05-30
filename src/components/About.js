import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
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

const About = () => {
    const classes = useStyles();
    return (
        <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" align="justify" color="textSecondary" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet enim tortor at auctor urna nunc id. Potenti nullam ac tortor vitae purus. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Eget duis at tellus at urna. Pellentesque diam volutpat commodo sed. Sagittis eu volutpat odio facilisis mauris sit amet. Diam sit amet nisl suscipit adipiscing. Turpis massa tincidunt dui ut ornare lectus sit amet est. Nisi scelerisque eu ultrices vitae.
            </Typography>
            <Typography variant="body1" align="justify" color="textSecondary" paragraph>
            Ornare arcu odio ut sem nulla pharetra diam sit amet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sem nulla pharetra diam sit amet nisl. Ac feugiat sed lectus vestibulum mattis. Eget felis eget nunc lobortis. Nullam ac tortor vitae purus faucibus. Netus et malesuada fames ac turpis. Nisl pretium fusce id velit. Convallis convallis tellus id interdum velit. Massa placerat duis ultricies lacus sed turpis tincidunt.
            </Typography>
            <Typography variant="body1" align="justify" color="textSecondary" paragraph>
            Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Non sodales neque sodales ut etiam. Vitae congue eu consequat ac felis donec. Nec feugiat nisl pretium fusce id velit ut. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Id venenatis a condimentum vitae sapien. Consequat ac felis donec et odio pellentesque diam. Nisi lacus sed viverra tellus in. Eu turpis egestas pretium aenean pharetra. Mus mauris vitae ultricies leo. Proin libero nunc consequat interdum varius sit amet mattis. Ut placerat orci nulla pellentesque dignissim enim. Sollicitudin nibh sit amet commodo nulla. In mollis nunc sed id semper risus in. Metus aliquam eleifend mi in nulla. Amet venenatis urna cursus eget nunc scelerisque.
            </Typography>    
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <a className={classes.btnLink} href="https://api.whatsapp.com/send?phone=6588888888" target="_blank" rel="noreferrer">
                  <Button variant="contained" color="primary">
                    + 65 8888 8888
                  </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        </main>
    )
}

export default About
