var x;
$.getJSON("https://api.opendota.com/api/heroStats ", function (result) {
  x = 0;
  for (let i = 0; i < result.length; i++) {
    if (result[i].primary_attr == "str") {
      x++;
      document.querySelector("#kotak1").innerHTML +=
        "<input onclick='sendHeroes(" +
        x +
        ")' type='image' src='https://api.opendota.com" +
        result[i].icon +
        "' class='icon' id='icn" +
        x +
        "' background='https://api.opendota.com" +
        result[i].icon +
        "'>";
      document.getElementById("icn" + x).setAttribute("alt", result[i].id);
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i].primary_attr == "agi") {
      x++;
      document.querySelector("#kotak2").innerHTML +=
        "<input onclick='sendHeroes(" +
        x +
        ")' type='image' src='https://api.opendota.com" +
        result[i].icon +
        "' class='icon' id='icn" +
        x +
        "' background='https://api.opendota.com" +
        result[i].icon +
        "'>";
      document.getElementById("icn" + x).setAttribute("alt", result[i].id);
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i].primary_attr == "int") {
      x++;
      document.querySelector("#kotak3").innerHTML +=
        "<input onclick='sendHeroes(" +
        x +
        ")' type='image' src='https://api.opendota.com" +
        result[i].icon +
        "' class='icon' id='icn" +
        x +
        "' background='https://api.opendota.com" +
        result[i].icon +
        "'>";
      document.getElementById("icn" + x).setAttribute("alt", result[i].id);
    }
  }
});

function sendHeroes(user) {
  var secondheroes = document.querySelector("#icn" + user).alt;
  localStorage.setItem("data2", secondheroes);
  return false;
}
