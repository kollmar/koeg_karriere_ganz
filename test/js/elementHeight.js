// var maxLenght = 0;
var content = document.getElementsByClassName('content');
// var azubi_content = document.getElementsByClassName('azubi_contentHeight');
var testheight = content[1].offsetHeight +'px';
console.log(testheight);
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
}
if (leftContentHeight.height > rightContentHeight.height){
	console.log('foo');
	setContentHeight(rightContentHeight.pos, leftContentHeight, false, 'left');
}
else{
	console.log('bar');
	setContentHeight(leftContentHeight.pos, rightContentHeight, false, 'right');
}

function setContentHeight (pos, contentHeight, margBottom, margContent){
	
	content[pos].style.height = contentHeight.height +'px';

	if (margBottom === false){
		if (margContent === 'left'){
			return content[pos].style.marginBottom = 0;
		}
			return content[contentHeight.pos].style.marginBottom = 0;
	}
}
