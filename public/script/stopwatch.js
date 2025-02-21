setInterval(() => {
    let date = new Date();
    let jam = date.getHours();
    let menit = date.getMinutes();
    let detik = date.getSeconds();
    let milidetik = date.getMilliseconds();

    if (jam < 10) jam = "0" + jam;
    if (menit < 10) menit = "0" + menit;
    if (detik < 10) detik = "0" + detik;
    if (milidetik < 10) milidetik = "0" + milidetik;

    document.getElementById("jam").value = jam;
    document.getElementById("menit").value = menit;
    document.getElementById("detik").value = detik;
    document.getElementById("milidetik").value = milidetik;
}, 10);


