const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginDate = require('eleventy-plugin-date');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const germanDate = require("./_filters/german-date.js");
const germanDateTime = require("./_filters/german-date-time.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginDate);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addFilter("germanDateTime", germanDateTime);
  eleventyConfig.addFilter("germanDate", germanDate);
};
