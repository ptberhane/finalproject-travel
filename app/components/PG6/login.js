var React = require("react");


var Login= React.createClass({

    render:function(){

        console.log("signup button clicked");
        return(
                /*this will render Login form on page6*/
		    <div className="row" style = {styles}>
			    <form className="col s12">
			      <div className="row">
			        <div className="input-field">
			          <input id="username" type="text" className="validate" />
			          <label htmlFor="username">Username</label>
			        </div>
			        <div className="input-field">
			          <input id="password" type="password" className="validate" />

			          <label for="password">Password</label>
			        </div>
			      	<div className="input-field">
			       		<button  className="btn waves-effect waves-light" type="submit" name="action"><a href='#/user-profile'>Login</a>
	    				<i className="material-icons right">send</i>
	  					</button>
			      	</div>   
		      	</div> 
		      	<div className="row">

        		<div className="col s10" style={styles1}>
        				 Not registered? Sign up:
          		<div  className="input-field inline">
           <button className="btn waves-effect waves-light" type="submit" name="action"> <a href='#/signup'>Signup</a>
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
	fontSize: '15px'
}
    
module.exports = Login;