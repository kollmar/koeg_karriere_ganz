/*
*	@Author: Andre Kollmar - Königsteiner Agentur Karlsruhe
*	@Thema:	 Schleife für die Bereiche, die horizontal Bündig gemacht werden.
*			 Verwendet wurde eine Klasse (Content), die in den Menüpunkten (Vertrieb, 
*		  	 Personalmarketing, Kundenberatung, Mediengestalter, Azubi_studenten)
*		  	 hinterlegt wurden.    
* 
* 
*/
var maxLenght 	  = 0;
var i = 0;
var content 	  = document.getElementsByClassName('content');
var azubi_content = document.getElementsByClassName('azubi_contentHeight');
var content_werte = document.getElementsByClassName('content_werte');
var screenWidth	  = window.innerWidth;

if (screenWidth > 800){											// Prüft die Bildschirmbreite und führt erst danach das Script aus

	if (content.length > 0){

		var testheight = content[1].offsetHeight +'px';
			content[0].style.height = testheight;

		for (var i = 0; i < content.length; i++) {	
			if (i === 2){										// linker Content(Klasse - 1 Textabsatz, der Bündig mit dem rechten Content sein soll)
				var leftContentHeight = {						// Objekt
					pos: i,										// - Wievielter Content
					height: content[i].offsetHeight				// - Die Höhe des Contents
				} 
			}
			else if (i === 4){									// rechtes Content (Klasse - Zitat & Bild)
				var rightContentHeight = {
					pos: i,
					height: content[i].offsetHeight
				}
			}
			/*
			*	Explizit musste der Azubi_Studenten-Bereich hinterlegt werden,
			*	da dieser eine andere Content-Anzahl besitzt und der Content rechts bündig mit einem h2-tag sein sollte statt mit einem ganzen Content
			* 
			*/
			else if (azubi_content.length > 0){					// wird geprüft, ob es denn auf der Seite Klasse 'azubi_contentHeight' existiert
				if (i === 5){									// 6. Content
					var rightContentHeight = {
						pos: i,
						height: content[i].offsetHeight
					}
				}
			}
		}

		if (azubi_content.length > 0){	

			for (i = 0; i < azubi_content.length; i++) {
				maxLenght += azubi_content[i].offsetHeight;
			}
			setContentHeight(rightContentHeight.pos, maxLenght, true, 'left');
		}
		else if (leftContentHeight.height > rightContentHeight.height){
			setContentHeight(rightContentHeight.pos, leftContentHeight, false, 'left');
		}
		else {
			setContentHeight(leftContentHeight.pos, rightContentHeight, false, 'right');
		}

	}
	/*
	*	Menu: Werte	
	* 	Bild + Content-Geschäftführung bündig mit linken Content
	*/
	if (content_werte.length > 0){
		content_werte[2].style.height = content_werte[0].offsetHeight + 'px';
		content_werte[2].style.marginBottom = '23px';
	}
}

/*
*	
*	@function (	
*	          	[Position des Content dessen Höhe angepasst wird], 
*				[die Höhe die benötigt wird], [soll der Margin-Bottom Abstand des Klasse bleiben?], 
*				[welcher Abstand - linker oder rechter Content - soll entfernt werden]
*			  ) 
*			  
*/
function setContentHeight (pos, contentHeight, margBottom, margContent){
	
	if (azubi_content.length > 0 ){
		content[pos].style.height = contentHeight + 'px';	
	}
	content[pos].style.height = contentHeight.height +'px';

	if (margBottom === false){
		if (margContent === 'left'){
			return content[pos].style.marginBottom = 0;
		}
			return content[contentHeight.pos].style.marginBottom = 0;
	}
}
