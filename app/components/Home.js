var React = require("react");

var Landing = require("./PG1/landing");
var Panel = require("./PG1/Panel");
var Search = require("./PG1/Search");
var Trendinglocations = require("./PG1/Trendinglocations");
// Include React



var Home = React.createClass({

 // Here we render the function
  render: function() {

   return (
        <div className="row">
        	 <div className="col s4 offset-l8 green">
          <Panel/>
          <div className="col s8 offset-l4 green">
          <Search/>
          </div>
          </div>
      	</div>
      <div>     
          <Trendinglocations/>
      </div>
  );
}
});

module.exports = Home;


