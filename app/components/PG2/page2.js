// Include React
var React = require("react");
var Panel = require("../PG1/Panel");
var Info = require("./Info");
var Photos = require("./Photos");
var Tours = require("./Tours");
var Thingstodo = require("./Thingstodo");
var Navbar = require("../PG1/Navbar");

var Page2 = React.createClass({
  componentDidMount() {
    console.log('in page 2', this.props);
  },
 // Here we render the function
  render: function() {

   return (
        <div className="page2">
        
          <div className="row">
              <Navbar />
            <div className= "col s8 green">
        	   <Photos/>
            </div>
            <div clasName="col s2 offset-8 green">	
              <Panel/>
            </div>
          </div>
        
       
          <div className="row">
            <div className="col s4 green">
              <Info city={this.props.location.query.city} />
            </div>
          <div className="col s4 green">
            <Tours/>
          </div>
          <div className="col s4 green">
            <Thingstodo />
          </div>
        </div>
      </div>
        
        
  );
}
});

module.exports = Page2;
