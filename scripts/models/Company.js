define([
    "jquery",
    "underscore",
    "backbone",
    "conf"], function($, _, Backbone, Conf) {
    "use strict";

    var Company = Backbone.Model.extend({
        defaults : {
            name: "no name",
            address: "no address"
        },

        urlRoot: Conf.baseUrl + "/api/companies"
    });

    return Company;
});