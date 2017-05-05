var React = require("react");
// var helpers = require("../utils/thingstodohelper.js");

var Thingstodo= React.createClass({
  //     getInitialState() {
  //   return {
  //     todo: ''
  //   }
  // },
  // componentDidMount: function(){
  //   console.log('componentdidmount');
  //   console.log('this.props', this.props);
  //   helpers.getTododata(this.props.todo.city) 
  //   .then(function(response){
  //     console.log("data",response);
  //     this.setState({todo:response.data})
  //   }.bind(this));


    

    render:function(){
        return(
                /*this will be for info on page2*/
               
                      <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                          <span className="card-title">Thingstodo: </span>
                         
                        </div>
                        <div className="card-action">
                          <a href="#">This is a link</a>
                          
                        </div>
                      </div>
                   
            )
    }

    });


module.exports= Thingstodo;