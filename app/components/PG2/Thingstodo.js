var React = require("react");
var todoHelper = require("../utils/thingstodohelper.js");
console.log("ThingsTodo!");

var ThingsTodo = React.createClass({
  getInitialState(){
    return{
      attractions: []
    }
  },
  componentDidMount(){
    // console.log('Thingstodo.js file mounted');
    console.log('THINGSTODO PAGE PROPS',this.props);
    console.log("this", this);

    todoHelper.getAttractions(this.props.city)
    .then((response)=>{
      console.log("ThingsTodo RESPONSE", response.data);
      // console.log(response.data);
      console.log(this);
      this.setState({attractions:response.data});
    });

  },

  render(){
      console.log("this", this);
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