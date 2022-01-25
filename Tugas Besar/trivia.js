const data1 = [];
var jawab;
$.getJSON("https://api.opendota.com/api/heroStats", function (result) {
    for (let i = 0; i < 1; i++) {
        var values = Object.values(result);
        var nilairandom = values[parseInt(Math.random() * values.length)];
        document.getElementById("kotak").style.backgroundImage ="url('https://api.opendota.com" + nilairandom.img + "')";
        data1.push(nilairandom.localized_name);
    }
});
let x = 0;
function hint() {
    const split = data1[0].replace(" ", "").split("");
    console.log(split);
    for (let i = 0; i < 1; i++) {
        let randomhint = Math.floor(Math.random() * split.length);
        x++;
        alert("Huruf ke-" + (randomhint + 1) + " adalah " + split[randomhint]);
    }
}

function check() {
    let score = 0;
    let jawaban = data1[0];
    let inputan = document.getElementById("input").value;

    if (jawaban == inputan) {
        alert("Kamu Benar");
        location.reload();
    }     
    else {
        alert("Kamu Salah");
        location.reload();
    }
  console.log(inputan);
  console.log(jawaban);
}
