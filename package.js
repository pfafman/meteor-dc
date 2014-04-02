Package.describe({
  summary: "Fast n-dimensional filtering and grouping of records."
});


Package.on_use(function (api, where) {

  api.use('d3', 'client');
  api.use('crossfilter', 'client');

  api.add_files('lib/dc.js', 'client');
  api.add_files('lib/dc.css', 'client');
  api.export('dc', 'client');
});