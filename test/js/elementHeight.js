/*
*
*	@Thema:	Schleife für die Bereiche, die horizontal Bündig gemacht werden.
*			Verwendet wurde eine Klasse (Content), die in den Menüpunkten (Vertrieb, 
*		  	Personalmarketing, Kundenberatung, Mediengestalter, Azubi_studenten)
*		  	hinterlegt wurden.    
* 
* 
*/
var maxLenght = 0;
var content = document.getElementsByClassName('content');
var azubi_content = document.getElementsByClassName('azubi_contentHeight');
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

	for (var i = 0; i < azubi_content.length; i++) {
		maxLenght += azubi_content[i].offsetHeight;
	}
	console.log('left: '+maxLenght+ ', '+ rightContentHeight.height);
	setContentHeight(rightContentHeight.pos, maxLenght, true, 'left');
}
else if (leftContentHeight.height > rightContentHeight.height){
	console.log('foo');
	setContentHeight(rightContentHeight.pos, leftContentHeight, false, 'left');
}
else {

	console.log('bar');
	setContentHeight(leftContentHeight.pos, rightContentHeight, false, 'right');
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
