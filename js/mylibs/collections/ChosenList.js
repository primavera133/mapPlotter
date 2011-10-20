var ChosenList = Backbone.Collection.extend({

    model : Company,

    mapUrl : null,

    initialize : function () {

        this.view = new ChosenView({
            model : this.model
        });

        this.bind("add", function (result) {
            this.view.add(result);
        });

        this.bind("remove", function (result) {
            this.view.remove(result);
        });

    },

    calculateMapUrl : function () {
        var url = "http://kartor.eniro.se/api/statmap?" +
            "iwidth=400" +
            "&iheight=400";

        _.each(this.models, function (company, i) {
            var idx = i+1;
            url += "&p=" + company.get("lon") + "," + company.get("lat") + ";yp-pin" + idx;
            url += "&yp-pin" + idx + "=yellow-" + idx + ".png"
        });

        url += "&prefix=http://kartor.eniro.se/media/markers/search/";

        this.mapUrl = url;
        console.log("url = " + this.mapUrl);
    }
    
});
