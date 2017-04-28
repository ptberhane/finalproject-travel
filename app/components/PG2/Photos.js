var React = require("react");
var photoHelper = require("../utils/photoshelpers.js");

console.log("photos");

var Photos= React.createClass({
  getInitialState(){
    return{
      photos:""
    }
  },
  componentDidMount: function(){
    console.log('compoentdidmount');
    console.log('this.props',this.props);
    photoHelper.getPhotos(this.props.city)
    .then(function(response){
      //console.log(response(response.data.photos);
        this.setState({photos:response.data.photos})
    }.bind(this));
  },

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
                          <p>{this.state.photos}</p>
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