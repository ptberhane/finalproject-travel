// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var request = require("request");
var cheerio = require("cheerio");
var newsFeed = require("../models/newsfeed.js");

// Initialize Express
var app = express();

// Create route for the thingstodo
app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with request
  request("https://www.ytravelblog.com/blog/", function(error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(html);
    // Now, we grab every h2 within an article tag, and do the following:
    $("article").each(function(i, element) {

      // Save an empty result object
      var result = {};

      // Add the text and href of every link, and save them as properties of the result object
      result.title = $(this).children("h2").children("a").text();
      result.link = $(this).children("h2").children("a").attr("href");
      result.image = $(this).children("header").children("a").children("img").attr("src");
      result.post = $(this).children("div").children("p").text();

     // console.log(result);

      var entry = new newsFeed(result);

      // Now, save that entry to the db
      entry.save(function(err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

    });
  });
  // Tell the browser that we finished scraping the text
  res.send("Scrape Complete");
});


module.exports = app