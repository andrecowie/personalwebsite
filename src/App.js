import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import React from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import purple from "@material-ui/core/colors/purple";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import "typeface-roboto";
import { createMuiTheme } from "@material-ui/core/styles";
import Markdown from './Markdown';



const palettePrimaryLight = "#9cff57";
const palettePrimary = "#1faa00";
const blackBackground = "#000000";


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

    height: "100%",
    minHeight: "100vh",
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

class MyMarkdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      markdown: "# Loading"
    }
  }

  componentDidMount(){

    fetch("/markdown/note.md", {mode: 'no-cors'})
    .then(response => {
      return response.text();
    })
    .then(text => {
      this.setState({
        markdown: text
      })
    })
    .catch(error => {console.log('request failed', error); });
  }

  render(){
    return(
      <Markdown children={this.state.markdown}></Markdown>
    )
  }
}

class FirstPost extends React.Component{
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
      isClicked: !this.state.isClicked,
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
          <Button align="center" onClick={this.handleMouseClick}>    
              <Typography 
            component="h1"
            variant="overline"
            style={{ color: theme.palette.primary.background.paper}}
            align="center">?</Typography></Button>)
          }
}

class LiveHowYouWant extends React.Component{
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
      isClicked: !this.state.isClicked,
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
      <div>
    <Typography component="h1" variant="caption" align="center">
      <a href="#travel"
      style={{ color: theme.palette.text.primary, textDecoration: 'none'}}
      onMouseEnter={this.handleMouseHoverEvent}
      onMouseLeave={this.handleMouseLeaveEvent}
      onClick={this.handleMouseClick}>{this.props.title}</a>
      
    </Typography>
    {this.state.isClicked && <Typography component="h1" variant="caption" align="center">{this.props.body}</Typography>}
    </div>
    )
  }
}

function AutoGrid(props) {
  const { classes } = props;
  let main = function(){

    return(
    <MuiThemeProvider theme={theme}>
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
        <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
        
        </Grid>
        <Grid 
        item xl={1}  lg={1} md={1} sm={1} xs={1}  ></Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={5}>
          <div style={{ marginTop: "30vh" }}>
            <Typography 
            component="h1"
            variant="overline"
            style={{ color: theme.palette.text.secondary}}
            align="center">
            ANDRÉ COWIE
            </Typography>
            <LiveHowYouWant
            align="center"
            title="phone"
            body="+64212367349"></LiveHowYouWant>
            <LiveHowYouWant
             title="email" align="center"
             body="drecowie@gmail.com"></LiveHowYouWant>
             
          </div>
          <MyMarkdown></MyMarkdown>
        </Grid>
        <Grid 
        item xl={1}  lg={1} md={1} sm={1} xs={1}></Grid>
        <Grid 
        item xl={2}  lg={2} md={2} sm={2} xs={2}>
        <FirstPost></FirstPost>
       
        <FirstPost></FirstPost>
        <FirstPost></FirstPost>
        <FirstPost></FirstPost>
      </Grid>
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
    );
  }
}


export default withStyles(theme)(AutoGrid);