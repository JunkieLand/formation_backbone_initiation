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
    "views/CompanyView",
    "collections/Companies",
    "views/CompaniesView"], function($, _, Backbone, Conf, Company, CompanyView, Companies, CompaniesView) {
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
    var sharpView = new CompanyView({
        model: sharp
    });
    $("#companies").append(sharpView.render().el);


    // Exo 3
    var appleView = new CompanyView({
        model: apple
    });
    $("#companies").append(appleView.render().el);


    /*****   COLLECTIONS   *****/
    // Exo 4
    var companies = new Companies([{
        name: "Free",
        address: "En France"
    }, {
        name: "Numericable",
        address: "En France aussi"
    }]);
    var companiesView = new CompaniesView({
        collection: companies
    });
    companiesView.render();


    // Exo 5
    // Fetch la collection
});