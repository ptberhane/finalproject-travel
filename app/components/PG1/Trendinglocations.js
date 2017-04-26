var React = require("react");
var ReactDOM = require('react-dom');
var Coverflow = require('react-coverflow');

var fn = function () {
  /* do you want */  
}

var Trendinglocations= React.createClass({
    render:function(){
            return(
         
//         <div className="row">
//           <div className="col s12 white-text N/A transparent">
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h4 className="panel-title">Trending Locations</h4>
//               </div>
//             </div>
        
        
//         <div className="row">
//           <div className="col s4 white-text N/A transparent">
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h5 className="panel-title">Trending Locations1</h5>
//                 {/*Image card with action options*/}  
//                 <div className="card">
//                     <div className="card-image waves-effect waves-block waves-light">
//                       <img className="activator" src="http://www.nationalgeographic.com/content/dam/travel/photos/000/367/36732.jpg"></img>
//                     </div>
//                     <div className="card-content">
//                       <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                     
//                     </div>
//                     <div className="card-reveal">
//                       <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
//                       <p>Here is some more information about this product that is only revealed once clicked on.</p>
//                     </div>
//                   </div>
                
//               </div>
//             </div>
//           </div>
//           <div className="col s4 white-text N/A transparent">
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h5 className="panel-title">Trending Locations2</h5>
//                  {/*Image card with action options*/}  
//                 <div className="card">
//                     <div className="card-image waves-effect waves-block waves-light">
//                       <img className="activator" src="http://engineering.columbia.edu/files/engineering/design-rio400.jpg"></img>
//                     </div>
//                     <div className="card-content">
//                       <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
//                       {/*<p><a href="#">This is a link</a></p>*/}
//                     </div>
//                     <div className="card-reveal">
//                       <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
//                       <p>Here is some more information about this product that is only revealed once clicked on.</p>
//                     </div>
//                   </div>
                
//               </div>
//             </div>
//           </div>
//           <div className="col s4 white-text N/A transparent">
//             <div className="panel panel-default">
//               <div className="panel-heading">
//                 <h5 className="panel-title">Trending Locations3</h5>
//                  {/*Image card with action options*/}  
//                 <div className="card">
//                     <div className="card-image waves-effect waves-block waves-light">
//                       <img className="activator" src="http://www.nepalvillagetrek.com/nepal/images/nepal-travel.jpg"></img>
//                     </div>
//                     <div className="card-content">
//                       <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
//                       <p><a href="#">This is a link</a></p>
//                     </div>
//                     <div className="card-reveal">
//                       <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
//                       <p>Here is some more information about this product that is only revealed once clicked on.</p>
//                     </div>
//                   </div>
                
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
//           </div>
    
//     );
//   }
// });

 

  <Coverflow width="960" height="500"
    displayQuantityOfSide={2}
    navigation={false}
    >
    <img src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/6_Pistoia_20161110_152817_watermark.jpg?q=40&auto=enhance&fit=crop&w=964&h=564&crop=bottom' alt='Pistoia, Italy' url="https://www.lonelyplanet.com/best-in-travel/cities" />
    <img src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/2_cape_town_LPT1213_124.jpg?q=40&auto=enhance&fit=crop&w=964&h=564' alt='Cape Town, South Africa' url="https://www.lonelyplanet.com/best-in-travel/cities"/>
    <img src='https://lonelyplanetstatic.imgix.net/marketing/2017/BIT/article-images/cities/4_merida_watermark.jpg?q=40&auto=enhance&fit=crop&w=964&h=564&crop=focalpoint&fp-x=1&fp-y=1' alt='Merida, Mexico' url="https://www.lonelyplanet.com/best-in-travel/cities"/>
  </Coverflow>
);
}
});

// const styles={
// width:960,
//     height:480,
//     displayQuantityOfSide:2,
//     navigation:"false",
//     enableHeading:"false"
//   }
                /*this will render info in trending locations on main page*/
module.exports= Trendinglocations;