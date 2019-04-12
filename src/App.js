import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import React, { Component } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { typography, palette, spacing } from "@material-ui/system";
import styled from "styled-components";
import purple from "@material-ui/core/colors/purple";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import "typeface-roboto";
import { createMuiTheme } from "@material-ui/core/styles";
import { shadows } from "@material-ui/system";
import meandeiffel from "./73560013.png";


const palettePrimaryLight = "#9cff57";
const palettePrimary = "#1faa00";
const backgroundWhite = "#EAEAEA";
const Box = styled.h1`${palette}${spacing}${typography}`;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: palettePrimaryLight,
      main: palettePrimary,
      dark: "#1faa00"
    },
    secondary: { main: purple[100] }
  },
  typography: { useNextVariants: true },
  root: {
    flexGrow: 1,
    backgroundColor: backgroundWhite,
    height: "100vh",
    width: ""
  },
  imageBox: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "400px",
    border: "2px solid",
    borderLeftColor: palettePrimary,
    borderTopColor: palettePrimary,
    borderRightColor: palettePrimaryLight,
    borderBottomColor: palettePrimaryLight
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  title: {
    display: "block",
    textAlign: "center"
  }
});

function AutoGrid(props) {
  const { classes } = props;
  const sixpx = useMediaQuery("(min-width: 600px)");
  const ninepx = useMediaQuery("(min-width: 900px)");
  const twelvepx = useMediaQuery("(min-width: 1200px)");
  const nineteentwenty = useMediaQuery("(min-width: 1920px)");

  // Return Mobile Display Below
  if (sixpx === false) {
  return <div>></div>;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <Grid container spacing={8}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h1" gutterBottom >
                  small
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          </MuiThemeProvider>
      </div>
    );

  // Return Small Display Below
  } else if (ninepx === false) {
    return (
      <div className={theme.root}>
          <Grid container spacing={8}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h1" gutterBottom >
                  medium
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
      </div>
    );
  // Return Medium Display Below
  } else if (twelvepx === false) {
    return(
      <div className={theme.root}>
          <Grid container spacing={8}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h1" gutterBottom >
                  larges
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>

      </div>
    );

   // Return Large Display Below
  } else if ( nineteentwenty === false) {
    return (
      <div className={theme.root}>
        <Grid container spacing={8}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h1" gutterBottom>
                large
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
    );

    // Return Desktop Display Below
  } else {
  return (

    <MuiThemeProvider theme={theme}>
      <div className={classes.root} style={{ maxWidth: "100vw" }}>
        <Grid
          container
          spacing={0}
          justify="center"
          direction="row"
          alignItems="center"
          style={{ maxWidth: "100vw" }}
        >
          <Grid item xl={3} textAlign="center" ></Grid>
          <Grid item xl={5}>
            <div style={{ marginTop: "1em" }}>
              <Typography
                component="h2"
                className={classes.header}
                variant="h4"
              >
                André
              </Typography>
              <div style={{ marginLeft: "3em" }} />
            </div>
          </Grid> 
          <Grid item xs={0} sm={3} xl={4} textAlign="center" />
        </Grid>
        <br />
        <Grid
          container
          spacing={0}
          justify="center"
          direction="row"
          alignItems="center"
          style={{ maxWidth: "100vw" }}
        >
          <Grid item xl={4} textAlign="center">
            <Card className={classes.card} raised={true}>
              <CardMedia
                component="img"
                alt="Alts for awesome images"
                className={classes.media}
                height="auto"
                image={meandeiffel}
                title="Hey"
              />
            </Card>
          </Grid>
          <Grid item xs={4} sm={3} md={2} lg={2} xl={5} />
        </Grid>

        <Grid
          container
          spacing={0}
          justify="center"
          direction="row"
          alignItems="center"
          style={{ maxWidth: "100vw" }}
        >
          <Grid item xs={3} />
          <Grid item xs={3}>
            <div className={classes.imageBorder} />
          </Grid>

          <Grid item xs={3}>
            <div className={classes.imageBorder} />
          </Grid>
          <Grid item xs={3}>
            <div className={classes.imageBorder} />
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
  }
}

AutoGrid.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withStyles(theme)(AutoGrid);

// class App extends Component {

//   render() {
//     return (
//       <div className={props.root}>
//       <Grid container spacing={24}>
//         <Grid item xs={4}>
//           <Paper className={props.paper}>xs</Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={props.paper}>xs</Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={props.paper}>xs</Paper>
//         </Grid>
//       </Grid>
//       <Grid container spacing={24}>
//         <Grid item xs>
//           <Paper className={props.paper}>xs</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={props.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={props.paper}>xs</Paper>
//         </Grid>
//       </Grid>
//     </div>

// <div className="container">
//   <div className="it">
//       <img src={ logo } className="App-logo" alt="logo" />
//     </div>
//     <p className="My-name">
//      <code>Andre</code>
//     </p>
//     <a
//       className="App-link"
//       href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>

// </div>
//     );
//   }
// }

// export default App;
