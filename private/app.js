document.addEventListener("DOMContentLoaded", event=> {

    const app = firebase.app();
    console.log(app)

});

function addNewConcert(){
    var li = document.createElement("li");
    s = newConcert(li, "date", "date")
    u = newConcert(li, "concert-name", "artist")
    v = newConcert(li, "price", "price")

    li.appendChild(s);
    li.appendChild(u);
    li.appendChild(v);

}

var displayLikesCount= 'likes';

$(document).ready(function () {
    $(function () {
        $('span.likes').each(function (i) {
            $(this).attr({ id: displayLikesCount + i });
        });
        $('button.upvote').each(function (i) {
            $(this).attr({ id: i });
        });
    });
});

function liked(id) {
    console.log("button clicked " + id)
    number = Number(document.getElementById(displayLikesCount + id).innerHTML);
    document.getElementById(displayLikesCount+id).innerHTML = number+1;
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("concerts-list").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

}

function newConcert(li, id, className) {

    var enumMonth = { 1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June", 7: "July", 8: "August",
    9: "September", 10: "October", 11: "November", 12: "December" }
    var input = document.getElementById(id).value;
    console.log("input",input)

    if (input === '') {
        alert("You must write something!");
    } else if (id === 'date') {
        month = input.split("/")
        console.log(month[0])
        console.log(month[1])
        input = enumMonth[parseInt(month[0])] + " " + month[1]
    } else {
        document.getElementById("concerts-list").appendChild(li);
    }  

    var span= document.createElement("SPAN");
    span.className = className;
    span.appendChild(document.createTextNode(input));

    return span
}