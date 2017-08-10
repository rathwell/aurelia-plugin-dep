Issue
---
When using a custom plugin that has additional dependencies, those dependencies are not being bundled in the consuming app.  When the missing dependency is explicitly added in the consuming app's aurelia.json (as in Example 2 below), it seems to be included in the bundle as expected.

Example 1 (as is currently in repo)
---

    {
      "name": "aurelia-skeleton-plugin",
      "path": "../node_modules/aurelia-skeleton-plugin/dist/amd",
      "main": "aurelia-skeleton-plugin"
    }


Example 2 (this fixes it, but is not really a viable solution)
---

    {
      "name": "aurelia-http-client",
      "path": "../node_modules/aurelia-http-client/dist/amd",
      "main": "aurelia-http-client"
    },
    {
      "name": "aurelia-skeleton-plugin",
      "path": "../node_modules/aurelia-skeleton-plugin/dist/amd",
      "main": "aurelia-skeleton-plugin"
    }


To setup and run:
---
    # requires aurelia-cli and gulp installed globally
    cd skeleton
    npm install
    gulp build
    cd ../app
    npm install
    au run --watch


Error on Mac:
---
    ...
    Tracing aurelia-skeleton-plugin...
    error /.../app/node_modules/aurelia-skeleton-plugin/dist/amd/aurelia-skeleton-plugin.js
    ...


Error on Windows:
---
    ...
    Tracing main...
    ------- File not found or not accessible ------
    | Location: C:/.../app/src/aurelia-http-client.js
    | Requested by: C:\...\app\src\main.js
    | Is this a package? Make sure that it is configured in 
    aurelia.json and that it is not a Node.js package
    -----------------------------------------------
    ...

