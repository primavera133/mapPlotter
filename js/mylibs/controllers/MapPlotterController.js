var MapPlotterController = {
    
    init: function (spec) {

        var self = this;

        this.searchController = {

            init : function () {

                $("#searchForm").bind("submit", function(e){
                    e.preventDefault();

                    var $form = $(this),
                        domain = $form.attr("action"),
                        query = "?" + $form.serialize(),
                        url = domain + query,
                        proxyUrl = "/ba-simple-proxy.php?url=" + encodeURIComponent(url);

                    $.ajax({
                        url : proxyUrl,
                        //data : $form.serialize(),
                        dataType:  "json",
                        success : function (data) {
                            if(!data.contents.error){
                                self.searchController.filterSearchData(data.contents);
                            }
                            else {
                                throw "search error";
                            }
                        },
                        error : function (err) {
                            throw "search error";
                        }
                    });



                })
            },

            filterSearchData : function (data) {
                self.results.view.empty();

                var idx = 0;

                _.each(data.adverts, function(advert){
                    var filteredAdvert = {};
                    try {
                        filteredAdvert.companyName = advert.companyInfo.companyName;
                        filteredAdvert.orgNr = advert.companyInfo.orgNumber;
                        filteredAdvert.lon = advert.location.coordinates[0].longitude;
                        filteredAdvert.lat = advert.location.coordinates[0].latitude;
                        filteredAdvert.idx = idx;
                    }
                    catch (error) {
                        console.log("ERROR IN PARSING DATA");
                    }

                    //add to resultsCollection
                    self.results.add(filteredAdvert);

                    idx++;
                });


            }

        }


        this.results = new Results();

        this.chosenList = new ChosenList();

        this.searchController.init();

        return this;
    }

};
