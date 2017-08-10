'use strict';

System.register(['aurelia-http-client'], function (_export, _context) {
  "use strict";

  var HttpClient;
  function configure(config) {
    config.globalResources('./hello-world');
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {}
  };
});