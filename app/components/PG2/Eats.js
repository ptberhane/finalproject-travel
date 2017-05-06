var React = require("react");
var todoHelper = require("../utils/thingstodohelper.js");
console.log("Eat!");

var Eats = React.createClass({
  getInitialState(){
    return{
      restaurants: []
    }
  },
  componentDidMount(){
    // console.log('Thingstodo.js file mounted');
    console.log('EATS PAGE PROPS',this.props);
    console.log("this", this);

    todoHelper.getRestaurants(this.props.city)
    .then((response)=>{
      console.log("ThingsTodo RESPONSE", response.data);
      // console.log(response.data);
      console.log(this);
      this.setState({restaurants:response.data});
    });

  },

    render(){
      console.log("this", this);
        return(
                /*this will be for info on page2*/
               
                      <div style={styles} className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">Eats</span>
                          <p>Restaurants</p>
                        </div>
                       {this.state.restaurants.map((r, i)=> <div key={i.id}>
                            <p>Restaurants Name: {r.name}</p>

                        </div>)}
                       
                      </div>
                    
        )
    }

    });

const styles = {
  marginBottom: '200px'

}


module.exports= Eats;