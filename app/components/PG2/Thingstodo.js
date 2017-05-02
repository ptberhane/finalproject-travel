var React = require("react");
var helpers = require("../utils/thingstodohelper.js");

var Thingstodo= React.createClass({
      getInitialState() {
    return {
      name: ''
    }
  },
  componentDidMount: function(){
    console.log('componentdidmount');
    console.log('this.props', this.props);
    helpers.getCitydata(this.props.Thingstodo) 
    .then(function(response){
      console.log(response.data.name);
    {/* CHECK THE THINGS TO DO FORMAT */}
      this.setState({name: response.data.name, climateIndex: response.data.climate_index, best_months_to_visit_text: response.data.best_months_to_visit_text})
    }.bind(this));


  },

    render:function(){
        return(
                /*this will be for info on page2*/
               
                      <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">Thingstodo: {this.state.name}</span>
                          <p>{this.state.something}</p>
                        </div>
                        <div className="card-action">
                          <a href="#">This is a link</a>
                          
                        </div>
                      </div>
                   
            )
    }

    });


module.exports= Thingstodo;