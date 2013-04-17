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
    "models/Company"], function($, _, Backbone, Conf, Company) {
    "use strict";

    Conf.init();


    /*****   MODELS   *****/
    // 1- Créez une instance de Company
    //    Sauvez le. Vérifiez en console qu'il est bien sauvé


    // 2- Créez une instance de Company avec {id: 1}
    //    Récupérez le. Constater en console son contenu

});