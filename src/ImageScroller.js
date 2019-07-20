import React, { Component } from "react";



class ImageScroller extends React.Component {
  constructor(props) {
    super(props);
    this.hovering = false;
    this.state = {
      opacity: 1,
      img: 0,
      hovering: false,
      always: props.always
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.hoverImageRotate = this.hoverImageRotate.bind(this);
  }

  hoverImageRotate(){
    clearInterval(this.interval);
    if (this.state.img == this.props.src.length-1) {
      this.nextimg = 0;
    } else {
      this.nextimg = this.state.img + 1;
    }
    if (this.props.always){
      if(this.props.reverseHover && this.hovering){
      }else{
      this.setState(
        {
          img: this.nextimg
        },
        function() {
          this.interval = setInterval(() => this.hoverImageRotate(), this.props.imageRotationSpeed);
        })
      }
    } else if (this.hovering){
      this.setState(
        {
          img: this.nextimg
        },
        function() {
          this.interval = setInterval(() => this.hoverImageRotate(), this.props.imageRotationSpeed);
        })
    }else{
      
    }
  }

  mouseEnter() {
    this.hovering = true;
    this.setState(
      {
        hovering: true
      },
      function() {
        if (this.props.reverseHover){
          this.hoverImageRotate();
        }
      }
    );
  }
  
  mouseLeave() {
    this.hovering = false;
    this.setState(
      {
        img: 0,
        hovering: false
      }
    );
    if (this.props.reverseHover){
      this.hoverImageRotate()
    }
  }

  componentDidMount() {
    if (this.state.always){
      this.hoverImageRotate();
    }
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div style={{ opacity: this.state.opacity }}>
        <img
          src={this.props.src[this.state.img]}
          alt="lel"
          style={{ height: "auto", "width": "100%", "max-height": "100%" }}
          className={this.props.className}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
        />
      </div>
    );
  }
}

export default ImageScroller;
