const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPassthroughCopy({static: '/'});
  return {
    dir: {
        input: "pages",
        includes: "../templates",
    },
  }
};