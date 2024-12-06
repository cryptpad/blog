
const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs')
const markdownItFootnote = require("markdown-it-footnote");
const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (function(eleventyConfig) {
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(syntaxHighlight);
    // Copy /images to /public
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy({'source/fonts/': 'fonts/'});
    eleventyConfig.addPassthroughCopy({'source/js/': 'js/'});
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

    const markdownLib = markdownIt(markdownItOptions)
      .use(markdownItAttrs)
      .use(markdownItFootnote);


    markdownLib.renderer.rules.footnote_caption = (tokens, idx) => {
      let n = Number(tokens[idx].meta.id + 1).toString();

      if (tokens[idx].meta.subId > 0) {
        n += ":" + tokens[idx].meta.subId;
      }

      return n;
    };

    eleventyConfig.setLibrary('md', markdownLib)

    // Debug filter
    eleventyConfig.addFilter("log", (d) => {
        console.log(d);
      });

    // typeof for array, using native JS Array.isArray()
    eleventyConfig.addFilter('isArray', something => Array.isArray(something))

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

    eleventyConfig.addCollection("allTags", function(collectionApi) {
      const tagsSet = new Set();
      collectionApi.getAll().map( item => {
          if (item.data.tags) { // handle pages that don't have tags
              item.data.tags.map( tag => tagsSet.add(tag))
          }
      });
      const sortedSet = new Set(Array.from(tagsSet).sort((str1,str2) => str1.toLowerCase().localeCompare(str2.toLowerCase())));
      return sortedSet;
  });
    // set nunjucks as markdown template engine
    // could be useful for custom processing like mermaid
    // return {
    //     markdownTemplateEngine: "njk, md"
    // }
});