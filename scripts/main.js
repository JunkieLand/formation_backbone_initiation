require.config({
    paths: {
        jquery: "libs/jquery_1.9.1",
        underscore: "libs/underscore_1.4.4",
        backbone: "libs/backbone_1.0.0"
    },
    shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        underscore: {
            exports: "_"
        }
    }
});


require([
    "jquery",
    "underscore",
    "backbone"], function($, _, Backbone) {
    "use strict";


});