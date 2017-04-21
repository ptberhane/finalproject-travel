// Include React
var React = require("react");

var Landing = require("./landing");
var Panel = require("./Panel");
var Search = require("./Search");
var Trendinglocations = require("./Trendinglocations");

var Page1 = React.createClass({

 // Here we render the function
  render: function() {

   return (
        <div>
 		  <Landing />
          <Panel/>
          <Search/>
          <Trendinglocations/>
        </div>
  );
}
});

module.exports = Page1;


