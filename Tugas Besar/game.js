var totalattack;
var totalhealth;
var totalattackmusuh;
var totalhealthmusuh;
var x;
var a;
var b;
var y;
var tothelth;
var tothelthmush;
var z;
var c;
$.getJSON("https://api.opendota.com/api/heroStats ", function (result) {
  var hasil = localStorage.getItem("textvalue2");
  for (let i = 0; i < result.length; i++) {
    if (hasil == result[i].id) {
      document.querySelector("#result").innerHTML =
        "<img src='https://api.opendota.com" + result[i].icon + "'>";
      var atr = result[i].primary_attr;
      var base = parseInt(result[i].base_attack_min);
      var bonusstr = parseInt(result[i].base_str);
      var bonusagi = parseInt(result[i].base_agi);
      var bonusint = parseInt(result[i].base_int);
      var bonushealth = bonusstr * 20;
      var health = parseInt(result[i].base_health);
      totalhealth = bonushealth + health;
      tothelth = totalhealth;
    }
    if (atr == "str") {
      totalattack = base + bonusstr;
    }
    if (atr == "agi") {
      totalattack = base + bonusagi;
    }
    if (atr == "int") {
      totalattack = base + bonusint;
    }
  }
  // healthbarplayer
  x = 0;
  for (let i = 0; i < totalhealth; i += 20) {
    x++;
    document.querySelector("#player").innerHTML +=
      "<div class='hp' id='hp" + x + "'></div>";
  }
  z = x;
  y = 250 / x;

  for (let i = 1; i <= x; i++) {
    document.getElementById("hp" + i).style.width = y + "px";
    document.getElementById("hp" + i).style.height = "40px";
    document.getElementById("hp" + i).style.background = "green";
  }
  // randommusuh

  var nilairandom = Math.floor(Math.random() * result.length - 1);
  for (let i = 0; i < result.length; i++) {
    if (nilairandom == result[i].id) {
      document.querySelector("#enemy").innerHTML =
        "<img src='https://api.opendota.com" + result[i].icon + "'>";
      var atr = result[i].primary_attr;
      var base = parseInt(result[i].base_attack_min);
      var bonusstr = parseInt(result[i].base_str);
      var bonusagi = parseInt(result[i].base_agi);
      var bonusint = parseInt(result[i].base_int);
      var bonushealth = bonusstr * 20;
      var health = parseInt(result[i].base_health);
      totalhealthmusuh = bonushealth + health;
      tothelthmush = totalhealthmusuh;
    }
    if (atr == "str") {
      totalattackmusuh = base + bonusstr;
    }
    if (atr == "agi") {
      totalattackmusuh = base + bonusagi;
    }
    if (atr == "int") {
      totalattackmusuh = base + bonusint;
    }
  }
  // healthbarmusuh
  a = 0;
  for (let i = 0; i < totalhealthmusuh; i += 20) {
    a++;
    document.querySelector("#musuh").innerHTML +=
      "<div class='hp' id='hpenemy" + a + "'></div>";
  }
  c = a;
  b = 250 / a;
  for (let i = 1; i <= a; i++) {
    document.getElementById("hpenemy" + i).style.width = b + "px";
    document.getElementById("hpenemy" + i).style.height = "40px";
    document.getElementById("hpenemy" + i).style.background = "green";
  }
});

let poinBot = 1;
let poinUser = 1;
const suitBot = ["Rock", "Scissor", "Paper"];

function suit(user) {
  let random = Math.floor(Math.random() * 3 - 0);
  let bot = suitBot[random];
  if (user == bot) {
    document.querySelector("#history").innerHTML +=
      user + " (User) " + bot + " (com), Draw <br>";
  } else if (
    (user == "Rock" && bot == "Scissor") ||
    (user == "Scissor" && bot == "Paper") ||
    (user == "Paper" && bot == "Rock")
  ) {
    a = c;
    totalhealthmusuh = totalhealthmusuh - totalattack;
    for (let i = tothelthmush; i > totalhealthmusuh; i -= 20) {
      document.getElementById("hpenemy" + a).style.background = "white";
      a--;
      if (totalhealthmusuh <= 0) {
        for (let i = 1; i <= c; i++) {
          document.getElementById("hpenemy" + i).style.background = "white";
        }
        totalhealthmusuh = 0;
        alert("You Win");
        document.getElementById("game1").onclick = null;
        document.getElementById("game2").onclick = null;
        document.getElementById("game3").onclick = null;
        break;
      } else {
        document.getElementById("hpenemy1").style.background = "green";
      }
    }
    document.querySelector("#history").innerHTML +=
      user +
      " (User) " +
      bot +
      " (com), You hit " +
      totalattack +
      ", enemy's health " +
      totalhealthmusuh +
      " left  <br>";
  } else {
    x = z;
    totalhealth = totalhealth - totalattackmusuh;
    for (let i = tothelth; i > totalhealth; i -= 20) {
      document.getElementById("hp" + x).style.background = "white";
      x--;
      if (totalhealth <= 0) {
        for (let i = 1; i <= z; i++) {
          document.getElementById("hp" + i).style.background = "white";
        }
        totalhealth = 0;
        alert("You Lose!");
        document.getElementById("game1").onclick = null;
        document.getElementById("game2").onclick = null;
        document.getElementById("game3").onclick = null;
        break;
      } else {
        document.getElementById("hp1").style.background = "green";
      }
    }
    document.querySelector("#history").innerHTML +=
      user +
      " (User) " +
      bot +
      " (com), You took " +
      totalattackmusuh +
      ", your health " +
      totalhealth +
      " left  <br>";
  }
}
