// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}
//Get current time

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Hi  i am AICTE Chabot, How may i Help you?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Gets the text text from the input box and processes it
function getResponse() {
    // console.log("getResponse");
    let userText = $("#textInput").val();
     let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    
    
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

  
}



function sendButton() {
    // console.log("sendButton");
    getResponse();
}


// Press enter to send a message
// function enterButton {
//     $("#textInput").keypress(function (e) {
//         if (e.which == 13) {
//             getResponse();
//         }
//     });
// }