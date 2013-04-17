define([
    "jquery",
    "underscore",
    "backbone",
    "views/CompanyView"], function($, _, Backbone, CompanyView) {
    "use strict";

    var CompaniesView = Backbone.View.extend({

        el: $("#content"),

        initialize: function() {
            this.ul = this.$("#companies");

            // Écouter l'événement "reset", et appeler "render" en callback
        },

        render: function() {
            this.ul.empty();
            this.collection.each(this.addOne, this);
        },

        addOne: function(model) {
            var itemView = new CompanyView({
                model: model
            });
            this.ul.append(itemView.render().el);
        }
    });

    return CompaniesView;
});