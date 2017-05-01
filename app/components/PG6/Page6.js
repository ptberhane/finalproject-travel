var React = require("react");
var Login = require("./login");
var Panel = require("../PG1/Panel");
var Display = require("../PG5/display-pg5");
var Navbar = require("../PG1/Navbar");

var Page6 = React.createClass({

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
          <Login/>
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

module.exports = Page6;