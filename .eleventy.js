
const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs')
const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(syntaxHighlight);
    // Copy /images to /public
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy({'source/fonts/': 'fonts/'});
    eleventyConfig.addPassthroughCopy({'source/theme/': 'theme/'});

    // filter to parse markdown
    const md = new markdownIt({
        html: true,
      });

    eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
    });

    // enable classes and attributes in markdown
    const markdownItOptions = {
      html: true,
      linkify: true
    }

    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
    eleventyConfig.setLibrary('md', markdownLib)

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
    // set nunjucks as markdown template engine
    // could be useful for custom processing like mermaid
    // return {
    //     markdownTemplateEngine: "njk, md"
    // }
});