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
       
           <div class="row">
            <div class="input-field col s12">
              <input id="search" type="text" class="validate" value={this.state.search} onChange={this.handleChange}/>
              <label for="search" >Search</label>
              <button onClick={this.searchClick}>Search</button>
            </div>
        </div>
 
    );
  }
});
                /*this will render search on landing page*/



module.exports= Search;