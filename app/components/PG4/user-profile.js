var React = require("react");

var Profile= React.createClass({

   render:function(){
        return(
                /*this will rending photos on page2*/
          <div className="col s12 grey darken-2">

   <div className="card horizontal grey">
      <div className="card-image">
        <img src="http://www.famousbirthdays.com/headshots/john-stamos-2.jpg" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div className="card-action">
           <button className="btn waves-effect waves-light" type="submit" name="action"><a href="#/userblog">Write a blog</a>
           <i className="material-icons right">mode_edit</i>
         </button>
           </div>
      </div>
    </div>
  </div>

               
            );
    }

   });


module.exports= Profile;