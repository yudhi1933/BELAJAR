let timer = null;
let totalDetik = 0;

function start() {
    if (timer) clearInterval(timer);
    timer = setInterval(function () {
        totalDetik++;
        let detik = totalDetik % 60;
        let menit = Math.floor(totalDetik / 60);
        let jam = Math.floor(totalDetik / 3600);
        document.getElementById("jam").value = ("0" + jam).slice(-2);
        document.getElementById("menit").value = ("0" + menit).slice(-2);
        document.getElementById("detik").value = ("0" + detik).slice(-2);

    }, 1000);
    
};

function stop() {
    clearInterval(timer);
    console.log("Timer dihentikan");
};

function reset() {
    clearInterval(timer);
    totalDetik = 0;
    document.getElementById("jam").value = "00";
    document.getElementById("menit").value = "00";
    document.getElementById("detik").value = "00";
};

