// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

<<<<<<< HEAD
=======

>>>>>>> dda38bcbf3a211e5b9475d2b1d8c5804ec9216d9
// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/MainPage");
<<<<<<< HEAD
var Panel = require("../components/page1/Panel");
var Search = require("../components/page1/Search");
var Trendinglocations = require("../components/page1/Trendinglocations");
=======

var Page1 = require("../components/PG1/Page1");
var Page2 = require("../components/PG2/Page2");
var Page3 = require("../components/PG3/Page3");
var Page4 = require("../components/PG4/Page4");
>>>>>>> dda38bcbf3a211e5b9475d2b1d8c5804ec9216d9


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}
<<<<<<< HEAD
      <Route path="Panel" component={Panel} />
      <Route path="Search" component={Search} />
      <Route path="Trendinglocations" component={Trendinglocations} />

      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Main} />

=======
      <Route path="Page1" component={Page1} />
      <Route path="Page2" component={Page2} />
      <Route path="newsfeed" component={Page3} />
      <Route path="Page4" component={Page4} />
      {/* If user selects any other path... we get the Info Route */}
     
<<<<<<< HEAD
      <IndexRoute component={Page4}/>
>>>>>>> dda38bcbf3a211e5b9475d2b1d8c5804ec9216d9
=======
      <IndexRoute component={Page1}/>
>>>>>>> 45265dc70033c484f82eed5f923a8bb62b7afbc9
    </Route>
  </Router>

);