define([
    "jquery",
    "underscore",
    "backbone"], function($, _, Backbone) {
    "use strict";

    var CompanyView = Backbone.View.extend({
        tagName: "li",

        // Écouter l'événement "submit" du formulaire
        // Appeler la fonction "addressEdit" en callback

        initialize: function() {
            this.template = _.template($('#company_template').html());

            // Écouter l'événement "change" du model, et appeler "render" en callback
        },

        render: function() {
            var view = this.template(this.model.toJSON());
            this.$el.html(view);
            return this;
        },

        addressEdit: function(e) {
            e.preventDefault();     // Bloque l'envoie du formulaire
            e.stopPropagation();    // Bloque la propagation de l'événement

            // Récupérer l'adresse, et la "setter" au modèle
        }
    });


    return CompanyView;
});