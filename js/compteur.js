var toReach = new Date("May 30, 2019 00:00:00");

function countdown() {
    var now = new Date();
    var diff = Math.floor((toReach.getTime()-now.getTime())/1000);
    if (diff > 0) {
        var days = Math.floor(diff/(60*60*24));
        var hours = Math.floor(diff%86400/3600);
        var minutes = Math.floor(diff%3600/60);
        // var seconds = diff%60;

        $('#d').html(days+"d");
        $('#h').html(hours+"h");
        $('#m').html(minutes+"m");
        // $('#s').html(seconds+"s");
    } else {
        $("#countdown").html("Date dépassée !");
    }
}

$(document).ready(function() {
    window.setinterval(countdown, 1000);
    countdown();
});