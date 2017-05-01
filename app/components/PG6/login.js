var React = require("react");


var Login= React.createClass({

    render:function(){
        return(
                /*this will render Login form on page6*/
		    <div className="row" style = {styles}>
			    <form className="col s12">
			      <div className="row">
			        <div className="input-field col s4">
			          <input id="username" type="text" className="validate" />
			          <label for="username">Username</label>
			        </div>
			        <div className="input-field col s4">
			          <input id="password" type="password" class="validate" />
			          <label for="password">Password</label>
			        </div>
			      	<div className="input-field col s4">
			       		<button className="btn waves-effect waves-light" type="submit" name="action">Login
	    				<i className="material-icons right">send</i>
	  					</button>
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
    	padding: '20px'
    }
    
module.exports = Login;