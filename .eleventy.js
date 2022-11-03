const { DateTime } = require("luxon");

module.exports = (function(eleventyConfig) {
    // Copy /images to /public
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy({'source/fonts/': 'fonts/'})

    // Filter to display dates
    eleventyConfig.addFilter("postDate", (dateObj) => {
        // see Luxon ref to change format https://moment.github.io/luxon/#/formatting
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
});