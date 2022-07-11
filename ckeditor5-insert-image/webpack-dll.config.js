"use strict";

/* eslint-env node */

const { builds } = require("@ckeditor/ckeditor5-dev-utils");

module.exports = builds.getDllPluginWebpackConfig({
    themePath: require.resolve("@ckeditor/ckeditor5-theme-lark"),
    packagePath: __dirname,
    manifestPath: require.resolve(
        "./ckeditor5-dll/ckeditor5-dll.manifest.json"
    ),
    isDevelopmentMode: process.argv.includes("--dev"),
});
