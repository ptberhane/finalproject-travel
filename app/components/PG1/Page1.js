// Include React
var React = require("react");
var Search = require("./Search");
var Landing = require("./landing");
var Panel = require("./Panel");
var Trendinglocations = require("./Trendinglocations");

var Page1 = React.createClass({

 // Here we render the function
  // render: function() {

//    return (
//         <div>
//        <Landing />
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
          <Search />
            {/*<div className="col s4 offset-s4">*/}
            <div className="col s4 offset-l2 s10">
              <Panel/>
            </div>
            <div>
              <Landing />
            </div>
          </div>
          <div className="container2">
            <div className="row">
              <Trendinglocations/>
             </div>
          </div>
        </div>

      
          
  );
}
});

module.exports = Page1;

