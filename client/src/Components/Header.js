import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = theme => ({
    navbar: {
        backgroundColor: '#2c3e50',
        marginBottom: "20px"
    },
    grow: {
        flexGrow: 1,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        color: 'white'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    menuButton: {
        marginRight: theme.spacing(2),
        justifyContent: 'flex-end',
        float: "right"
    },
    label: {
        fontSize: '15px',
        display: 'none',
        marginRight: '10px',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
    },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
    },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    }
});

class Header extends React.Component {

  constructor() {
    super();
    this.handleIndexChange = this.handleIndexChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.indexes = [
      {
          "key" : "SPX",
          "name" : "S&P 500",
          "value" : "SPX",
      },
      {
        "key" : "DJIA",
        "name" : "Dow Jones",
        "value" : "DJIA",
      }
    ];
    
    this.countries = [
        {
            "key" : "China",
            "name" : "China",
            "value" : "China",
        },
        {
        "key" : "Italy",
        "name" : "Italy",
        "value" : "Italy",
        },
        {
            "key" : "USA",
            "name" : "USA",
            "value" : "USA",
        }
      ];

      this.state = {
        country: "USA",
        index: "SPX"
      };
  }

  handleIndexChange(event){
    this.setState({
      index: event.target.value
    }, () => this.props.sendData(this.state));
  }

  handleCountryChange(event){
    this.setState({
      country: event.target.value
    }, () => this.props.sendData(this.state));
  }




  render(){
    let { classes } = this.props;

    return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography className={classes.label} variant="h6" noWrap>
              Exchange
            </Typography>
            <FormControl className={classes.formControl}>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.index}
                  onChange={this.handleIndexChange}
                  >
                  {this.indexes.map(index => {
                      return(<MenuItem key={index.key} value={index.value}>{index.name}</MenuItem>)
                  })}
              </Select>
              </FormControl>
              
              <Typography className={classes.label} variant="h6" noWrap>
                  Country
              </Typography>
              <FormControl className={classes.formControl}>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.country}
                  onChange={this.handleCountryChange}
                  >
                  {this.countries.map(country => {
                      return(<MenuItem key={country.key} value={country.value}>{country.name}</MenuItem>)
                  })}
              </Select>
              </FormControl>
          </Toolbar>
          </AppBar>
      </div>
    );
  }

}

export default withStyles(styles, { withTheme: true })(Header);