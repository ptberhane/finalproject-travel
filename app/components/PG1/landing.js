var React = require("react");
var Style = require("./assets/landing.css");
/*import Code from './assets/landing-java.js';*/

var Landing= React.createClass({

	render:function(){
		return(
   <div className={Style.homepage-hero-module}>
    <div className={Style.video-container}>
        <div className={Style.filter}></div>
        <video autoplay loop className={Style.fillWidth}>
            <source src="./assets/CastAway.mp4" type="video/mp4" />
            <source src="./assets/CastAway.webm" type="video/webm" />
        </video>
        <div className={Style.poster Style.hidden}>
            <img src="./assets/CastAway.jpg" alt=""></img>
        </div>
      </div>
  </div>

    );
  }
});



module.exports= Landing;