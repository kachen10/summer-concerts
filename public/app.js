document.addEventListener("DOMContentLoaded", event=> {

    const app = firebase.app();
    console.log(app)

});

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