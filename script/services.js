// 
let closeDefault = $("#open-one").fadeIn();
let closeDefaultImg = $("#img-one").fadeIn();
let closeDefaultLine = $("#services-activ__one").fadeIn();
let closeDefaultRomb = $("#romb-one").fadeIn();
let previousOpenetTab = $();

function viewDiv() {
    if (previousOpenetTab.length) {
        previousOpenetTab.hide();
        previousOpenetImg.hide();
        previousOpenetLine.hide();
        closeDefaultRomb.hide();

    }
    previousOpenetTab = $("#open-one");
    previousOpenetImg = $("#img-one");
    previousOpenetLine = $("#services-activ__one");
    closeDefaultRomb = $("#romb-one");

    $("#open-one").fadeIn();
    $("#img-one").fadeIn();
    $("#services-activ__one").fadeIn();
    $("#romb-one").fadeIn();
};

function viewDiv2() {
    if (previousOpenetTab.length) {
        previousOpenetTab.hide();
        previousOpenetImg.hide();
        previousOpenetLine.hide();
        closeDefaultRomb.hide();
    }

    previousOpenetTab = $("#open-two");
    previousOpenetImg = $("#img-two"); 
    previousOpenetLine = $("#services-activ__two");
    closeDefaultRomb = $("#romb-two");

    document.getElementById("open-one").style.display = "none";
    document.getElementById("img-one").style.display = "none";
    document.getElementById("services-activ__one").style.display = "none";
    document.getElementById("romb-one").style.display = "none";


    $("#open-two").fadeIn();
    $("#img-two").fadeIn();
    $("#services-activ__two").fadeIn();
    $("#romb-two").fadeIn();

};
function viewDiv3() {
    if (previousOpenetTab.length) {
        previousOpenetTab.hide();
        previousOpenetImg.hide();
        previousOpenetLine.hide();
        closeDefaultRomb.hide();
        
    }

    previousOpenetTab = $("#open-three");
    previousOpenetImg = $("#img-three");
    previousOpenetLine = $("#services-activ__three");
    closeDefaultRomb = $("#romb-three");


    document.getElementById("open-one").style.display = "none";
    document.getElementById("img-one").style.display = "none";
    document.getElementById("services-activ__one").style.display = "none";
    document.getElementById("romb-one").style.display = "none";

    $("#open-three").fadeIn();
    $("#img-three").fadeIn();
    $("#services-activ__three").fadeIn();
    $("#romb-three").fadeIn();
};
function viewDiv4() {
    if (previousOpenetTab.length) {
        previousOpenetTab.hide();
        previousOpenetImg.hide();
        previousOpenetLine.hide();
        closeDefaultRomb.hide();
        
    }

    previousOpenetTab = $("#open-four");
    previousOpenetImg = $("#img-four");
    previousOpenetLine = $("#services-activ__four");
    closeDefaultRomb = $("#romb-four");

    document.getElementById("open-one").style.display = "none";
    document.getElementById("img-one").style.display = "none"; 
    document.getElementById("services-activ__one").style.display = "none";
    document.getElementById("romb-one").style.display = "none"; 

    $("#open-four").fadeIn();
    $("#img-four").fadeIn();
    $("#services-activ__four").fadeIn();
    $("#romb-four").fadeIn();
};
function viewDiv5() {
    if (previousOpenetTab.length) {
        previousOpenetTab.hide();
        previousOpenetImg.hide();
        previousOpenetLine.hide();
        closeDefaultRomb.hide();
        
    }

    previousOpenetTab = $("#open-five");
    previousOpenetImg = $("#img-five");
    previousOpenetLine = $("#services-activ__five");
    closeDefaultRomb = $("#romb-five");


    document.getElementById("open-one").style.display = "none";
    document.getElementById("img-one").style.display = "none";
    document.getElementById("services-activ__one").style.display = "none";
    document.getElementById("romb-one").style.display = "none"; 

    $("#open-five").fadeIn();
    $("#img-five").fadeIn();
    $("#services-activ__five").fadeIn();
    $("#romb-five").fadeIn();
};

function viewDiv6() {
    if (previousOpenetTab.length) {
        previousOpenetTab.hide();
        previousOpenetImg.hide();
        previousOpenetLine.hide();
        closeDefaultRomb.hide();
        
    }

    previousOpenetTab = $("#open-six");
    previousOpenetImg = $("#img-six");
    previousOpenetLine = $("#services-activ__six");
    closeDefaultRomb = $("#romb-six");

    document.getElementById("open-one").style.display = "none";
    document.getElementById("img-one").style.display = "none"; 
    document.getElementById("services-activ__one").style.display = "none";
    document.getElementById("romb-one").style.display = "none";

    $("#open-six").fadeIn();
    $("#img-six").fadeIn();
    $("#services-activ__six").fadeIn();
    $("#romb-six").fadeIn();

};
function viewDiv7() {
    if (previousOpenetTab.length) {
        previousOpenetTab.hide();
        previousOpenetImg.hide();
        previousOpenetLine.hide();
        closeDefaultRomb.hide();
        
    }

    previousOpenetTab = $("#open-seven");
    previousOpenetImg = $("#img-seven");
    previousOpenetLine = $("#services-activ__seven");
    closeDefaultRomb = $("#romb-seven");

    document.getElementById("open-one").style.display = "none";
    document.getElementById("img-one").style.display = "none"; 
    document.getElementById("services-activ__one").style.display = "none";
    document.getElementById("romb-one").style.display = "none"; 

    $("#open-seven").fadeIn();
    $("#img-seven").fadeIn();
    $("#services-activ__seven").fadeIn();
    $("#romb-seven").fadeIn();
};
function viewDiv8() {
    if (previousOpenetTab.length) {
        previousOpenetTab.hide();
        previousOpenetImg.hide();
        previousOpenetLine.hide();
        closeDefaultRomb.hide();
        
    }

    previousOpenetTab = $("#open-eight");
    previousOpenetImg = $("#img-eight");
    previousOpenetLine = $("#services-activ__eight");
    closeDefaultRomb = $("#romb-eight");


    document.getElementById("open-one").style.display = "none";
    document.getElementById("img-one").style.display = "none";
    document.getElementById("services-activ__one").style.display = "none";
    document.getElementById("romb-one").style.display = "none"; 

    $("#open-eight").fadeIn();
    $("#img-eight").fadeIn();
    $("#services-activ__eight").fadeIn();
    $("#romb-eight").fadeIn();
};



// $('#one-btn').onclick(viewDiv);

// $('#two-btn').onclick(viewDiv2);

// $('#three-btn').onclick(viewDiv3);

// $('#four-btn').onclick(viewDiv4);

// $('#five-btn').onclick(viewDiv5);

// $('#six-btn').onclick(viewDiv6);

// $('#seven-btn').onclick(viewDiv7);

// $('#eight-btn').onclick(viewDiv8);
    