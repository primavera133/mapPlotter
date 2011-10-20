<?php
include "config.php";
?>

<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">

  <!-- Use the .htaccess and remove these lines to avoid edge case issues.
       More info: h5bp.com/b/378 -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title></title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <!-- Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons -->

  <!-- CSS: implied media=all -->
  <!-- CSS concatenated and minified via ant build script-->
  <link rel="stylesheet" href="css/style.css">
  <!--link rel="stylesheet" href="http://static2.eniro.com.test.eniro.net/02.14.568/company/company.min.css"-->
  <!-- end CSS-->

  <!-- More ideas for your <head> here: h5bp.com/d/head-Tips -->

  <!-- All JavaScript at the bottom, except for Modernizr / Respond.
       Modernizr enables HTML5 elements & feature detects; Respond is a polyfill for min/max-width CSS3 Media Queries
       For optimal performance, use a custom Modernizr build: www.modernizr.com/download/ -->
  <script src="js/libs/modernizr-2.0.6.min.js"></script>
</head>

<body id="company" class="sv-se">

    <div id="container">
        <header>
            <h1>MapPlotter</h1>
            <h2>Sök, välj &amp; plotta</h2>
        </header>

        <div id="main" role="main">

            <section id="search">

                <form id="searchForm" action="http://api.eniro.com/cs/search/basic" method="get">
                    <input type="hidden" name="key" value="<?= $key ?>" />
                    <input type="hidden" name="profile" value="<?= $profile ?>" />
                    <input type="hidden" name="country" value="se" />
                    <input type="hidden" name="version" value="1.0.1" />
                    <input type="hidden" name="to_list" value="25" />
                    <input type="hidden" name="from_list" value="1" />
                    <fieldset>
                        <legend>
                            <strong>Sök på Eniro</strong>
                        </legend>

                        <input type="hidden" name="what" value="all" />

                        <div class="search-field what">
                            <label for="search_word">Vad söker du?</label>
                            <input type="text" tabindex="1" value="" name="search_word" id="search_word" />
                        </div>

                        <div class="search-field where">
                            <label for="where">Var?</label>
                            <input type="text" tabindex="2" value="" name="geo_area" id="where" />
                        </div>

                        <input type="submit" name="btn_all" tabindex="3" value="Sök" />
                    </fieldset>
                </form>

            </section>

            <section id="results">
                <h1>Sökresultat</h1>
                <ul class="results-list"></ul>

            </section>

            <section id="chosen">
                <h1>Valda företag</h1>
                <ul class="chosen-list"></ul>
            </section>

            <section id="map">
                <h1>Final map</h1>

                <img class="the-map" src="#" alt=""/>

                <textarea class="map-url"></textarea>
            </section>

        </div>
        <footer>

        </footer>
    </div> <!--! end of #container -->


    <!-- JavaScript at the bottom for fast page loading -->

    <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.js"></script>
    <script>window.jQuery || document.write('<script src="js/libs/jquery-1.6.2.min.js"><\/script>')</script>

    <!-- mvc libz -->
    <script src="js/libs/underscore-1.1.6.js"></script>
    <script src="js/libs/backbone.js"></script>

    <!--script src="js/libs/json2.js"></script-->

    <!-- Client templating -->
    <script src="js/libs/mustache.js/mustache.js"></script>
    <script src="js/libs/ICanHaz.js/ICanHaz.js"></script>


    <!-- scripts concatenated and minified via ant build script-->
    <script src="js/plugins.js"></script>
    <script src="js/mylibs/models/Poi.js"></script>
    <script src="js/mylibs/models/Result.js"></script>
    <script src="js/mylibs/models/Company.js"></script>
    <script src="js/mylibs/models/Poi.js"></script>
    <script src="js/mylibs/collections/Results.js"></script>
    <script src="js/mylibs/collections/ChosenList.js"></script>
    <script src="js/mylibs/collections/Pois.js"></script>
    <script src="js/mylibs/views/ResultsView.js"></script>
    <script src="js/mylibs/views/ChosenView.js"></script>
    <script src="js/mylibs/controllers/MapPlotterController.js"></script>
    <!-- end scripts-->


   <!-- ICanHaz templates -->
    <script id="tmplResults" type="text/html">
        <li>
            <span class="idx">{{idx}}</span>
            <a class="add-to-selection" title="add to selection">+</a>
            <span class="company-name">{{companyName}}</span> <span class="org-nr">{{orgNr}}</span>
        </li>
    </script>

    <script id="tmplChosen" type="text/html">
        <li>
            <span class="idx">{{idx}}</span>
            <a class="remove-from-selection" title="remove from selection">-</a>
            <span class="company-name">{{companyName}}</span> <span class="org-nr">{{orgNr}}</span>
        </li>
    </script>



    <script>
        $(document).ready(function () {
            // init our app
            window.app = MapPlotterController.init();
        });
    </script>


  <!-- Change UA-XXXXX-X to be your site's ID -->
  <!--script>
    window._gaq = [['_setAccount','UAXXXXXXXX1'],['_trackPageview'],['_trackPageLoadTime']];
    Modernizr.load({
      load: ('https:' == location.protocol ? '//ssl' : '//www') + '.google-analytics.com/ga.js'
    });
  </script-->


  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7 ]>
    <script src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->



</body>
</html>
