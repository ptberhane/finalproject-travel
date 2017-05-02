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
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col s4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                 
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    </div>
  );
}
});


module.exports = Main;


