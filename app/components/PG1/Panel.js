var React = require("react");

var Panel= React.createClass({

	render:function(){
		return(
      // this will render side panel blogs ..

      <div id="slideout">
          <button className="#004d40 teal lighten-2 white-text"> Blogs<i className="small material-icons">library_books</i></button>
          <div id="slideout_inner" className="#263238 blue-grey darken-4">
              <ul style={styless}>
                <li className="collection-item avatar N/A transparent z-depth-0">
                  <div className="white-text">
                    <p className="title">The best shoes for Travel- tips from a Podiatrist</p>
                    <p>Stephanie Raley <br/>
                       May 1, 2017
                    </p>
                  </div>
                </li>

                <li className="sidePanel collection-item avatar N/A transparent z-depth-0">
                  <div className="white-text">
                    <p className="title">The best shoes for Travel- tips from a Podiatrist</p>
                    <p>Stephanie Raley <br/>
                       May 1, 2017
                    </p>
                  </div>
                </li>

                <li className="sidePanel collection-item avatar N/A transparent z-depth-0">
                  <div className="white-text">
                    <p className="title">The best shoes for Travel- tips from a Podiatrist</p>
                    <p>Stephanie Raley <br/>
                       May 1, 2017
                    </p>
                  </div>
                </li>
                
              </ul>
          </div>
      </div>
    );
  }
});
const styless = {
  width: '300px',
  border: 'none'
}

module.exports= Panel;

