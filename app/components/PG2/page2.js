// Include React
var React = require("react");
var Panel = require("../PG1/Panel");
var Info = require("./Info");
var Photos = require("./Photos");
var Eats = require("./Eats");
var Thingstodo = require("./Thingstodo");
var Navbar = require("../PG1/Navbar");
var Search = require("../PG1/Search");
var Display = require("./display-pg2");

var Page2 = React.createClass({

  render: function() {

   return (
        <div className="page2">
          <div className="row">
              <Navbar />
              <Search />
            <div className= "col s12">

             <Photos city={this.props.location.query.city}/>
            </div>
            <div className="col s4 offset-l2 s10">  
              <Panel/>
            </div>
          </div>
          <div className="row">
            <div className="col s4">
              <Info city={this.props.location.query.city} />
            </div>
          <div className="col s4">
            <Eats city={this.props.location.query.city}/>
          </div>
          <div className="col s4">
            <Thingstodo city={this.props.location.query.city}/>
          </div>
          <Display />
        </div>

      </div>
        
        
  );
}
});

module.exports = Page2;