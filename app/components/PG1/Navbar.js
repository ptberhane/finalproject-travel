var React = require("react");

var Navbar= React.createClass({

	render:function(){
		return(
			<div className ="row">
				<nav className = "N/A teal transparent z-depth-0" style ={styless}>
					<div className="nav-wrapper">
				        <a href="#/home"><img className="logo_image" src="../assets/logo.png" /></a>
				        <a href="#/home" className="brand-logo" style={styles}>Vola</a>
				        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
				        <ul className="right hide-on-med-and-down">
			        	<li><a href="#/signup" className="class_signup" style={styles0}>Sign Up</a></li>
				          <li><a href="#/login" className="class_login" style={styles1}>Log In</a></li>
				          <li><a href="#/newsfeed" style={styles2}>Newsfeed</a></li> 
				        </ul>
				        <ul className="side-nav" id="mobile-demo">
				          <li><a href="#">Log In</a></li>
				          <li><a href="#">Newsfeed</a></li> 
				        </ul>
			      </div>
			  </nav>
			  </div>
      );
  }
});

const styless= {
	borderWidth: '5px',
}

const styles = {
    	fontSize: '40px',
    	margin: '5px',
    }

const styles0 = {
	fontSize: '22px',
    	margin: '10px'
}
const styles1 = {
    	fontSize: '22px',
    	margin: '10px'
    }
const styles2 = {
    	fontSize: '22px',
    	margin: '10px'
    }
  module.exports = Navbar;