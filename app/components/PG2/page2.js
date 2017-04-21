// Include React
var React = require("react");

var Info = require("./Info");
var Photos = require("./Photos");
var Tours = require("./Tours");
var Thingstodo = require("./Thingstodo");

var Page2 = React.createClass({

 // Here we render the function
  render: function() {

   return (
        <div>
          <Photos/>
          <Info/>
          <Tours/>
          <Thingstodo />
        </div>
  );
}
});

module.exports = Page2;
