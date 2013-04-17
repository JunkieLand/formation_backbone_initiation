define([
    "jquery",
    "underscore",
    "backbone"], function($, _, Backbone) {
    "use strict";

    var CompanyView = Backbone.View.extend({
        tagName: "li",

        events: {
            "submit .address_edit": "addressEdit"
        },

        initialize: function() {
            this.template = _.template($('#company_template').html());
            this.listenTo(this.model, "change", this.render);
        },

        render: function() {
            var view = this.template(this.model.toJSON());
            this.$el.html(view);
            return this;
        },

        addressEdit: function(e) {
            e.preventDefault();
            e.stopPropagation();

            var value = this.$(".new_address").val();
            this.model.set({
                address: value
            });
        }
    });


    return CompanyView;
});