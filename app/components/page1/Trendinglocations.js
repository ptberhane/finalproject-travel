var React = require("react");

var Trendinglocations= React.createClass({

	render:function(){

			return(
		 <div className="container">

        <div className="row">

          <div className="col-lg-12">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Trending Locations</h3>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
});
				/*this will render info in trending locations on main page*/



module.exports= Trendinglocations;