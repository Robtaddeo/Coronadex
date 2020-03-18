import React from 'react';
import { Header } from './Header';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    dashboard: {
    },
    root: {
        flexGrow: 1,
        width: '95%',
        margin: '0 auto',
      },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#57606f',
        color: 'white',
        minHeight: '500px'
    },
    
  }));

export const Dashboard = () =>  {
    const classes = useStyles();

    return(
        <div className={classes.dashboard}>
            <Header />
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    <Paper className={classes.paper}>Graph will go here</Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper className={classes.paper}>Another Graph will go here</Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

};