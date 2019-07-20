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
import { AppBar, Toolbar, Typography, Button, Tooltip } from "@material-ui/core";
import "typeface-roboto";
import { createMuiTheme } from "@material-ui/core/styles";
import { shadows } from "@material-ui/system";
import meandeiffel from "./73560013.png";
import meandeiffel1 from "./images/me/landscape wide/meandeiffel1.png";
import meandeiffel2 from "./images/me/landscape wide/meandeiffel2.png";
import meandeiffel3 from "./images/me/landscape wide/meandeiffel3.png";
import meandeiffel4 from "./images/me/landscape wide/meandeiffel4.png";
import meandeiffel5 from "./images/me/landscape wide/meandeiffel5.png";
import meandeiffel6 from "./images/me/landscape wide/meandeiffel6.png";

import purp from "./F1030003.png";
import melb from "./62060014.png";
import lapool from "./73570013.png";
import lastreet from "./73570003.png";
import tomandsaint from "./images/portrait/73540029.png";

import eiffel from "./images/portrait/73560008.png";
import parishill from "./images/portrait/73550009.png";
import flylow from "./images/wide/flylow.png";
import flylowwave from "./images/wide/flylowwave.png";
import flylowwave3 from "./images/wide/flylowwave3.png";
import flylowwave2 from "./images/wide/flylowwave2.png";

import fly0 from "./images/wide/flylowexperiment1/0.png";
import fly1 from "./images/wide/flylowexperiment1/1.png";
import fly2 from "./images/wide/flylowexperiment1/2.png";
import fly3 from "./images/wide/flylowexperiment1/3.png";
import fly4 from "./images/wide/flylowexperiment1/4.png";
import fly5 from "./images/wide/flylowexperiment1/5.png";
import fly6 from "./images/wide/flylowexperiment1/6.png";
import fly7 from "./images/wide/flylowexperiment1/7.png";
import fly8 from "./images/wide/flylowexperiment1/8.png";
import fly9 from "./images/wide/flylowexperiment1/9.png";
import fly10 from "./images/wide/flylowexperiment1/10.png";

import santamonicapier from "./images/mediums/73540034.png";
import santamonicapier1 from "./images/mediums/7354003425.png";
import santamonicapier2 from "./images/mediums/735400342.png";
import santamonicapier3 from "./images/mediums/7354003423.png";
import santamonicapier4 from "./images/mediums/7354003424.png";

import goldlink2a from "./images/wide/goldlink2(35).png";
import goldlink2b from "./images/wide/goldlink2(45).png";
import goldlink2c from "./images/wide/goldlink2(46).png";
import goldlink2d from "./images/wide/goldlink2(2550).png";
import goldlink2e from "./images/wide/goldlink2(2565).png";

import goldlink3a from "./images/wide/goldlink3a.png";
import goldlink3b from "./images/wide/goldlink3b.png";
import goldlink3c from "./images/wide/goldlink3c.png";

import goldlink from "./images/wide/goldlink.png";
import goldlink2 from "./images/wide/goldlink2.png";
import goldlink3 from "./images/wide/goldlink3.png";
import aig from "./images/funky/62060014.png";
import aigoldlink from "./images/funky/620600142.png";

import ImageScroller from "./ImageScroller.js";

const palettePrimaryLight = "#9cff57";
const palettePrimary = "#1faa00";
const backgroundWhite = "#EAEAEA";
const blackBackground = "#000000";
const Box = styled.h1`${palette}${spacing}${typography}`;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: palettePrimaryLight,
      main: palettePrimary,
      dark: "#1faa00",
      background: {
        paper: "#000",
        default: "#FFF"
      }
    },
    secondary: { main: purple[100] },
    text: {
      primary: "#00FF00",
      secondary: "#FFF"

    }
  },
  typography: { 
    useNextVariants: true,
    overline: {
      textTransform: ""
    }
  },
  root: {
    flexGrow: 1,
    backgroundColor: blackBackground,
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
  },
  header: {
    textAlign: "center"
  }
});



class LiveHowYouWant extends React.Component{
  constructor(props){
    super(props);
    this.handleMouseHoverEvent = this.handleMouseHoverEvent.bind(this);
    this.handleMouseLeaveEvent = this.handleMouseLeaveEvent.bind(this);
    this.state = {
      isHovering: false,
    };
  }
  handleMouseHoverEvent(){
    this.setState({
      isHovering: true
    })
  }
  handleMouseLeaveEvent(){
    this.setState({
      isHovering: false
    })
  }
  render(){
    return (
      
    <Typography component="h1" variant="caption" align="center">
      <a href="#travel"
      style={{ color: theme.palette.text.primary, textDecoration: 'none'}}
      onMouseEnter={this.handleMouseHoverEvent}
      onMouseLeave={this.handleMouseLeaveEvent}>{this.props.title}</a>
      { 
        this.state.isHovering && <Typography component="h1" variant="caption" align="center">{this.props.body}</Typography>
      }
    </Typography>
    
    )
  }
}


class Equals extends React.Component{
  constructor(props){
    super(props);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleMouseHoverEvent = this.handleMouseHoverEvent.bind(this);
    this.handleMouseLeaveEvent = this.handleMouseLeaveEvent.bind(this);
    this.state = {
      isHovering: false,
      isClicked: false,
    };
  }
  handleMouseClick(){
    this.setState({
      isClicked: !this.state.isClicked
    })
  }
  handleMouseHoverEvent(){
    this.setState({
      isHovering: true
    })
  }
  handleMouseLeaveEvent(){
    this.setState({
      isHovering: false
    })
  }
  render(){
    return (
      
    <Typography component="h1" variant="caption" align="center">
      <a href="#travel"
      style={{ color: theme.palette.text.primary, textDecoration: 'none'}}
      onClick={this.handleMouseClick}
      onMouseEnter={this.handleMouseHoverEvent}
      onMouseLeave={this.handleMouseLeaveEvent}>{this.props.title}</a>
      { 
        this.state.isClicked && <Typography component="h1" variant="caption" align="left">{this.props.body}</Typography>
      }
    </Typography>
    
    )
  }
}

const Aux = props => props.children;


function AutoGrid(props) {
  const { classes } = props;
  let main = function(){

    return(<MuiThemeProvider theme={theme}>
    <div className={classes.root} style={{ maxWidth: "100vw" }}>
      <br />
      <Grid
        container
        spacing={0}
        justify="center"
        direction="row"
        alignItems="flex-start"
        style={{ maxWidth: "100vw" }}
      >
        <Grid item xl={1} textAlign="center">
        </Grid>
        <Grid item xl={3} textAlign="center" >
        </Grid>
        <Grid item xl={2} >
          <div style={{ marginTop: "75%" }}>
            <Typography component="h1" variant="overline" style={{ color: theme.palette.text.secondary}} align="center" >
            ANDRÉ COWIE
            </Typography>
            <LiveHowYouWant title="phone" body="+64 21 2367349">
            </LiveHowYouWant>
            <LiveHowYouWant title="email" body="drecowie@gmail.com">
            </LiveHowYouWant>
          </div>
        </Grid>
        <Grid item xl={3} >
        </Grid>
        <Grid item xl={1} />
      </Grid>
    </div>
  </MuiThemeProvider>)};

  const sixpx = useMediaQuery("(min-width: 600px)");
  const ninepx = useMediaQuery("(min-width: 900px)");
  const twelvepx = useMediaQuery("(min-width: 1200px)");
  const nineteentwenty = useMediaQuery("(min-width: 1920px)");

  // Return Mobile Display Below
  if (sixpx === false) {
    return (
      main()
    );
  // Return Small Display Below
  } else if (ninepx === false) {
    return (
      main()
    );
  // Return Medium Display Below
  } else if (twelvepx === false) {
    return(
      main()
    );

   // Return Large Display Below
  } else if ( nineteentwenty === false) {
    return (
      main()
    );
    // Return Desktop Display Below
  } else {
  return (
    main()
    )
  }
}

AutoGrid.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withStyles(theme)(AutoGrid);