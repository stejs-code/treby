//Variables
slide = 1

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

//FUNCTIONS


function back(){
    console.log('function back was called' + slide + 1);

}

function next(){
    console.log('function next was called' + slide + 1);
}

function showslide() {
    console.log(slide);
}