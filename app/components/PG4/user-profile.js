var React = require("react");

var Profile= React.createClass({

    render:function(){
        return(
                /*this will rending photos on page2*/
          <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">John Stamos</span>
              <img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiA8a6CptXTAhWKdSYKHUOdDLEQjRwIBw&url=http%3A%2F%2Fwww.famousbirthdays.com%2Fpeople%2Fjohn-stamos.html&psig=AFQjCNGO2W1te8ybfcpyA6cLd6pD2tFWUg&ust=1493954946540532"></img>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
            <button className="btn waves-effect waves-light" type="submit" name="action">Write a blog
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