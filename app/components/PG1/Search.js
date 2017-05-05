import {hashHistory} from 'react-router';

var React = require("react");



var Search = React.createClass({
    getInitialState() {
      console.log('getting initial state');
      return {
        search: ''
      };
    },
    handleChange: function(event) {
      this.setState({
        search: event.target.value
      });
      console.log('the input box is: ' + event.target.value);
    },
    searchClick() {
      console.log(this)
      console.log(this.state)
      //route to page2, with the search query
      console.log("HELLO!");
      console.log(this.state.search);

      //go to page 2
      hashHistory.push('/Page2?city=' + this.state.search);
    },
    render:function() {

        return(
          /*this will render search on landing page*/
              <div className="row">
                <div className="input-field col s6">
                  <input style = {styles1} id="search" placeholder="Search City Here" type="text" className="validate" value={this.state.search} onChange={this.handleChange}/>
                </div>
                <div className="col s2">
                  <button style = {styles2} onClick={this.searchClick} className="btn waves-effect waves-light " type="submit" name="action">Search
                  <i className="material-icons left">search</i>
                  </button>
                </div>  
            </div>
 
    );
  }
});
                
const styles1 = {
  margin: '15px',
  color: 'white',
  fontSize:"25px"

}
const styles2 = {
  height: '30px',
  padding: '0 0.5rem'
}

module.exports= Search;