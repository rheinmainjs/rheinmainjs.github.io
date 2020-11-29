const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginDate = require("eleventy-plugin-date");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  // eleventyConfig.pathPrefix("/rmjs-11ty/");
  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  //eleventyConfig.addPassthroughCopy("css/fonts");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginDate, {
    // Specify custom date formats
    formats: {
      // Change the readableDate filter to use abbreviated months.
      readableDate: { year: "numeric", month: "numeric", day: "numeric" },
      // Add a new filter to format a Date to just the month and year.
      readableMonth: { year: "numeric", month: "long" },
      germanDate: { weekday: "long", day: "numeric", month: "numeric", year: "numeric" },
      // Add a new filter using formatting tokens.
      timeZone: "z",
    }
  });
  eleventyConfig.addPlugin(pluginRss);
};
