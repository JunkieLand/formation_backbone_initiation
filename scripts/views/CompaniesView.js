define([
    "jquery",
    "underscore",
    "backbone",
    "views/CompanyView"], function($, _, Backbone, CompanyView) {
    "use strict";

    var CompaniesView = Backbone.View.extend({

        el: $("#content"),

        events: {
            "submit #new_company": "createCompany"
        },

        initialize: function() {
            this.ul = this.$("#companies");
            this.listenTo(this.collection, "reset", this.render);
            this.listenTo(this.collection, "add", this.addOne);
        },

        render: function() {
            this.ul.empty();
            this.collection.each(this.addOne, this);
        },

        createCompany: function(e) {
            e.preventDefault();
            e.stopPropagation();

            var newName = this.$("#new_name").val(),
                newAddress = this.$("#new_address").val();

//            this.collection.add({
            this.collection.create({
                name: newName,
                address: newAddress
            });
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