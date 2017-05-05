var React = require("react");

var Panel= React.createClass({

	render:function(){
		return(
		 <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Panel</h3>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
});
				/*this will be panel*/


module.exports= Panel;