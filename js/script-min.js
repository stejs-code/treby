//Vars
var id = 1;
var max = 5;
var min = 1;


//Actions
Mousetrap.bind('right', function() { 
	next();
});
Mousetrap.bind('n', function() { 
	next();
});
Mousetrap.bind('space', function() { 
	next();
});

Mousetrap.bind('b', function() { 
		back();
});
Mousetrap.bind('left', function() { 
		back();
});	
Mousetrap.bind('h', function() { 
		document.getElementById("help").classList.add('show');
});	



//FUNCTIONS





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
	if(min == id){

		} else {
			id--;
		}
		if(id == 1){
			//slide 1
			siteNo(1);

		}else if (id == 2){
			//slide 2
			siteNo(2);
		
		} else if (id == 3){
			//slide 3
			siteNo(3);
		} else if (id == 4){
			//slide 4
			siteNo(4);
		} else if (id == 5){
			//slide 5
			siteNo(5);
		}
}


function next(){
	if(max == id){

		} else {
			id++;
		}
	if(id == 2){
		//slide 2
		siteNo(2);
		
		} else if (id == 3){
			//slide 3
			siteNo(3);
		}else if (id == 4){
			//slide 4
			siteNo(4);
		} else if (id == 5){
			//slide 5
			siteNo(5);
		}
}




// INTRO
var intro = "<h2>Mluvní cvičení</h2><h1>HTML – CSS – JS</h1><h3>Tom Stejskal</h3><h4>Zmáčkněte mezerník</h4>";

//Co to je HTML
var whathtml = `<h1 class="clasich1">Co je to HTML?</h1>
			<img src="img/text.png">`;
//Co to je CSS
var whatCss = `<h1 class="clasich1">Co je to CSS?</h1>
			<img src="img/textcss.png">`;
//Co to je JS
var whatJs = `<h1 class="clasich1">Co je to JS?</h1>
			<img src="img/textjs.png">`;