var React = require("react");
var todoHelper = require("../utils/thingstodohelper.js");
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

    render:function(){
        return(
                /*this will be for info on page2*/
               
                      <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">Things to do: {this.state.name}</span>
                          <p>{this.state.something}</p>
                        </div>
                       
                      </div>
                   
            )
    }

    });


module.exports= ThingsTodo;