import {hashHistory} from 'react-router';

var React = require("react");



var Search= React.createClass({
    getInitialState() {
      console.log('getting intiial state');
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
    searchClick: function() {
      //route to page2, with the search query
      console.log(this.state.search);

      //go to page 2
      hashHistory.push('/Page2?city=' + this.state.search);
    },
    render:function() {

        return(
              <div className="row">
                <div className="input-field col s5">
                  <input style = {styles1} id="search" type="text" className="validate" value={this.state.search} onChange={this.handleChange}/>
                </div>
                <div className="col s2">
                  <button style = {styles2} onClick={this.searchClick} className="btn waves-effect waves-light " type="submit" name="action">Search
                  <i className="material-icons right">search</i>

                </button>
                </div>
              
            </div>
 
    );
  }
});
                /*this will render search on landing page*/
const styles1 = {
  margin: '25px',
  color: 'white'

}
const styles2 = {
  height: '30px',
  padding: '0 0.5rem'
}




module.exports= Search;