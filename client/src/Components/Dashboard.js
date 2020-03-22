import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from "./Chart";
import Header from './Header';

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
        this.getData = this.getData.bind(this);
        this.state = {
            stocks: [],
            country: "USA",
            index: "SPX"
        };
      }

    componentDidMount(){
        let url = '/Data/stocks.json';
        fetch(url)
            .then(res => res.json())
            .then((out) => {
                // console.log(out);
                this.setState({stocks: out});
            })
            .catch(err => { throw err; });
    }

    getData(val){
        console.log("val: " + val.index);
        this.setState({
            country: val.country,
            index: val.index
        });
        console.log("index: " + this.state.index);
        this.forceUpdate();
    }
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.dashboard}>
                <Header sendData={this.getData}/>
                <div className={classes.root}>
                    <Grid container spacing={2}>
                        {this.state.stocks.map(stock => {
                            if(this.state.index === stock.index){
                                return(                           
                                    <Grid item key={stock.ticker} xs={6}>
                                    <Paper key={stock.ticker} className={classes.paper}>
                                        <Chart 
                                            key={stock.ticker}
                                            title={stock.name}
                                            dataUrl={`/Data/${stock.ticker}.json`}
                                            series=""
                                        />
                                    </Paper>
                                </Grid>)
                            }
                            else return "";
                        })}
                    </Grid>
                </div>
            </div>
        )

    };



}

export default withStyles(styles, { withTheme: true })(Dashboard);