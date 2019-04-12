import React, { Component } from "react";



class ImageScroller extends React.Component {
  constructor(props) {
    super(props);
    this.hovering = false;
    this.state = {
      opacity: 1,
      img: 0,
      hovering: false
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.randomSrc = this.randomSrc.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  randomSrc() {
    this.setState({ });
  }

  mouseEnter() {
    console.log(this.state.hovering);
    this.hovering = true;
    this.setState(
      {
        hovering: true,
        img: Math.floor(Math.random() * this.props.src.length)
      },
      function() {
        console.log("this state hovering equals true");
      }
    );
  }
  

  mouseLeave() {
    this.hovering = false;
    this.setState(
      {
        hovering: false
      },
      function() {
        console.log("this state hovering equals false");
      }
    );
  }
  componentDidMount() {
    console.log("didmount");
    if (this.hovering){
      this.interval = setInterval(() => this.setState({ img: Math.floor(Math.random() * this.props.src.length) }), 1000);
    }
  }
  componentWillUnmount() {
    console.log("willumount")
    clearInterval(this.interval)
  }

  // componentDidUpdate() {
  //   if (this.state.hovering){
  //       this.randomSrc();
      
      
  //   }
  // }
  
  render() {
    return (
      <div style={{ opacity: this.state.opacity }}>
        <img
          src={this.props.src[this.state.img]}
          alt="lel"
          style={{ height: "auto", "max-width": "100%", "max-height": "100%" }}
          className={this.props.className}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        />
      </div>
    );
  }
}

export default ImageScroller;
