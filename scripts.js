$(document).ready(function() {
    $(alert("Please click on a color"));

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
            setTimeout(function() {
                $(alert("Now click on a number"));
            }, 5000);
        });

        $(circleColors[i]).click(function() {
            for (i = 0; i < parseInt($(this).text()); i++) {

                $("#container1").animate({ left: "35%" }, 800, "swing");
                $("#container1").animate({ top: "25%" }, 250, "swing");
                $("#container1").animate({ left: "10%" }, 800, "swing");
                $("#container1").animate({ top: "5%" }, 250, "swing");

                $("#container2").animate({ left: "55%" }, 800, "swing");
                $("#container2").animate({ top: "25%" }, 250, "swing");
                $("#container2").animate({ left: "75%" }, 800, "swing");
                $("#container2").animate({ top: "5%" }, 250, "swing");

                $("#container3").animate({ left: "35%" }, 800, "swing");
                $("#container3").animate({ top: "55%" }, 250, "swing");
                $("#container3").animate({ left: "10%" }, 800, "swing");
                $("#container3").animate({ top: "75%" }, 250, "swing");

                $("#container4").animate({ left: "55%" }, 800, "swing");
                $("#container4").animate({ top: "55%" }, 250, "swing");
                $("#container4").animate({ left: "75%" }, 800, "swing");
                $("#container4").animate({ top: "75%" }, 250, "swing");

                //go invisible after i amount of milliseconds
                var time = i * 2500;
                setTimeout(function() {
                    document.getElementById("colors").classList.toggle("invisible");
                    document.getElementById("numbers").classList.add("visible");
                    console.log(time);
                }, time);
            }
        });
    };
});