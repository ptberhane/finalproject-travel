var React = require("react");
import { Parallax } from 'react-parallax';


// import Code from './assets/landing-java.js';

// var Landing= React.createClass({

// 	render: function(){
// 		return(
// 			<div>
//    				<div class="parallax-container">
//       				<div class="parallax"><img src="../public/assets/CastAway.jpg"></img></div>
//     			</div>
//    			</div>
//     );
//   }
// });


var Landing = React.createClass({
  render: function () {
    return (
      <div>

	    <Parallax bgImage="../public/assets/CastAway.jpg" strength={1000}>
		  <br/>
		
		</Parallax>
      </div>
    )
  }
});


// IFRAME
// var React = require("react");
// var Iframe = require("iframe");


// var Landing= React.createClass({

//     render:function(){
//         return(


// <Iframe url="https://www.youtube.com/watch?v=8_zxVotvh8g"
//        width="450px"
//        height="450px"
//        display="initial"
//        position="relative"
//        allowFullScreen/>

 

//    );
//  }
// });



// module.exports= Landing;




module.exports= Landing;