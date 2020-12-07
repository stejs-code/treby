//Variables
slide = 1
min = 1


//Actions
Mousetrap.bind('right', function() { 
    next();
})

Mousetrap.bind('left', function() { 
    back();
})

Mousetrap.bind('s', function() { 
    showslide();
})

//Functions
function siteNo(str) {
	if (str == "") {
		
	} else {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("ajax").innerHTML = this.responseText;
			}
		};
		xmlhttp.open("GET","page.php?q="+str,true);
		
		xmlhttp.send();
	}
}

function back(){
    if(slide==1){
		console.log('Ur at first slide.... u stupid.')
    }
    else{
		console.log('function back was called ' + slide--);
		siteNo(slide)
    };
    

}

function next(){
	console.log('function next was called ' + slide++);
	siteNo(slide)
}

function load(loadslide){
	siteNo(loadslide)
}













