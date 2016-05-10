var maxLenght = 0;
var content = document.getElementsByClassName('content');
var azubi_content = document.getElementsByClassName('azubi_contentHeight');
var testheight = content[1].offsetHeight +'px';
	content[0].style.height = testheight;

for (var i = 0; i < content.length; i++) {	
	if (i === 2){
		var leftContentHeight = {
			pos: i,
			height: content[i].offsetHeight
		} 
	}
	else if (i === 4){
		var rightContentHeight = {
			pos: i,
			height: content[i].offsetHeight
		}
	}
	else if (azubi_content.length > 0){
		if (i === 5){
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
