$(document).ready(function() {

    //set variables to select cicle divs for color part of assignment
    var circleClrs = document.getElementById("colors");
    console.log(circleClrs);

    //set variables to select cicle divs for number part of assignment
    var circleNums = document.getElementById("numbers");
    console.log(circleNums);

    //after hours of testing and relearning, this returned an array that i can use
    var circleNames = circleClrs.querySelectorAll("p");
    var circleColors = circleNums.querySelectorAll("p");
    console.log(circleNames);
    console.log(circleColors);

    //for loop and function to select each div and p so i don't have make 4 iterations of code below.
    for (i = 0; i < circleNames.length; i++) {

        $(circleNames[i]).click(function() {
            for (i = 0; i < $(this).text().length; i++) {
                //move to center
                $("#container1, #container2, #container3, #container4").animate({ opacity: "0", top: "40%", left: "40%" },
                    250, "swing");
                //move back to original position
                $("#container1").animate({ opacity: "1", left: "10%", top: "5%" }, 600, "swing");
                $("#container2").animate({ opacity: "1", left: "75%", top: "5%" }, 600, "swing");
                $("#container3").animate({ opacity: "1", left: "10%", top: "75%" }, 600, "swing");
                $("#container4").animate({ opacity: "1", left: "75%", top: "75%" }, 600, "swing");

            }
        });

        $(circleColors[i]).click(function() {
            for (i = 0; i < parseInt($(this).text()); i++) {

                $("#container1").animate({ left: "5%" }, 200, "swing");
                $("#container1").animate({ top: "5%" }, 200, "swing");
                $("#container1").animate({ left: "20%" }, 200, "swing");
                $("#container1").animate({ top: "20%" }, 200, "swing");
                $("#container1").animate({ left: "5%" }, 200, "swing");
                $("#container1").animate({ top: "5%" }, 200, "swing");

                $("#container2").animate({ left: 10 }, 200, "swing");
                $("#container2").animate({ top: 10 }, 200, "swing");
                $("#container2").animate({ left: 200 }, 200, "swing");
                $("#container2").animate({ top: 200 }, 200, "swing");
                $("#container2").animate({ left: 10 }, 200, "swing");
                $("#container2").animate({ top: 10 }, 200, "swing");

                $("#container2").animate({}, 600, "swing");
                $("#container3").animate({}, 600, "swing");
                $("#container4").animate({}, 600, "swing");

                // //go invisible after i amount of milliseconds
                // var time = i * 1000;
                // setTimeout(function() {
                //     document.getElementById("colors").classList.toggle("invisible");
                //     document.getElementById("numbers").classList.add("visible");
                //     console.log(time);
                // }, time);
            }
        });
    };
});