const { EleventyRenderPlugin } = require("@11ty/eleventy");
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPassthroughCopy({static: '/'});

  eleventyConfig.setLibrary(
    'md',
    markdownIt().use(markdownItAnchor)
  );
  eleventyConfig.addPlugin(pluginTOC);

  return {
    dir: {
        input: "pages",
        includes: "../templates",
    },
  }
};