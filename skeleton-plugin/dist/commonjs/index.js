'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _aureliaHttpClient = require('aurelia-http-client');

function configure(config) {
  config.globalResources('./hello-world');
}