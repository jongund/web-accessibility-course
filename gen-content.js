/*  gen-documentation.js */

/* Requirements */

const fs = require('fs');
const path = require('path');
const nunjucks  = require('nunjucks');

/* Constants */
const outputDirectory = './content/';
/* Helper functions */

function outputFile(fname, data) {
  fs.writeFile(path.join(outputDirectory, fname), data, err => {
      if (err) {
        console.error(err)
        return
      }
  })
}

// Create index file

outputFile('index.html',
           nunjucks.render('./src-content/content-index.njk',
          {title: 'Web Accessibility Course'}));

outputFile('about.html',
           nunjucks.render('./src-content/content-about.njk',
          {title: 'About'}));

outputFile('concepts.html',
           nunjucks.render('./src-content/content-about.njk',
          {title: 'Concepts'}));

