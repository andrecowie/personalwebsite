import React, { Component } from 'react';

class ImageScroller extends React.Component{
    constructor() {
        this.state = {
          opacity: 1
        }
      }
      
      mouseEnter() {
          console.log('mouse enter')
          this.setState({opacity: 0.5})
      }
      
      mouseLeave() {
          console.log('mouse leave')
          this.setState({opacity: 1})
      }
      
          render() {
            return(<div style={{opacity: this.state.opacity}}>
              <img src={src} onMouseEnter={
                this.mouseEnter} onMouseLeave={
                  this.mouseLeave} />
            </div>)
          }
}


export default ImageScroller;