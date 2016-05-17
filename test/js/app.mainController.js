

var xmlURL 	 	= "http://stellen-online.de/index.php/jobexport.html?scope=standard&consumer=feed_premium&username=standard&password=standard0815",
    // xmlLocal    = "http://127.0.0.1/test_projekte/xml_feed/angular_jquery/media/js/jobexport.html.xml";
	xmlLocal 	= "media/js/jobexport.html.xml";
    testXML     = "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=sibeeshvenu";

app.controller('mainCtrl', function($scope, $http){
    
    $http
        // .get("http://127.0.0.1/test_projekte/xml_feed/mix_php_angular/xmlFeed.php?callback=?")
        .get("xmlFeed.php?callback=?")
        .success(function(response){
            $scope.details = response;

                // Filter - KOEAG
                $scope.filterKoeag = function (xmlList){
                    return xmlList.company === 'KÖNIGSTEINER AGENTUR GmbH';   
                }
               
        });
        
    $scope.predicate = '';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        if(predicate === 'location'){
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        }
        else {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        }
        $scope.predicate = predicate;
    };
});