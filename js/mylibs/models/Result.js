var Result = Backbone.Model.extend({
    defaults : {
        companyName : null,
        orgNr : null,
        lon : null,
        lat : null
    },

    validate : function (attrs) {
        if(!attrs.lon || !attrs.lat){
            return "no coords";
        }
    }
});
