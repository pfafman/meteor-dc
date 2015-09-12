Package.describe({
  name: "pfafman:dc",
  summary: "Fast n-dimensional filtering and grouping of records.",
  version: "2.1.0_3",
  git: "https://github.com/pfafman/meteor-dc.git"
});


Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0");

  api.use('d3js:d3', 'client');
  api.use('pfafman:crossfilter', 'client');

  api.addFiles(
    [
      'lib/dc.js',
      'lib/dc.css',
      'lib/export.js'
    ]
    , 'client'
  );

  api.export('dc', 'client');
});