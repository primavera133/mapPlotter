var Results = Backbone.Collection.extend({

    model : Result,

    initialize : function(){

        this.view = new ResultsView({
            model : this.model
        });

        this.bind("add", function(result){
            this.view.add(result);
        });



    }

});
