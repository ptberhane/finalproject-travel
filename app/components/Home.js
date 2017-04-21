// Include React
var React = require("react");

var Home = React.createClass({

 // Here we render the function
  render: function() {

   return (
        <div>
          <Panel/>
          <Search/>
          <Trendinglocations/>
        </div>
  );
}
});

module.exports = Home;


