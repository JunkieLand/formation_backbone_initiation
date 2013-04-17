require.config({
    paths: {
        jquery: "libs/jquery_1.9.1",
        underscore: "libs/underscore_1.4.4",
        backbone: "libs/backbone_1.0.0",
        conf: "conf/conf"
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
    "backbone",
    "conf",
    "models/Company",
    "views/CompanyView"], function($, _, Backbone, Conf, Company, CompanyView) {
    "use strict";

    Conf.init();


    /*****   MODELS   *****/
    // Exo 1
    var apple = new Company({
        id: 2
    });
    apple.fetch({
        success: function(model) {
            console.log(model.get("name") + " is at " + model.get("address"));
        }
    });


    /*****   VIEWS   *****/
    // Exo 2
    var sharp = new Company({
        name: "Sharp",
        address: "Japan"
    });

    // Créez une vue pour "sharp"
    // Affichez la dans le navigateur



    // Pro tip : l'élément "el" de la vue doit être passé au DOM

});