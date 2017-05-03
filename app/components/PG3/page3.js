var React = require("react");
var Navbar = require("../PG1/Navbar");
var Newsfeed = require("./Newsfeed");
var Panel = require("../PG1/Panel");



var Page3 = React.createClass({

 // Here we render the function
  render: function() {

   return (
        <div className="page3">
        <Navbar />
        
          <Newsfeed/>

        
        </div>
  );
}
});

module.exports = Page3;