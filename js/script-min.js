
//MIN

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




//html

//Vars
var id = 1;
var max = 5;
var min = 1;
//FUNCTIONS





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











