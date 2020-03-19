import React from 'react';
import { Header } from './Header';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from "./Chart";

const styles = theme => ({
    dashboard: {
        color: 'black',
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
    
    });

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            stocks: []
        };
      }

    componentDidMount() {
        let url = this.props.dataUrl;
        console.log('/Data/stocks.json')
        fetch(url)
            .then(res => res.json())
            .then((out) => {
                this.setState({stocks: out});
                console.log(this.state.stocks);
            })
            .catch(err => { throw err });

        console.log(this.state);
    }

    render() {

        const { classes } = this.props;
        console.log(classes);
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

}

export default withStyles(styles, { withTheme: true })(Dashboard);