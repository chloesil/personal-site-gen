const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');
const recursive = require('recursive-readdir');
const Promise = require('bluebird');

// Convert Node-style callback functions into promises.
const copyP = Promise.promisify(fs.copy);
const emptyDirP = Promise.promisify(fs.emptyDir);
const recursiveP = Promise.promisify(recursive);
const renderFileP = Promise.promisify(ejs.renderFile);
const writefileP = Promise.promisify(fs.writeFile);

/*
 * Returns the filename from a path without the extension.
 */
function getName(filepath) {
  const name = path.basename(filepath);
  const extension = name.lastIndexOf('.');
  return extension ? name.slice(0, extension) : name;
}

/*
 * Write a file to a given destination by combining an ejs template.
 */
function compile(dest, template) {
  return renderFileP(template, {}, {})
  .then(html => writefileP(dest, html, { encoding: 'utf-8' }));
}

const destDir = '../chloesil.github.io'

copyP('./src/assets', destDir)

// Get all the pages.
.then(() => recursiveP('./src/pages', ['_*.ejs']))

// Compile all the pages into ejs.
.then(filepaths => Promise.map(filepaths, filepath =>
  compile(`${destDir}/${getName(filepath)}.html`, filepath)
))

// Hard exit on any error.
.catch((err) => {
  console.error(err);
  process.exit(1);
});