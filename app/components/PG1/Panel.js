var React = require("react");

var Panel= React.createClass({

	render:function(){
		return(
      // this will render side panel blogs ..

      <div id="slideout">
          <button className="#004d40 teal lighten-2 white-text"> Blogs<i className="small material-icons">library_books</i></button>
          <div id="slideout_inner" className="#263238 blue-grey darken-4">
              <ul style={styless}>
                <li className="collection-item avatar N/A teal transparent z-depth-0">
                  <p className="title"><i className="tiny material-icons">assignment</i>  Take the tips out of travelling</p>
                  <h6><i className="tiny material-icons">mode_edit</i>Jane Dempster-Smith <br/>
                   April 15, 2017
                </h6>
                </li>
                  <br />
                <li className="collection-item avatar N/A teal transparent z-depth-0">
                  <p className="title"><i className="tiny material-icons">assignment</i>  Post Cards from Maui</p>
                  <h6><i className="tiny material-icons">mode_edit</i>Craig <br/>
                   April 12, 2017
                </h6>
                </li>
                   <br />
                <li className="collection-item avatar N/A teal transparent z-depth-0">
                  <p className="title"><i className="tiny material-icons">assignment</i>  Does travel have to stop once you have Kids</p>
                  <h6><i className="tiny material-icons">mode_edit</i>Kez <br/>
                   March 28, 2017
                </h6>
                </li>
                
              </ul>
          </div>
      </div>
    );
  }
});
const styless = {
  width: '300px',
  border: 'none',
  color: '#ffffff',
  padding: '3px'
}

module.exports= Panel;

