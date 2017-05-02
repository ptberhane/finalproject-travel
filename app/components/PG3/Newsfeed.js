var React = require("react");

var Newsfeed= React.createClass({

    render:function(){
        return(
                /*this will be newsfeed on page 3*/

                <ul className="collection" style={styles}>
                    <li className="collection-item avatar">
                      <img src="images/yuna.jpg" alt="" className="circle"></img>
                      <span className="title">Title1</span>
                      <p>First Line <br></br>
                         Second Line
                      </p>
                      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                      <i className="material-icons circle">folder</i>
                      <span className="title">Title2</span>
                      <p>First Line <br></br>
                         Second Line
                      </p>
                      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                      <i className="material-icons circle green">insert_chart</i>
                      <span className="title">Title3</span>
                      <p>First Line <br></br>
                         Second Line
                      </p>
                      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                    <li className="collection-item avatar">
                      <i className="material-icons circle red">play_arrow</i>
                      <span className="title">Title4</span>
                      <p>First Line <br></br>
                         Second Line
                      </p>
                      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                  </ul>
            )
    }

    });

const styles = {
  margin: '100px'
}

module.exports= Newsfeed;