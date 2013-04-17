define([
    "jquery",
    "underscore",
    "backbone",
    "views/CompanyView"], function($, _, Backbone, CompanyView) {
    "use strict";

    var CompaniesView = Backbone.View.extend({

        el: $("#content"),

        events: {
            // TODO
        },

        initialize: function() {
            this.ul = this.$("#companies");
            this.listenTo(this.collection, "reset", this.render);
            // Écouter l'événement "add", et appeler "render" en callback
        },

        render: function() {
            this.ul.empty();
            this.collection.each(this.addOne, this);
        },

        createCompany: function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Récupérer les nouvelles valeurs
            // Les ajouter à la collection
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