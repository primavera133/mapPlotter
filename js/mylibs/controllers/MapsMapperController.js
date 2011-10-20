var MapsMapperController = {
    
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

                    //fake response for demo
                    goFake = function () {
                        var fakeData = { "title" : "Gula sidorna API", "id" : "http://api.eniro.com/partnerapi/cs/search/basic?geo_area=%C3%B6rebro&country=se&search_word=hotell&profile=mapsMapper&to_list=25&version=1.0.1&what=all&from_list=&_=1318959486834&key=7051286752895143453&callback=jQuery162005526407785750498_1318957714336", "totalHits" : 49, "totalCount" : 49, "startIndex" : 0, "itemsPerPage" : 25, "adverts" : [ { "eniroId" : "14839960", "companyInfo" : { "companyName" : "Best Western City Hotel" , "orgNumber" : "5566492194" , "companyText" : "I Örebro city hittar du Best Western City Hotel. Nyinredda hotellrum, frukostmatsal och..." }, "address" : { "streetName" : "Kungsg. 24" , "postCode" : "702 24" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.212081756522982 , "latitude" : 59.26884577016639 }, { "use" : "route", "longitude" : 15.212081756522982 , "latitude" : 59.26884577016639 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 601 42 00" , "label" : null } ], "homepage" : "http://www.cityhotelorebro.se" , "email" : "info@cityhotelorebro.se" }, { "eniroId" : "4686219", "companyInfo" : { "companyName" : "Scandic Grand Hotel" , "orgNumber" : "5562991009" , "companyText" : "Scandic Grand Hotel är centralt beläget i Örebro. Hotellet erbjuder 9 mötesrum med plats för upp..." }, "address" : { "streetName" : "Fabriksg. 23" , "postCode" : "702 23" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.206254584136556 , "latitude" : 59.269142212878336 }, { "use" : "route", "longitude" : 15.206254584136556 , "latitude" : 59.269142212878336 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 767 43 00" , "label" : null } ], "homepage" : "http://clk.tradedoubler.com/click?p=118393&a=1497628&g=17956332&url=http://www.scandichotels.se/grandhotel?cmpid=eniro0932" , "email" : "orebrogrand@scandichotels.com" }, { "eniroId" : "14838408", "companyInfo" : { "companyName" : "Scandic Örebro Väst" , "orgNumber" : "5562991009" , "companyText" : "Hotell i Örebro med 204 rum. 12 mötesrum, trådlös Internetuppkoppling, relaxcenter med bastu och..." }, "address" : { "streetName" : "Västhagag. 1" , "postCode" : "703 46" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.177187664642345 , "latitude" : 59.27440909543582 }, { "use" : "route", "longitude" : 15.177187664642345 , "latitude" : 59.27440909543582 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 767 44 00" , "label" : null } ], "homepage" : "http://clk.tradedoubler.com/click?p=118393&a=1497628&g=17956384&url=http://www.scandichotels.se/orebrovast?cmpid=eniro0958" , "email" : "orebrovast@scandichotels.com" }, { "eniroId" : "3922125", "companyInfo" : { "companyName" : "Quality Hotel Örebro" , "orgNumber" : "5564483484" , "companyText" : "Hit kan du komma när det passar dig! Receptionen är öppen dygnet runt. På morgonen står vår stora..." }, "address" : { "streetName" : "Boglundsg. 2" , "postCode" : "701 19" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.204987048518943 , "latitude" : 59.29727876786646 }, { "use" : "route", "longitude" : 15.204987048518943 , "latitude" : 59.29727876786646 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 20 50 00" , "label" : null } ], "homepage" : "http://www.choicehotels.se" , "email" : "q.orebro@choice.se" }, { "eniroId" : "14477918", "companyInfo" : { "companyName" : "Plaza Hotel" , "orgNumber" : "5563191302" , "companyText" : null }, "address" : { "streetName" : "Storg. 23" , "postCode" : "703 61" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.215965935627626 , "latitude" : 59.277463259293825 }, { "use" : "route", "longitude" : 15.215965935627626 , "latitude" : 59.277463259293825 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 611 90 35" , "label" : null } ], "homepage" : "http://www.plazahotel.se" , "email" : "info@plazahotel.se" }, { "eniroId" : "14920847", "companyInfo" : { "companyName" : "Behrn Hotell" , "orgNumber" : "5560960253" , "companyText" : "Hotellet mitt i city! Behrn Hotell är fyr-stjärnigt där alla rum är designade utöver det vanliga." }, "address" : { "streetName" : "Stortorget 12" , "postCode" : "702 11" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.215144795414757 , "latitude" : 59.27120267181153 }, { "use" : "route", "longitude" : 15.215144795414757 , "latitude" : 59.27120267181153 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 12 00 95" , "label" : null } ], "homepage" : "http://www.behrnhotell.se" , "email" : "info@behrnhotell.se" }, { "eniroId" : "14860271", "companyInfo" : { "companyName" : "Hotell Göta" , "orgNumber" : "5568548316" , "companyText" : "Låt dig förtrollas av den personliga och varma atmosfären på detta hemtrevliga hotell, beläget mitt..." }, "address" : { "streetName" : "Olaig. 11" , "postCode" : "703 61" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.213031655171903 , "latitude" : 59.2757353470356 }, { "use" : "route", "longitude" : 15.213031655171903 , "latitude" : 59.2757353470356 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 611 53 63" , "label" : null } ], "homepage" : "http://www.hotellgota.nu" , "email" : "info@hotellgota.nu" }, { "eniroId" : "14904605", "companyInfo" : { "companyName" : "Livin' Hotell, Vandrarhem & Konferens" , "orgNumber" : "5563191468" , "companyText" : null }, "address" : { "streetName" : "Järnvägsg. 22" , "postCode" : "703 62" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.218535920905776 , "latitude" : 59.27693627373286 }, { "use" : "route", "longitude" : 15.218535920905776 , "latitude" : 59.27693627373286 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 31 02 40" , "label" : null } ], "homepage" : "http://www.livin.se" , "email" : "info@livin.se" }, { "eniroId" : "14930589", "companyInfo" : { "companyName" : "Elite Stora Hotellet" , "orgNumber" : "5562485259" , "companyText" : null }, "address" : { "streetName" : "Drottningg. 1" , "postCode" : "701 45" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.213424697770137 , "latitude" : 59.27330441121216 }, { "use" : "route", "longitude" : 15.213424697770137 , "latitude" : 59.27330441121216 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 15 69 00" , "label" : null } ], "homepage" : "http://www.elite.se" , "email" : "info@elite.se" }, { "eniroId" : "14840880", "companyInfo" : { "companyName" : "Hotell Storgården" , "orgNumber" : "5902047124" , "companyText" : null }, "address" : { "streetName" : "Fredsg. 11" , "postCode" : "703 62" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.215079534045673 , "latitude" : 59.2769924421963 }, { "use" : "route", "longitude" : 15.215079534045673 , "latitude" : 59.2769924421963 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 12 02 00" , "label" : null } ], "homepage" : "http://www.hotellstorgarden.se" , "email" : "info@hotellstorgarden.se" }, { "eniroId" : "14272647", "companyInfo" : { "companyName" : "First Hotel Örebro" , "orgNumber" : "5567337463" , "companyText" : "71-rumshotellet med familjär atmosfär och personligt bemötande centralt beläget med goda ..." }, "address" : { "streetName" : "Storg. 24" , "postCode" : "703 61" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.216498161028888 , "latitude" : 59.277115574044785 }, { "use" : "route", "longitude" : 15.216498161028888 , "latitude" : 59.277115574044785 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 611 73 00" , "label" : null } ], "homepage" : "http://www.hotellorebro.se" , "email" : "boka@hotellorebro.se" }, { "eniroId" : "14848354", "companyInfo" : { "companyName" : "Slussen Bed & Breakfast" , "orgNumber" : "6510256636" , "companyText" : null }, "address" : { "streetName" : "Oljev. 6" , "postCode" : "702 15" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.240227884825659 , "latitude" : 59.27407899768538 }, { "use" : "route", "longitude" : 15.240227884825659 , "latitude" : 59.27407899768538 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "0705 - 86 02 82" , "label" : null } ], "homepage" : "http://www.slussenorebro.se" , "email" : null }, { "eniroId" : "7924126", "companyInfo" : { "companyName" : "Ibis Hotel" , "orgNumber" : "5563056562" , "companyText" : null }, "address" : { "streetName" : "Stenbackev. 2" , "postCode" : "702 25" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.196174164229918 , "latitude" : 59.26015439904284 }, { "use" : "route", "longitude" : 15.196174164229918 , "latitude" : 59.26015439904284 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 17 07 07" , "label" : null } ], "homepage" : "http://www.ibishotel.se" , "email" : null }, { "eniroId" : "14862937", "companyInfo" : { "companyName" : "Hotel Express International" , "orgNumber" : "5564925021" , "companyText" : null }, "address" : { "streetName" : null , "postCode" : "701 50" , "postArea" : "ÖREBRO" , "postBox" : "Box 543" }, "location" : { "coordinates" : [ { "longitude" : null , "latitude" : null }, { "use" : "route", "longitude" : null , "latitude" : null } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 16 60 60" , "label" : null } ], "homepage" : "http://www.hotel-express.se" , "email" : null }, { "eniroId" : "14946468", "companyInfo" : { "companyName" : "Norrbyås Qh & Bo På Lantgård" , "orgNumber" : "6310184889" , "companyText" : null }, "address" : { "streetName" : "Norrbyås 527" , "postCode" : "705 95" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.381276536344657 , "latitude" : 59.197756489705284 }, { "use" : "route", "longitude" : 15.381276536344657 , "latitude" : 59.197756489705284 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 23 80 97" , "label" : null } ], "homepage" : null , "email" : null }, { "eniroId" : "14918953", "companyInfo" : { "companyName" : "Bäck's Bed & Breakfast" , "orgNumber" : "5810226604" , "companyText" : null }, "address" : { "streetName" : "Bäck 517" , "postCode" : "719 91" , "postArea" : "VINTROSA" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.00555693589308 , "latitude" : 59.2404940276174 }, { "use" : "route", "longitude" : 15.00555693589308 , "latitude" : 59.2404940276174 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "076 - 848 42 94" , "label" : null } ], "homepage" : null , "email" : null }, { "eniroId" : "14915187", "companyInfo" : { "companyName" : "Clarion Hotel Örebro" , "orgNumber" : "5564201514" , "companyText" : null }, "address" : { "streetName" : "Kungsg. 14" , "postCode" : "702 11" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.212912853871066 , "latitude" : 59.270465394417876 }, { "use" : "route", "longitude" : 15.212912853871066 , "latitude" : 59.270465394417876 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 670 67 00" , "label" : null } ], "homepage" : null , "email" : null }, { "eniroId" : "4043693", "companyInfo" : { "companyName" : "Sanna-Kroa Motell AB" , "orgNumber" : "5563538262" , "companyText" : null }, "address" : { "streetName" : null , "postCode" : "719 91" , "postArea" : "VINTROSA" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : null , "latitude" : null }, { "use" : "route", "longitude" : null , "latitude" : null } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 29 44 14" , "label" : null } ], "homepage" : "http://www.sannakroa.com" , "email" : null }, { "eniroId" : "14873342", "companyInfo" : { "companyName" : "Continent Touring" , "orgNumber" : "5561606624" , "companyText" : "Vi har Bussresor med kristen inriktning för er som vill ha kvalité antingen ni vill följa med på en..." }, "address" : { "streetName" : "Nybble 6" , "postCode" : "719 91" , "postArea" : "VINTROSA" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.013177174020099 , "latitude" : 59.20811541698745 }, { "use" : "route", "longitude" : 15.013177174020099 , "latitude" : 59.20811541698745 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 16 41 61" , "label" : null } ], "homepage" : "http://www.continenttouring.se" , "email" : "info@continenttouring.se" }, { "eniroId" : "14840314", "companyInfo" : { "companyName" : "Scandic Grand Hotel" , "orgNumber" : "5560633520" , "companyText" : "Scandic Grand Hotel är centralt beläget i Örebro. Hotellet erbjuder 9 mötesrum med plats för upp..." }, "address" : { "streetName" : "Fabriksg. 23" , "postCode" : "702 23" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.206237207243605 , "latitude" : 59.2691331559344 }, { "use" : "route", "longitude" : 15.206237207243605 , "latitude" : 59.2691331559344 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 767 43 00" , "label" : null } ], "homepage" : "http://www.scandichotels.se?cmpid=eniro_meeting0932" , "email" : "orebrogrand@scandichotels.com" }, { "eniroId" : "4204234", "companyInfo" : { "companyName" : "Unionen" , "orgNumber" : "8020015759" , "companyText" : "Unionen är Sveriges största fackförbund för dig i det privata arbetslivet. Tillsammans skapar vi..." }, "address" : { "streetName" : "Drottningg. 38" , "postCode" : "702 22" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.20921434657521 , "latitude" : 59.26936228706258 }, { "use" : "route", "longitude" : 15.20921434657521 , "latitude" : 59.26936228706258 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 17 46 00" , "label" : null } ], "homepage" : "http://www.unionen.se" , "email" : null }, { "eniroId" : "14838407", "companyInfo" : { "companyName" : "Scandic Örebro Väst" , "orgNumber" : "5560633520" , "companyText" : "Hotell i Örebro med 204 rum. 12 mötesrum, trådlös Internetuppkoppling, relaxcenter med bastu och..." }, "address" : { "streetName" : "Västhagag. 1B" , "postCode" : "703 46" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.177187664642345 , "latitude" : 59.27440909543582 }, { "use" : "route", "longitude" : 15.177187664642345 , "latitude" : 59.27440909543582 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 767 44 00" , "label" : null } ], "homepage" : "http://www.scandichotels.se?cmpid=eniro_meeting0958" , "email" : "orebrovast@scandichotels.com" }, { "eniroId" : "14863672", "companyInfo" : { "companyName" : "Örebro universitet" , "orgNumber" : "2021002924" , "companyText" : "Örebro universitet är ett modernt och expansivt universitet. Vi erbjuder attraktiva..." }, "address" : { "streetName" : "Fakultetsg. 1" , "postCode" : "702 81" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.249330663740974 , "latitude" : 59.254728286674776 }, { "use" : "route", "longitude" : 15.249330663740974 , "latitude" : 59.254728286674776 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 30 30 00" , "label" : null } ], "homepage" : "http://www.oru.se" , "email" : "info@oru.se" }, { "eniroId" : "14318343", "companyInfo" : { "companyName" : "Marvik AB" , "orgNumber" : "5566541396" , "companyText" : null }, "address" : { "streetName" : "Fredsg. 11" , "postCode" : "703 62" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.215079534045673 , "latitude" : 59.2769924421963 }, { "use" : "route", "longitude" : 15.215079534045673 , "latitude" : 59.2769924421963 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "077 - 121 22 00" , "label" : null } ], "homepage" : null , "email" : null }, { "eniroId" : "14982160", "companyInfo" : { "companyName" : "Hotell Ansgar" , "orgNumber" : "9165766370" , "companyText" : null }, "address" : { "streetName" : "Järnvägsg. 10" , "postCode" : "703 62" , "postArea" : "ÖREBRO" , "postBox" : null }, "location" : { "coordinates" : [ { "longitude" : 15.215279268039371 , "latitude" : 59.27761275101229 }, { "use" : "route", "longitude" : 15.215279268039371 , "latitude" : 59.27761275101229 } ] }, "phoneNumbers" : [ { "type" : "std" , "phoneNumber" : "019 - 10 04 20" , "label" : null } ], "homepage" : null , "email" : null } ] }
                        self.searchController.filterSearchData(fakeData);
                    };


                    $.ajax({
                        url : proxyUrl,
                        //data : $form.serialize(),
                        dataType:  "json",
                        success : function (data) {
                            if(!data.contents.error){
                                self.searchController.filterSearchData(data.contents);
                            }
                            else {
                                goFake();
                            }
                        },
                        error : function (err) {
                            goFake();
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


    // any other functions here should be events handlers that respond to
    // document level events. In my case I was using this to respond to incoming XMPP
    // events. So the logic for knowing what those meant and creating or updating our
    // models and collections lived here.
    //handlePubSubUpdate: function () {}
};