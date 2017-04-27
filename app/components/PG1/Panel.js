var React = require("react");

var Panel= React.createClass({

	render:function(){
		return(

      <div className="dropdown " >
        <button className="dropbtn">Blogs</button>
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
// const styles1 = {
//   visibility: "hidden",
//   opacity: "0",
//   transition: "visibility 0s, opacity 0.5s linear"
// }

// const styles2 =  {
//   visibility: "visible",
//   opacity: "1"
// }

module.exports= Panel;