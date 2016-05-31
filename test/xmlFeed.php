<?php 	
	
	/**
	* 
	*/
	class Anzeigen 
	{

		
		public $xmlURI 		= 'http://stellen-online.de/index.php/jobexport.html?scope=standard&consumer=feed_premium&username=standard&password=standard0815';
		public $xmlLocal 	= 'media/js/jobexport.html.xml';
		public $koeag		= 'KÖNIGSTEINER AGENTUR GmbH';

		function __construct(){
			// echo 'Klasse Anzeige geht<br /><br />';
		}

		function getAnzeige($local){			
			$xmlURL = ($local) ? $this->xmlURI : $this->xmlLocal;

			// echo 'URL: '.$xmlURL.'<br /><br />';

			$xml  = simplexml_load_file($xmlURL);
			$array = array();
			$date = new DateTime();
			$i = 0;

			foreach ($xml->job as $key) {
				if ((string) $key->companyname1 == $this->koeag) {

					$date->setTimestamp((string)$key->publicationdate_unixtimestamp);
					// $date->format('U = Y-m-d H:i:s');

					// $array[$i]['date']  	= (string) $key->publicationdate_unixtimestamp;
					$array[$i]['date']  	= $date->format('d.m.Y');
					$array[$i]['location'] 	= (string) $key->location;
					$array[$i]['position'] 	= (string) $key->position;
					$array[$i]['url']		= (string) $key->URL;

					$i++;
				}
			}

			
			$xmlFeed = json_encode($array, JSON_UNESCAPED_UNICODE );
			
			print_r($xmlFeed);

			if (isset($_GET['callback'])){
				return $_GET['callback'].'('.$xmlFeed.');';
			}
			
		}
	}

	$anzeige = new Anzeigen();
	$anzeige->getAnzeige(true);

	// if(isset($_GET['lokal']) == false){
	// 	$anzeige->getAnzeige(false);
	// }
	// else{
	// 	$anzeige->getAnzeige(true);
	// }

 ?>