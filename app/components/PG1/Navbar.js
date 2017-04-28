var React = require("react");

var Navbar= React.createClass({

	render:function(){
		return(
			<div claaName ="row">
				<nav className = "N/A transparent z-depth-0">
			      <div className="nav-wrapper ">
			        <a href="#/home" className="brand-logo">Vola</a>
			        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
			        <ul className="right hide-on-med-and-down">
		        	{/*<li><a href="#/blogs">Blogs</a></li>*/}
			          <li><a href="#/login">Log In</a></li>
			          <li><a href="#/newsfeed">Newsfeed</a></li> 
			        </ul>
			        <ul className="side-nav" id="mobile-demo">
			        	{/*<li><a href="#">Blogs</a></li>*/}
			          <li><a href="#">Log In</a></li>
			          <li><a href="#">Newsfeed</a></li> 
			        </ul>
			      </div>
			  </nav>
			  </div>

      );
  }
});
  module.exports = Navbar;