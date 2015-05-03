Package.describe({
  name: "pfafman:dc",
  summary: "Fast n-dimensional filtering and grouping of records.",
  version: "2.1.0_1",
  git: "https://github.com/pfafman/meteor-dc.git"
});


Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@1.0");

  api.use('d3js:d3', 'client');
  api.use('pfafman:crossfilter', 'client');

  api.addFiles('lib/dc.js', 'client');
  api.add_files('lib/dc.css', 'client'); // Leave out so you can customize
  api.export('dc', 'client');
});