var React = require("react");

var Profile= require("./user-profile");
var Panel = require("../PG1/Panel");
var Navbar = require("../PG1/Navbar");

var Page4 = React.createClass({

 // Here we render the function
  render: function() {

   return (
        <div className="page4">
        	<Navbar />
          <Panel />
          <Profile/>
        
        </div>
  );
}
});

module.exports = Page4;