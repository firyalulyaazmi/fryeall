setInterval(function () {
    var waktu = new Date();
    document.getElementById("jam").innerHTML =
        waktu.toLocaleTimeString();
}, 1000);