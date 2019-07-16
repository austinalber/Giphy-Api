// JavaScript Goes Here

// Variable Declaration
var arr = [];

// Functions
function displayGifInfo()   {
    // Clears gifs-here div
    $("#gifs-here").empty();

    // Grabs value of button selected and saves it
    var selection = $(this).attr("data-name");
    console.log(selection);

    // Creates URL based on selected button
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    selection + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    // AJAX call with specified queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response)  {

        // JSON gif grabing
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var gifDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var gifImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            gifImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and image tag to the animalDiv
            gifDiv.append(p);
            gifDiv.append(gifImage);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-here").prepend(gifDiv);
          }

    })
}

// Create and Re-Write Buttons
function renderButtons()    {
    // Delete Prior Buttons to prevent repeats
    $("#gif-buttons").empty();

    // Loop Through the array of Gifs
    for(var i = 0; i < arr.length; i++) {
        var a = $("<button>");
        a.addClass("gif");
        a.attr("data-name", arr[i]);
        a.text(arr[i]);
        $("#gif-buttons").append(a);
    }
}

// Clear All Created Gif Buttons
$("#clear-buttons").on("click", function()  {
    $("#gif-buttons").empty();
})

$("#run-submit").on("click", function()  {
    // When 'Search' is clicked: Find and Post gifs
    event.preventDefault();

    // Get value from prompt box
    var selection = $("#prompt-term").val().trim();

    // Push result into an array
    arr.push(selection);
    console.log(arr);

    // Clear Submit box
    $("#prompt-term").val("");

    renderButtons();
});

// Run displayGifInfo after clicking a gif button
$(document).on("click", ".gif", displayGifInfo);


renderButtons();