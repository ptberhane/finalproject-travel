var React = require("react");
var todoHelper = require("../utils/thingstodohelpers.js");
console.log("Thingstodo");

var ThingsTodo= React.createClass({
  getInitialState(){
    return{
      thingsTodo: []
    }
  },
  componentDidMount: function(){
    // console.log('Thingstodo.js file mounted');
    console.log('Todo PROPSthis.props',this.props);

    todoHelper.getTododata(this.props.city)
    .then(function(response){
      console.log("ThingsTodo RESPONSE", response);
      // console.log(response.data);
      this.setState({thingsTodo:response.data})
      console.log(response);
    }.bind(this));

  },

var Thingstodo= React.createClass({

    render:function(){
        return(
                /*this will be for info on page2*/
               
                      <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">Thingstodo</span>
                          
                        </div>
                        <div className="card-action">
                          <a href="#">This is a link</a>
                          <a href="#">This is a link</a>
                        </div>
                      </div>
                   
            )
    }

    });


module.exports= Thingstodo;