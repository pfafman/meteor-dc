Package.describe({
  summary: "Fast n-dimensional filtering and grouping of records.",
  version: "2.0.0",
  git: "https://github.com/pfafman/meteor-dc.git"
});

//Npm.depends({ "dc": "0.1.0" });

Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");

  api.use('d3', 'client');
  api.use('pfafman:crossfilter', 'client');

  api.addFiles('lib/dc.js', 'client');
  //api.add_files('lib/dc.css', 'client'); // Leave out so you can customize
  api.export('dc', 'client');
});