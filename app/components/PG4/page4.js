var React = require("react");

var Profile= require("./user-profile");
var Panel = require("../PG1/Panel");
var UserMap = require("./userMap");
var Navbar = require("../PG1/Navbar");

var Page4 = React.createClass({

 // Here we render the function
  render: function() {

   return (
        <div>

          <Navbar />
          <div className="row">
          <div className="col s4 offset-l2 s10">
          <Panel />
          <div className="col s8">
          <Profile/>
          </div>
          </div>
          </div>
	      <UserMap />
        
        </div>
  );
}
});

module.exports = Page4;