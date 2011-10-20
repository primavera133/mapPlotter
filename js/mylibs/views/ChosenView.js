(function ($) {

    window.ChosenView = Backbone.View.extend({

        el: $("#chosen"),

        initialize : function () {
            this.$list = this.el.find("ul.chosen-list");
            this.$img = $("#map img.the-map");
            this.$urlArea = $("#map textarea.map-url");
        },

        render : function (company) {
            var self = this,
            _idx = 1;
            this.$list.empty();
            
            _.each(app.chosenList.models, function (company) {
                company.set({idx : _idx});
                self.add(company);
                _idx++;
            });

            return this;
        },

        template : function(data){
            return ich.tmplChosen(data);
        },

        add : function (company) {
            var $li = this.template(company.toJSON());
            this.$list.append($li);
            $li.find(".remove-from-selection").bind("click", function(e){
                app.chosenList.remove(company);
            });

            this.renderMap();
            return this;
        },

        remove : function () {
            this.$list.empty();
            this.render();
            this.renderMap();

            return this;
        },

        renderMap : function () {

            app.chosenList.calculateMapUrl();

            this.$img.attr("src", app.chosenList.mapUrl);
            this.$urlArea.val(app.chosenList.mapUrl);

        }


    });

}(jQuery));
