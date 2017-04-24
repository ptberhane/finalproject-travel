
import React, {Component} from "react";
class Landing extends Component {
   constructor (props) {
       super(props);

       this.state = {
           videoURL: "../public/assets/CastAway.mp4"
       }
   }

   render () {
       return (
         <div style={styles} className="iframe">  
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
 }

// const video = {

//  minWidth: '100%',
//  maxHeight: '740px',
//  width: 'auto',
//  height: 'auto',
//  padding: '-5px'

// }

module.exports= Landing;


