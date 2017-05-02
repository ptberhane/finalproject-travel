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


// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/MainPage");

var Page1 = require("../components/PG1/Page1");
var Page2 = require("../components/PG2/Page2");
var Page3 = require("../components/PG3/Page3");
var Page4 = require("../components/PG4/Page4");
var Page5 = require("../components/PG5/Page5");
var Page6 = require("../components/PG6/Page6");



// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Info or Chat show the appropriate component */}
      <Route path="home" component={Page1} />
      <Route path="Page2" component={Page2} />
      <Route path="newsfeed" component={Page3} />
      <Route path="Page4" component={Page4} />
      <Route path="signup" component={Page5} />
      <Route path="login" component={Page6} />
      {/* If user selects any other path... we get the Page1 Route */}
     
      <IndexRoute component={Page4}/>
    </Route>
  </Router>

);