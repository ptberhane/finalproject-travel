var React = require("react");

var Photos= React.createClass({

    render:function(){
        return(
                /*this will rending photos on page2*/
                    <div>
                      <div className="card">
                        <div className="card-image">
                          <img src="images/sample-1.jpg"></img>
                          
                        </div>
                        <div className="card-content">
                        <span className="card-title">Photo Gallery</span>
                          <p>This part will have the photos of the selected location.</p>
                        </div>
                        <div className="card-action">
                          <a href="#">This is a link</a>
                        </div>

                      </div>
                      </div>  
                 
            );
    }

    });


module.exports= Photos;