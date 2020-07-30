$(document).ready(function() {
    //move all towards center on click
    $("#container1, #container2, #container3, #container4").click(function() {
        //move to center
        $("#container1, #container2, #container3, #container4").animate({ "top": "40%", "left": "40%" }, 600, "swing");
        //move back
        $("#container1").animate({ "left": "10%", "top": "5%" }, 400, "swing");
        $("#container2").animate({ "left": "75%", "top": "5%" }, 400, "swing");
        $("#container3").animate({ "left": "10%", "top": "75%" }, 400, "swing");
        $("#container4").animate({ "left": "75%", "top": "75%" }, 400, "swing");
    });
});