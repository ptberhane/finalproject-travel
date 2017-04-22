// Include React
var React = require("react");

var Landing = require("./landing");
var Panel = require("./Panel");
var Search = require("./Search");
var Trendinglocations = require("./Trendinglocations");

var Page1 = React.createClass({

 // Here we render the function
  // render: function() {

//    return (
//         <div>
//  		  <Landing />
//           <Panel/>
//           <Search/>
//           <Trendinglocations/>
//         </div>
//   );
// }
// });

// Here we render the function
  render: function() {

   return (
        <div className="row">
        	 <div className="col l8 green">
          <Search/>
          </div>
          <div className="col l4 offset-l8 green">
          <Panel/>
         
          </div>
          <Trendinglocations/>
      	</div>
          
  );
}
});

module.exports = Page1;


