(function ($) {

    window.ResultsView = Backbone.View.extend({

        el: $("#results .results-list"),

        render : function () {

            return this;
        },

        add : function (result) {
            var self = this;
            var template = this.getTemplate(result.toJSON());

            $(template).find(".add-to-selection").bind("click", function(e){
                self.addResultToSelection(e, result);
            });

            this.el.append(template);
            
            return this;
        },

        empty : function () {
            this.el.empty();
        },

        getTemplate : function(data){
            return ich.tmplResults(data);
        },

        addResultToSelection : function (e, model) {
            try {
                app.chosenList.add(model);
            }
            catch (err) {
                //Suppress add twice errors
                console.log("catch addResultToSelection", err);
            }
        }



    });

}(jQuery));
