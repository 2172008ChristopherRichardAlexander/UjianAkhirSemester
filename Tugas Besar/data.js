document.getElementById("result").style.backgroundImage =
  localStorage.getItem("textvalue");
$.getJSON("https://api.opendota.com/api/heroStats ", function (result) {
  var hasil2 = localStorage.getItem("textvalue2");
  for (let i = 0; i < result.length; i++) {
    if (hasil2 == result[i].id) {
      document.querySelector("#name").innerHTML =
        "Hero name: " + result[i].localized_name;
      var atr = result[i].primary_attr;
      var base = parseInt(result[i].base_attack_min);
      var bonusstr = parseInt(result[i].base_str);
      var bonusagi = parseInt(result[i].base_agi);
      var bonusint = parseInt(result[i].base_int);
      var bonushealth = bonusstr * 20;
      var health = parseInt(result[i].base_health);
      var totalhealth = bonushealth + health;
      if (atr == "str") {
        document.getElementById("attack").innerHTML =
          "<img src='str.jpg' width='80px'>";
        document.getElementById("baseattack").innerHTML =
          "Attack: " + (base + bonusstr);
      }
      if (atr == "agi") {
        document.getElementById("attack").innerHTML =
          "<img src='agi.jpg' width='80px'>";
        document.getElementById("baseattack").innerHTML =
          "Attack: " + (base + bonusagi);
      }
      if (atr == "int") {
        document.getElementById("attack").innerHTML =
          "<img src='int.jpg' width='80px'>";
        document.getElementById("baseattack").innerHTML =
          "Attack: " + (base + bonusint);
      }
      document.getElementById("health").innerHTML = "Health: " + totalhealth;
      document.getElementById("icon").innerHTML =
        "Icon: <img src='https://api.opendota.com" + result[i].icon + "'>";
    }
  }
});
