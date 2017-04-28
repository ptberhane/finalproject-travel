// Include React
var React = require("react");
var Search = require("./Search");
var Landing = require("./landing");
var Panel = require("./Panel");
var Navbar = require("./Navbar");
var Trendinglocations = require("./Trendinglocations");

var Page1 = React.createClass({


// Here we render the function
  render: function() {

   return (
       <div className="page1">
        <div className="row">
          <Landing />
          <Navbar />
            {/*<div className="col s4 offset-s4">*/}
            <div className="col s4 offset-l2 s10">
              <Panel/>
            </div>
            <div>
              <Search />
            </div>
          </div>

          
            <div className="row">
              <Trendinglocations/>
      	     </div>
          </div>
      
          
  );
}
});

module.exports = Page1;


