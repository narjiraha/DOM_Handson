// Q.1 / The code to access element which is having id as "text"
let element = document.getElementById("text")
console.log(element);

// Q.2/ Write the code to access element which is having tag as "h1"
let elementh1 = document.getElementsByTagName("h1");
console.log(elementh1)

// Q.3/ Write the code to access element which is having class as "box"?
let elements = document.getElementsByClassName("box");
console.log(elements);

// Q.4/ "<h1>Hello </h1>Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

const heading = document.querySelector('h1');

heading.textContent = "Hello World";
console.log(heading)


// Q.5 Create an HTML page having content as Hello world and a button named Replace Text.
//  When user will click on this button page content should be changed to "Welcome to Elevation academy"
function replaceText() {
    document.getElementById("content").innerHTML = "Welcome to Elevation academy";
}

// Q.6 / Add one style attribute and give text color as red and id attribute and give the id value as ""heading""
//  in the above given h1 tag using DOM functions"

document.getElementById('.heading').style.color = red;

// Q.7/ Create three cards on HTML page and arrange them using flex property in row
// or horizontal direction and also create button at the
// bottom named "Change Flex direction". When user clicks on this button,
// the cards arrangement should be changed to vertical direction.

function changeDirection() {
    var container = document.getElementById('cards-container');
    container.classList.toggle('flex-column');
}

// Q.9
// function displayTime() {
//     var dateTime = new Date();
//     var hrs = dateTime.getHours();
//     var min = dateTime.getMinutes();
//     var sec = dateTime.getSeconds();

//     var session = document.getElementById('sessions');

//     if (hrs >= 12) {
//         session.innerHTML = 'PM';
//     } else {
//         session.innerHTML = 'AM';
//     }

//     if (hrs > 12) {
//         hrs = hrs - 12;
//     }

//     document.getElementById('hours').innerHTML = hrs;
//     document.getElementById('minutes').innerHTML = min;
//     document.getElementById('seconds').innerHTML = sec;
// }
// setInterval(displayTime, 1000);

