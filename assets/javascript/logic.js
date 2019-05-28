let topics = ['pizza', 'cake', 'nachos', 'tacos', 'ice cream', 'popsicle', 'chocolate'];
let buttonCreated = false




startPage()

function startPage() {

    let textBox = $("<input>")
    let submitButton = $("<button>")
    textBox.attr("id", "userInputBox")
    submitButton.addClass("submitButton").text("Submit")
    $(".submit-button").append(submitButton)
    $("#inputField").append(textBox)

    createButton()
}

function createButton(value) {
    if (buttonCreated === false) {
        for (let i = 0; i < topics.length; i++) {
            console.log("boo")
            let button = $("<button>")
            button.attr("id", topics[i]).addClass("gifButtons").text(topics[i])
            $(".buttons-here").append(button)
        }
    }
    if (buttonCreated === true) {
        let newButton = document.createElement('button')
        // newButton.type = "button"
        // newButton.addClass('gifButtons')
        newButton.setAttribute("id", arguments[0])
        newButton.classList.add('gifButtons')
        newButton.innerText = arguments[0]
        $(".buttons-here").append(newButton)

    }
    // console.log(value)
    buttonCreated = true;
}

$(document).on("click", ".gifButtons", function () {


    let result = $(this).attr("id")
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        result + "&api_key=XdXI44bgPmc7886QFjPVxmXeVexmdFoh&limit=10&rating=&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (event) {
        for (let i = 0; i <= 10; i++) {
            let gif = $("<img>")
            gif
                .attr({
                    "src": event.data[i].images.fixed_height_still.url,
                    "data-state": "still",
                    "data-still": event.data[i].images.fixed_height_still.url,
                    "data-animated": event.data[i].images.original.url,
                    "id": "gifs"
                })
            $("#gifs-here").prepend(gif)
        }

        

        // let gifTarget = document.getElementById("gifs")

        // .mouseover(function() {
        //     var $gif = $(this);
        //     let animated = $gif.attr('data-animated');
        //     let still = $gif.attr("data-still")
        //     const isAnimated = $gif.attr('data-state') === 'animated';

        //     if(isAnimated) {
        //         $gif.attr("src", still)
        //         $gif.attr("data-state", "still")
        //     } else {
        //       $gif.attr("src", animated)
        //       $gif.attr("data-state", "animated")
        //     }

        // });                            
    })
})









$(document).on("mouseenter", "#gifs", function () {
console.log("mouseenter")
var $gif = $(this);
let animated = $gif.attr('data-animated');
$gif.attr("src", animated)
$gif.attr("data-state", "animated")
})

$(document).on("mouseleave", "#gifs", function () {
    var $gif = $(this)
    let still = $gif.attr("data-still")
    $gif.attr("src", still)
    $gif.attr('data-state', 'still')
})






$(document).on("click", ".submitButton", function () {

    let buttonName = document.getElementById('userInputBox')
    value = buttonName.value
    console.log(value)
    createButton(value)
    buttonName.remove()
    let textBox = $("<input>")
    textBox.attr("id", "userInputBox")
    $("#inputField").append(textBox)


})



$(document).on('dblclick', "#gifs", function(){ 


    // const image = document.querySelectorAll(`#gifs-here img`);
    imgData = getBase64Image("this")
    //  animated = JSON.stringify(animated)
    console.log(animated)
    
    // var savedImagesSrc = JSON.stringify(localStorage.setItem("images", (animated))) || [];
    localStorage.setItem("images", (animated)) || [];
    // localStorage.setItem("images", (savedImagesSrc))
    createSavedImage()
})

    function createSavedImage() {

let savedImagesSrc = (localStorage.getItem("images")) || [];

    for (var i = 0; i < savedImagesSrc.length; i++) {
        let savedImage = $("<img>")
        savedImage.attr({"src": savedImagesSrc[i]});
        $("#saved-images").append(savedImage)

      }
    }
 

