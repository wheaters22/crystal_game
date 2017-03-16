var randScore= 64;

$("#comp-score").text(randScore);

var values = [1, 4, 7, 10];

for (var i = 0; i < values.length; i++) {

	var crystalImage = $("<img>");

	crystalImage.addclass("cry-img");

	crystalImage.attr("src" "http://www.crystalage.com/img/products/amethyst-polished-point-10-x-7-6cm_1.jpg")

	crystalImage.attr("gen-crystalNum", values[i]);

	$("#crystals").append(crystalImage);

	/*crystalImage1 = $("#img1");
		crystalImage2 = $("#img2");
		crystalImage3 = $("#img3");
		crystalImage4 = $("#img4"); */
}

$(".cry-img").on("click", function() {

	var crystalValue = ($(this).attr("gen-crystalNum"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue

    alert()

})


//last part, focus on the startup function to generate the random word from the array


$("#comp-score").
//display the random number.... use a fixed number for now. create random number generator in the future.

$("#gameAlert").alert(comp-score)
//you will write the alert messages here: a funtion that will trigger 1) send an alert that the user won or lost.  2) set the Wins or Losses value to increase (create function with if statement), 3) set the game to reset


$("#crystals")
//use this element to dynamically generate the score value


$(".gamescore")
//generate the random number....lets say 64
//we can simply print this to the screen and build the logic of generating values with the 