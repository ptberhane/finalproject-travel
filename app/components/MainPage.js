// Include React
var React = require("react");

var Main = React.createClass({

 // Here we render the function
  render: function() {

   return (

     <div className="container">
    <nav>
    <div className ="nav-wrapper">
      <a href="#/" className="brand-logo">Vola</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a>Login</a></li>
        <li><a >Newsfeed</a></li>
      </ul>
      </div>
      </nav>
    
  

     <div className="container">

          {this.props.children}
      </div>
    </div>


  );
}
});

module.exports = Main;


