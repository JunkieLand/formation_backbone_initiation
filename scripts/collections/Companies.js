define([
    "jquery",
    "underscore",
    "backbone",
    "models/Company",
    "conf"], function($, _, Backbone, Company, Conf) {
    "use strict";

    var Companies = Backbone.Collection.extend({
        model: Company

        // Ajouter l'URL
    });

    return Companies;
});