// Include React
var React = require("react");

var Landing = require("./landing");
var Panel = require("./Panel");
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
       <div>
        <div className="row">
            <div className="col s4">
              <Panel/>
            </div>
            <div>
              <Landing />
            </div>
          </div>

          <div className="container">
            <div className="row">
              <Trendinglocations/>
      	     </div>
          </div>
          </div>
          
  );
}
});

module.exports = Page1;


