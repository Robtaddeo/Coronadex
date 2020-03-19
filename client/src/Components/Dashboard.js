import React from 'react';
import { Header } from './Header';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from "./Chart";

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
                        <Paper className={classes.paper}>
                        <Chart 
                                title="S&P 500"
                                dataUrl="/Data/SPY.json"
                                series=""
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Chart 
                                title="GOOG"
                                dataUrl="/Data/GOOG.json"
                                series=""
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        {/* <Paper className={classes.paper}><Chart title="Idk what this is"/></Paper> */}
                    </Grid>
                    <Grid item xs={6}>
                        {/* <Paper className={classes.paper}><Chart /></Paper> */}
                    </Grid>
                </Grid>
            </div>
        </div>
    )

};