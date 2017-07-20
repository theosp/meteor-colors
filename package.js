Package.describe({
  summary: "Add colors to strings using Colors.js",
  version: "1.1.2",
  name: "meteorspark:colors",
  git: "https://github.com/theosp/meteor-colors.git"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.5.1');

  api.use("ecmascript", 'server');
  api.use("tmeasday:check-npm-versions@0.3.1", 'server');

  api.export('colors', 'server');
  api.add_files('export.js', 'server');
});
