var React = require("react");
import { bounce } from 'react-animations';
import Radium from 'radium';


var Tours= React.createClass({

    render:function(){
        return(
                /*this will be for info on page2*/
               
                      <div style ={styles} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">Tours</span>
                          <p>I am a very simple card. I am good at containing small bits of information.
                          I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                          <a href="#">This is a link</a>
                          <a href="#">This is a link</a>
                        </div>
                      </div>
                    
            )
    }

    });



const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

module.exports= Tours;