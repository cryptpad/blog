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

    eleventyConfig.addFilter("topTags", (d) => {
        let tags = [];
        for (const [key, value] of Object.entries(d)) {
            tags.push({name: key, count: value.length});
        };
        tags.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));
        tags.shift(); // remove first item "all"
        tags = tags.slice(0, 10); // take top 10
        return tags;
    });
});