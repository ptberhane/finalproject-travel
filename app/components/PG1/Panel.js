var React = require("react");

var Panel= React.createClass({

    getInitialState() {
      console.log('getting intiial state');
      return {
        className: 'bee'
      };
    },

  handleClick: function(){
    console.log("CLICKED");
    //this.setState({color: 'blue'})
    //this.setState({className = " slide"});
//    this.setState.className = "bob";
    this.setState({className: 'slide2'});
  },



	render:function(){
		return(

      <div className="slide" >
        <button className="dropbtn" onClick={this.handleClick}>Blogs</button>
        <div className="slide" className={this.state.className}>

        {/*<button className="dropbtn" value = this.setState{className: "show"};>Blogs</button>
        <div className="dropdown-content" this.setState({className: " green"})> */}
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
      </div>
   
    );
  }
});
				/*this will be panel*/
// const styles1 = {
//   visibility: "hidden",
//   opacity: "0",
//   transition: "visibility 0s, opacity 0.5s linear"
// }

// const styles2 =  {
//   visibility: "visible",
//   opacity: "1"
// }

module.exports= Panel;

// value={this.state.search} onChange={this.handleChange}
// this.setState({className: " green"});