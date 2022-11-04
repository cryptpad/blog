const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = (function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    // Copy /images to /public
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy({'source/fonts/': 'fonts/'});
    eleventyConfig.addPassthroughCopy({'source/theme/': 'theme/'});

    // Debug filter
    eleventyConfig.addFilter("log", (d) => {
        console.log(d);
      });

    // Filter to display dates
    eleventyConfig.addFilter("postDate", (dateObj) => {
        // see Luxon ref to change format https://moment.github.io/luxon/#/formatting
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
});