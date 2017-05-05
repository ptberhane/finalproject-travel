import {hashHistory} from 'react-router';

var React = require("react");
var ReactDOM = require('react-dom');
var Coverflow = require('react-coverflow');

var fn = function () {
  /* do you want */  
}

var Trendinglocations= React.createClass({
      firstClick: function() {
      //route to page2, with the search query

      //go to page 2
      hashHistory.push('/Page2?city=Pistoia' );
    },

      secondClick: function() {
      //route to page2, with the search query

      //go to page 2
      hashHistory.push('/Page2?city=Cape+Town' );
    },
          thirdClick: function() {
      //route to page2, with the search query

      //go to page 2
      hashHistory.push('/Page2?city=Merida' );
    },

    render:function(){

            return(      
 
  <div style={styles} >

  <Coverflow  width="960" height="500"
    displayQuantityOfSide={1}
    navigation={false}

   >

       <img onClick={this.firstClick} className="locationPics" src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/6_Pistoia_20161110_152817_watermark.jpg?q=40&auto=enhance&fit=crop&w=964&h=564&crop=bottom' alt='Pistoia, Italy' />
        <img onClick={this.secondClick} className="locationPics" src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/2_cape_town_LPT1213_124.jpg?q=40&auto=enhance&fit=crop&w=964&h=564' alt='Cape Town, South Africa' />
        <img onClick={this.thirdClick} className="locationPics" src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/4_merida_watermark.jpg?q=40&auto=enhance&fit=crop&w=964&h=564&crop=focalpoint&fp-x=1&fp-y=1' alt='Merida, Mexico' />
        <img onClick={this.thirdClick} className="locationPics" src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/3_LosAngeles_wordmark.jpg?q=40&auto=enhance&fit=crop&w=964&h=564&crop=bottom'  alt='California, USA' />
        <img onClick={this.thirdClick} className="locationPics" src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/5_ohrid_GettyImages-532251721.jpg?q=40&auto=enhance&fit=crop&w=964&h=564' alt='Ohrid, Machedonia' />
        <img onClick={this.thirdClick} className="locationPics" src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/7_seoul.jpg?q=40&auto=enhance&fit=crop&w=964&h=564' alt='Seoul, South Korea' />
        <img onClick={this.thirdClick} className="locationPics" src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/8_lisbon_watermark.jpg?q=40&auto=enhance&fit=crop&w=964&h=564&crop=focalpoint&fp-x=1&fp-y=1' alt='Lisbon, Portugal' />
        <img onClick={this.thirdClick} className="locationPics" src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/9_moscow.jpg?q=40&auto=enhance&fit=crop&w=964&h=564' alt='Moscow, Russia' />
        <img onClick={this.thirdClick} className="locationPics" src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/10_Portland_20161110_162755_watermark.jpg?q=40&auto=enhance&fit=crop&w=964&h=564&crop=bottom' alt='Portland, Oregan' />
        

    </Coverflow>    
    </div>
    );
  }
});

const styles = {
  marginTop: '400px',
  marginBottom: '200px'

}


                /*this will render info in trending locations on main page*/
module.exports= Trendinglocations;
