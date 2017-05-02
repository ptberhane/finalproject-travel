var React = require("react");

var UserMap= React.createClass({

  render:function(){
    return(

         <div> 
          <iframe className="userMap" src="./assets/userMap/index.html" position="absolute" width="100%" height="100%" frameBorder="0" scrolling="no"></iframe>
         </div> 
     
    );
  }
});
        /*this will be panel*/
// const styles={
// 	 height:300,
//      padding-bottom: 100%



module.exports= UserMap;