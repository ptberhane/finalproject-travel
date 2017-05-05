import React, {Component} from "react";
class Display extends Component {
  constructor (props) {
      super(props);

      this.state = {
          videoURL: "./assets/Palm_Trees.mp4"
      }
  }

  render () {
      return (
        <div  id= "display" style={styles}>  
          <video id="background-video"loop autoPlay >
              <source src={this.state.videoURL} type='video/mp4'/>
              <source src={this.state.videoURL} type='video/ogg'/>
          </video>
        </div>  
      )
  }
};

const styles = {    
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: -99,
  height:1200
}


module.exports= Display;