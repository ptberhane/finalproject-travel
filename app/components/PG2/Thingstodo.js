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


  render: function () {

      console.log("this", this);

      const attractionsData = this.state.attractions;
      //console.log("THIS IS THE RESPONSE");
      console.log(attractionsData);
      const listItems = attractionsData.map((entry) =>
        
         
            <p key={entry.id}> Location Name: {entry.name}</p> 
    

      );
       
        return(
                /*this will be for info on page2*/
               
                <div style={styles} className="card blue-grey darken-1">
                    <div className="card-content white-text">
                          <span className="card-title">Things Todo</span>
                          <p>Attractions</p>
                    </div>
                              {listItems}
                    </div>
                               
        )
  }

});

const styles = {
  marginBottom: '200px'

}


module.exports= ThingsTodo;