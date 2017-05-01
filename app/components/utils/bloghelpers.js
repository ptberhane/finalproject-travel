import axios from 'axios';
//import {Router, Route, hashHistory, browserHistory} from 'react-router';

const blogHelper = {
// Retrieves all blogs from the db
  getallBlogs: function() {
    return axios.get("/blogs");
  },
  // Saves a new blog to the db
  SubmitBlogs: function(text) {
    return axios.post("/submit", {text});
  },

};


export default blogHelper;