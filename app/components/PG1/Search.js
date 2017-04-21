var React = require("react");

var Search= React.createClass({

    render:function(){

            return(
         <div className="container">

       <div className="row">

         <div className="col-lg-12">

           <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Search</h3>
                <nav>
                  <div className="nav-wrapper">
                    <form>
                      <div className="input-field">
                        <input id="search" type="search" required></input>
                        <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                      </div>
                    </form>
                  </div>
                </nav>
              </div>
            </div>

         </div>

       </div>

     </div>
    );
  }
});
                /*this will render search on landing page*/



module.exports= Search;