(function ($) {

    window.ChosenView = Backbone.View.extend({

        el: $("#chosen"),

        initialize : function () {
            this.$list = this.el.find("ul.chosen-list");
            this.$img = $("#map img.the-map");
            this.$urlArea = $("#map textarea.map-url");
            this._rendered = false;
        },

        render : function (result) {
            var self = this,
            idx = 0;
            
            this._rendered = true;
            _.each(app.chosenList.models, function (result) {
                //result.idx = idx;
                self.add(result);
                idx++;
            });

            return this;
        },

        template : function(data){
            return ich.tmplChosen(data);
        },

        add : function (result) {
            var self = this,
                $li = this.template(result.toJSON());
            this.$list.append($li);
            $li.find(".remove-from-selection").bind("click", function(e){
                app.chosenList.remove(result);
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
