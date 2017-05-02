var React = require("react");


var Login= React.createClass({

    render:function(){
        return(
                /*this will render Login form on page6*/
		    <div className="row" style = {styles}>
			    <form className="col s12">
			      <div className="row">
			        <div className="input-field">
			          <input id="username" type="text" className="validate" />
			          <label for="username">Username</label>
			        </div>
			        <div className="input-field">
			          <input id="password" type="password" class="validate" />
			          <label for="password">Password</label>
			        </div>
			      	<div className="input-field">
			       		<button className="btn waves-effect waves-light" type="submit" name="action">Login
	    				<i className="material-icons right">send</i>
	  					</button>
			      	</div>   
		      	</div> 
		      	<div className="row">
        		<div className="col s10" style={styles1}>
        				 Not registered? Sign up:
          		<div className="input-field inline">
           	<button className="btn waves-effect waves-light" type="submit" name="action">Signup
    				<i className="material-icons right">mode_edit</i>
  				</button>
          </div>
        </div>	
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
    	padding: '25px',
    	fontSize: '35px',
    	marginBottom: '50px'
    }

const styles1 = {
	fontSize: '18px'
}
    
module.exports = Login;