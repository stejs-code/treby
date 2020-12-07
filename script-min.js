//Variables
var slide = 1
var min = 1
var max = 0

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
	if(slide==sessionStorage.getItem("slides")){
		console.log('Ur at last slide.... u stupid.');
		max++;
		if(max == 20){
			console.log('Ur at last slide.... u inteligent.');
			max = 0;
		}
    }
    else{
		console.log('function back was called ' + slide++);
		siteNo(slide)
    };
}

function load(loadslide){
	siteNo(loadslide)
}













