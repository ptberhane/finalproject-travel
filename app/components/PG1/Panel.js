var React = require("react");

var Panel= React.createClass({

	render:function(){
		return(

      <div className="dropdown" >
  <button className="grey-text text-lighten-4" className="dropbtn">Blogs</button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

            
          
   
    );
  }
});
				/*this will be panel*/


module.exports= Panel;