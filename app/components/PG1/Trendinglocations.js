var React = require("react");
var Trendinglocations= React.createClass({
    render:function(){
            return(
         
        <div className="row">
          <div className="col l12 green">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Trending Locations</h3>
              </div>
            </div>
        
        
        <div className="row">
          <div className="col l4 green lighten-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h5 className="panel-title">Trending Locations1</h5>
                {/*Image card with action options*/}  
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="images/office.jpg"></img>
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
          <div className="col l4 green lighten-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h5 className="panel-title">Trending Locations2</h5>
                 {/*Image card with action options*/}  
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="images/office.jpg"></img>
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
          <div className="col l4 green lighten-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h5 className="panel-title">Trending Locations3</h5>
                 {/*Image card with action options*/}  
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="images/office.jpg"></img>
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                      <p><a href="#">This is a link</a></p>
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
        </div>
          </div>
    
    );
  }
});
                /*this will render info in trending locations on main page*/
module.exports= Trendinglocations;