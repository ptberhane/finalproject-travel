var React = require("react");
// var signupHelper = require("../utils/signuphelpers.js");

var Blog= React.createClass({

    

    render:function(){
        return(
         <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1" style={style}>
            <div className="card-content white-text">
              <span className="card-title">Post a blog:</span>
              <input></input>
            </div>
       
              <button className="btn waves-effect waves-light" type="submit" name="action"><a href="#/newsfeed">Post</a>
           <i className="material-icons right">mode_edit</i>
            </button>
            </div>
      	</div>
      	</div>
      

   
                       
        );
	}
});


const style={
	padding:"20px"
}




module.exports= Blog;




