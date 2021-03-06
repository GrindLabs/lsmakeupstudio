import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import Feed from '../components/feed';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    background: '#000',
  },
  gallery: {
    paddingTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container fixed>
        <Typography align="center" variant="h4" component="h2" color="primary">
          Confira o meu trabalho
        </Typography>
        <Typography
          align="center"
          variant="subtitle1"
          component="h2"
          color="primary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras viverra
          tortor eget diam euismod eleifend. Pellentesque sollicitudin non lorem
          at.
        </Typography>
        <div className={classes.gallery}>
          <Feed />
        </div>
        <Grid container justify="center">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Carregar mais
          </Button>
        </Grid>
      </Container>
    </section>
  );
};

export default Portfolio;
