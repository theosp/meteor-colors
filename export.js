import { checkNpmVersions } from "meteor/tmeasday:check-npm-versions";

checkNpmVersions({
  'colors': '1.1.x',
}, 'meteorspark:meteor-colors');

try {
  this.colors = require('colors');
  this.colors.enabled = true;
  colors = this.colors;
  delete this.colors;
} catch (e) {
  console.error("Failed to init console colors");
}
