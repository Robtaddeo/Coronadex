import React from 'react';
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
        let url = '/Data/stocks.json';
        fetch(url)
            .then(res => res.json())
            .then((out) => {
                // console.log(out);
                this.setState({stocks: out});
            })
            .catch(err => { throw err });

    }

    render() {
        console.log("yessir");
        console.log(this.state);
        const { classes } = this.props;
        console.log(classes);
        return(
            <div className={classes.dashboard}>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        {this.state.stocks.map(stock => (
                            <Grid item xs={6}>
                                <Paper className={classes.paper}>
                                    <Chart 
                                        title={stock.name}
                                        dataUrl={`/Data/${stock.ticker}.json`}
                                        series=""
                                    />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        )

    };

}

export default withStyles(styles, { withTheme: true })(Dashboard);