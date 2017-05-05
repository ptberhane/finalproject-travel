var React = require("react");

var UserMap= React.createClass({

 render:function(){
    return(

        <div style={styless}>
          <iframe src="./assets/userMap/index.html" position="absolute" width="100%" height="700px" frameBorder="0" scrolling="no"></iframe>
         </div>
    
    );
  }
});
        /*this will be panel*/
// const styles={
//      height:300,
//      padding-bottom: 100%

const styless = {
    minHeight: '500px'
}

module.exports= UserMap;