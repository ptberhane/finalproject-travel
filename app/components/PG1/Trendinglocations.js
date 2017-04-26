var React = require("react");

var Trendinglocations= React.createClass({
    render:function(){
            return(
         
        <div className="row">
          <div className="col s12 white-text N/A transparent">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Trending Locations</h4>
              </div>
            </div>
        
        
        <div className="row">
          <div className="col s4 white-text N/A transparent">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h5 className="panel-title">Trending Locations1</h5>
                {/*Image card with action options*/}  
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://www.nationalgeographic.com/content/dam/travel/photos/000/367/36732.jpg"></img>
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                     
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
          <div className="col s4 white-text N/A transparent">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h5 className="panel-title">Trending Locations2</h5>
                 {/*Image card with action options*/}  
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://engineering.columbia.edu/files/engineering/design-rio400.jpg"></img>
                    </div>
                    <div className="card-content">
                      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                      {/*<p><a href="#">This is a link</a></p>*/}
                    </div>
                    <div className="card-reveal">
                      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                      <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
          <div className="col s4 white-text N/A transparent">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h5 className="panel-title">Trending Locations3</h5>
                 {/*Image card with action options*/}  
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                      <img className="activator" src="http://www.nepalvillagetrek.com/nepal/images/nepal-travel.jpg"></img>
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