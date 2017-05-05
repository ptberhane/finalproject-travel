// Include React
var React = require("react");

var Search = require("./PG1/Search");


var Main = React.createClass({

 // Here we render the function
  render: function() {

   return (
      <div>
      <div className="container">

        {this.props.children}
      </div>
      
    {/*footer begins*/}

      <footer className="page-footer teal lighten-3">
          <div className="container">
            <div className="row">
              <div className="col s6">

                <h5 className="white-text"></h5>

                <p className="grey-text text-lighten-4 center-align">"Travel expands the mind and fills the gap." Sheda Savage</p>
              </div>
              
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright Text
            
            </div>
          </div>
        </footer>
        </div>
    );
  }
});

module.exports = Main;

