import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles(theme => ({
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
}));
  

export const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleChange = event => {
    console.log(event.target.value);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const indexes = [
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
  ]
    const countries = [
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
]

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

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
                value={"SPX"}
                onChange={handleChange}
                >
                {indexes.map(index => {
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
                value={"USA"}
                onChange={handleChange}
                >
                {countries.map(country => {
                    return(<MenuItem key={country.key} value={country.value}>{country.name}</MenuItem>)
                })}
            </Select>
            </FormControl>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </div>
  );
}