var React = require("react");

var Signup= React.createClass({

    render:function(){
        return(
                /*this will render signup on page5*/
        <div className="row" style = {styles}>
		    <form className="col s12">
		      <div className="row">
		        <div className="input-field col s6">
		          <input id="first_name" type="text" className="validate" />
		          <label htmlFor="first_name">First Name</label>
		        </div>
		        <div className="input-field col s6">
		          <input id="last_name" type="text" className="validate" />
		          <label htmlFor="last_name">Last Name</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <input id="password" type="password" className="validate" />
		          <label htmlFor="password">Password</label>
		        </div>
		      </div>
		      <div className="row">
		        <div className="input-field col s12">
		          <input id="email" type="email" className="validate"/>
		          <label htmlFor="email">Email</label>
		        </div>
		      </div> 
		      <div className="input-field col s4">
		       <button className="btn waves-effect waves-light" type="submit" name="action">Sign up
    			<i className="material-icons right">send</i>
  				</button>
    		</div> 
	   		 </form>
		  </div>             
        );
	}
});

const styles = {
    	background: '#eceff1',
    	opacity: '0.8',
    	margin: '50px',
    	padding: '20px',
    	fontSize: '35px'
    }


module.exports= Signup;