var React = require("react");

var Panel= React.createClass({

	render:function(){
		return(
      // this will render side panel blogs ..

      <div id="slideout">
          <button className="#004d40 teal lighten-2 white-text"> Blogs<i className="small material-icons">library_books</i></button>
          <div id="slideout_inner" className="#263238 blue-grey darken-4">
            <ul className="collection">
            <li className="collection-item avatar">
              <div className="white-text">
                <span className="title">Title of the Blog</span>
                <p>Username <br />
                   Date
                </p>
              </div>
            </li>

            <li className="collection-item avatar">
             <div className="white-text">
              <span className="title">Title of the Blog</span>
              <p>Username <br />
                 Date
              </p>
            </div>
            </li>

            <li className="collection-item avatar">
               <div className="white-text">
                <span className="title">Title of the Blog</span>
                <p>Username <br />
                   Date
                </p>
              </div>
            </li>
            </ul>
          </div>
      </div>
    );
  }
});


module.exports= Panel;

