$(document).ready(function() {
    $(alert("Please click on a color"));

    //set variables to select cicle divs for color part of assignment
    var circleClrs = document.getElementById("colors");
    // console.log(circleClrs);

    //set variables to select cicle divs for number part of assignment
    var circleNums = document.getElementById("numbers");
    // console.log(circleNums);

    //array for fortune displa at end
    var fortunes = ["I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy.", "When we have respect for ourselves and others, we gravitate towards connections that encourage that.", "Anger is the ultimate destroyer of your own peace of mind. ", "Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.", "Children really brighten up a household. They never turn the lights off.", "No one would have crossed the ocean if he could have gotten off the ship in the storm.", "Appreciate those early influences and what they've done for you.", "Make the decision, make another. Remake one past, you cannot.", "Be honest in your feelings, for they are the surest conduit to knowledge...", "If you want to see a rainbow you have to learn to see the rain."];
    //random fortune displa at end
    var randomQuote = fortunes[Math.floor(Math.random() * fortunes.length)];
    // console.log(fortunes);
    // console.log(randomQuote);


    //after hours of testing and relearning, this returned an array that i can use
    var colorCircles = circleClrs.querySelectorAll("p");
    var numberCircles = circleNums.querySelectorAll("p");
    // console.log(colorCircles);
    // console.log(numberCircles);

    //for loop and function to select each div and p so i don't have make 4 iterations of code below.
    for (i = 0; i < colorCircles.length; i++) {

        $(colorCircles[i]).click(function() {

            for (i = 0; i < $(this).text().length; i++) {
                //move to center
                $("#container1, #container2, #container3, #container4").animate({ "border-radius": "200px", width: "24em", height: "24em", opacity: "0", top: "40%", left: "40%" },
                    250, "swing");
                //move back to original position
                $("#container1").animate({ "border-radius": "90px", width: "12em", height: "12em", opacity: "1", left: "10%", top: "5%" }, 600, "swing");
                $("#container2").animate({ "border-radius": "90px", width: "12em", height: "12em", opacity: "1", left: "75%", top: "5%" }, 600, "swing");
                $("#container3").animate({ "border-radius": "90px", width: "12em", height: "12em", opacity: "1", left: "10%", top: "75%" }, 600, "swing");
                $("#container4").animate({ "border-radius": "90px", width: "12em", height: "12em", opacity: "1", left: "75%", top: "75%" }, 600, "swing");
            };

            //sets variable to time that depends on number selection
            var time = i * 1000;
            // console.log(time);

            //displays message with timeout based on time variable
            setTimeout(function() {
                $(alert("Now click on a number"))
            }, time);
        });

        //animations for numbered circles
        $(numberCircles[i]).click(function() {
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
            };
            //sets variable to time that depends on number selection multiplied by time it takes to circle to go around fully
            var time = i * 2100;
            // console.log(time);

            //displays message with timeout based on time variable and remove click event method
            setTimeout(function() {
                $(numberCircles).off("click");
                $(colorCircles).off("click");
                $(alert("Click on any number now to see your fortune"));
            }, time);

            setTimeout(function() {
                $(numberCircles).click(function() {

                    $("#finalFortune").fadeIn(1500);
                    document.getElementById('headRandom').innerHTML = randomQuote;
                    $(numberCircles).fadeOut();
                    $(circleNums).fadeOut();
                    // console.log("clicked");
                });
            }, time);

        });

    };

});