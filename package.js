Package.describe({
  name: "pfafman:dc",
  summary: "Fast n-dimensional filtering and grouping of records.",
  version: "2.1.0_23",
  git: "https://github.com/pfafman/meteor-dc.git"
});

Npm.depends({
  d3: "3.5.16"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.0");
  api.use("modules");
  api.use('pfafman:crossfilter', ['client', 'server']);


  api.addFiles(
    [
      'lib/dc.js',
      'lib/dc.css',
      'lib/export.js'
    ]
    , 'client'
  );

  api.export('dc', ['client', 'server']);
});
