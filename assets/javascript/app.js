// JavaScript Goes Here

// Variable Declaration
var arr = [];
var count = 0;

// Functions
function displayGifInfo()   {
    var selection = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    selection + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response)  {
        // JSON gif grabing
        console.log(response);
        
        // $("#gifs-here").text(JSON.stringify(response));



    })
}

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

$("#run-submit").on("click", function()  {
    // When 'Search' is clicked: Find and Post gifs
    event.preventDefault();

    // Get value from prompt box
    var selection = $("#prompt-term").val().trim();

    // Push result into an array
    arr.push(selection);
    console.log(arr);

    renderButtons();

    // // Create a new variable to become button
    // var selectionButton = $("<button>");
    // selectionButton.attr("id", "button-" + count);
    // selectionButton.text(selection);

    // // Add button to the 'gifs-here' div
    // $("#gifs-here").append(selectionButton);

    // // Clear Promptbox when done
    // $("#prompt-term").val("");

    // // Add to the count
    // count++;
});

// 
$(document).on("click", ".gif-buttons", displayGifInfo);

renderButtons();