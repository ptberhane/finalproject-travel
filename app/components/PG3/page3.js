var React = require("react");

var Newsfeed = require("./Newsfeed");
var Panel = require("../PG1/Panel");


var Page3 = React.createClass({

 // Here we render the function
  render: function() {

   return (
        <div>
          <Panel />
          <Newsfeed/>
        
        </div>
  );
}
});

module.exports = Page3;