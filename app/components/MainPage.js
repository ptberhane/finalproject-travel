// Include React
var React = require("react");

var Search = require("./PG1/Search");


var Main = React.createClass({

 // Here we render the function
  render: function() {

   return (

     <div>
      <nav>
      <div className="nav-wrapper teal lighten-3 N/A transparent">
        <a href="#/home" className="brand-logo">Vola</a>
        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
        
        <ul className="right hide-on-med-and-down">
      
          <li><a href="#/login">Log In</a></li>
          <li><a href="#/newsfeed">Newsfeed</a></li> 
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li><a href="#">Log In</a></li>
          <li><a href="#">Newsfeed</a></li> 
        </ul>
      </div>
  </nav>
  <br/>
   

     <div className="container">
        {this.props.children}
      </div>
    {/*footer begins*/}

    <div>
      <footer className="page-footer teal lighten-3">
          <div className="container">
            <div className="row">
              <div className="col s6">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col s4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
               
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
    </div>


  );
}
});

module.exports = Main;