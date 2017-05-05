var React = require("react");
var Panel = require("../PG1/Panel");
var Display = require("../PG4/display-pg4");
var Navbar = require("../PG1/Navbar");
var Blog =require("./Blog");

var Page7 = React.createClass({

 // Here we render the function
  render: function() {

   return (
   	<div>
        <div className="row">
         <Navbar />
        <div className= "col s4 offset-l2 s10">
          <Panel />
        </div>
        <div>
        <div className="col s8">
          <Blog />
        </div>

        <div>
        <Display />
        </div>
        </div>
      </div>
    </div>
  );
}
});

module.exports = Page7;