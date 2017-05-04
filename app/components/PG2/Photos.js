var React = require("react");
var photoHelper = require("../utils/photoshelpers.js");
var Coverflow = require('react-coverflow');

console.log("photos");

var Photos= React.createClass({
  getInitialState(){
    return{
      photos: []
    }
  },
  componentDidMount: function(){
    // console.log('photos.js file mounted');
    console.log('PHOTO PROPSthis.props',this.props);

    photoHelper.getCityPhotos(this.props.city)
    .then(function(response){
      console.log("PHOTO RESPONSE", response);
      // console.log(response.data);
      this.setState({photos:response.data})
      console.log(response);
    }.bind(this));
  },
  
    render:function(){
        return(
          /*this will render photos on page2*/
          <div>
            <div className="card">
              <div className="card-content">
              <span className="card-title">Photo Gallery</span>
                <Coverflow width="960" height="500" 
                displayQuantityOfSide={1} 
                navigation={false} 
                clickable={false}>
                {
                  this.state.photos.map((url, index) =>  { 
                   return (
                    //<li key={url.toString()}> </li>
                      <img key={index} className="locationPics" src={url}/>    
                    );
                  })
                }
                </Coverflow>
              </div>
            </div>
          </div>  
                 
        );
      }

    });

module.exports= Photos;