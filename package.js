Package.describe({
  name: "pfafman:dc",
  summary: "Fast n-dimensional filtering and grouping of records.",
  version: "2.1.0_24",
  git: "https://github.com/pfafman/meteor-dc.git"
});


Package.onUse(function (api) {
  api.versionsFrom('1.0.0');

  api.use('d3js:d3', 'client');
  api.use('pfafman:crossfilter@1.4.0', 'client');

  api.addFiles(
    [
      'lib/dc.js',
      'lib/dc.css',
      'lib/export.js'
    ]
    , 'client'
  );

});