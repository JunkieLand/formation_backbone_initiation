define([
    "jquery",
    "underscore",
    "backbone"], function($, _, Backbone) {
    "use strict";

    var Conf = {
        baseUrl: "http://localhost:8080",

        init: function() {
            _.templateSettings.interpolate = /\{\{(.+?)\}\}/g;
            this.ajaxSpringFix();
            this.hateoas();
        },

        ajaxSpringFix: function() {
            $.ajaxSetup({
                accepts: {
                    json: 'application/json'
                }
            })
        },

        hateoas: function() {
            Backbone.Collection.prototype.parse = function(data) {
                return data.content;
            };
        }
    }

    return Conf;
});