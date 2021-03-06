var React = require("react");
var Panel = require("../PG1/Panel");
var Navbar = require("../PG1/Navbar");
var Display = require("./display-pg5");
var SignUp = require("./Signup");

var Page5 = React.createClass({

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
            <SignUp/>
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

module.exports = Page5;

