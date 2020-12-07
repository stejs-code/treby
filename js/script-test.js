//Variables
slide = 1
min = 1


//Actions
Mousetrap.bind('right', function() { 
    next();
}

)

Mousetrap.bind('left', function() { 
    back();
}

)

Mousetrap.bind('s', function() { 
    showslide();
}

















//wewef
/*




we
fwef
we
fw
efw
ef
wef
wef
w
fw
ef
wefewf
we
fw
efw
ef*/)

//FUNCTIONS


function back(){
    if(slide==1){
        console.log('Ur at first slide.... u stupid.')
    }
    else{
        console.log('function back was called ' + slide--);
    };
    

}

function next(){
    console.log('function next was called ' + slide++);
}

function showslide() {
    console.log(slide);
    /*wedwe
    fw
    efw
    few
    ef
    wef
    wef
    w
    fw
    efw
    ef
    ew
    fw
    ef
    wwe
    fwe
    fwefwfw*/
    console.log('LLL')
}