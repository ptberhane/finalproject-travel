var React = require("react");
var newsfeedHelper = require("../utils/newsfeed-helpers.js");

var Newsfeed= React.createClass({
  getInitialState(){
    return{
      newsfeed: []
    }
  },
  componentDidMount: function(){
    console.log("NEWSFEED CODE RUNNING!!");
    //console.log(this.props);

    newsfeedHelper.getNewsFeed()
    .then(function(response){
      //console.log("NewsFeed RESPONSE", response);
      // console.log(response.data);
      this.setState({newsfeed:response.data});

      console.log(this.state.newsfeed);



    }.bind(this));



  },


    render:function(){


      const newsfeedData = this.state.newsfeed;
    const listItems = newsfeedData.map((entry) => 
     
        <li key={entry._id} className="collection-item avatar">
            <img src={entry.image} alt="" className="circle"></img>
            <span className="title"><a href={entry.link}>{entry.title}</a></span>
            <p>{entry.post}</p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>

      );


        return(
                /*this will be newsfeed on page 3*/
    
                <div >
                <ul className="collection" >
                    {listItems}
                </ul>
                </div>


            )
      }
    

    });



module.exports= Newsfeed;