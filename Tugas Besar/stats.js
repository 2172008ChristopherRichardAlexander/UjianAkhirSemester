console.log(localStorage.getItem("data2"));
$.getJSON("https://api.opendota.com/api/heroStats ", function (result) {
  var id = localStorage.getItem("data2");
  for (let i = 0; i < result.length; i++) {
    if (result[i].id == id) {
      var str = parseInt(result[i].base_str);
      var agi = parseInt(result[i].base_agi);
      var int = parseInt(result[i].base_int);
      var health = str * 20;
      var mana = int * 12;
      totalmana = mana + parseInt(result[i].base_mana);
      totalhealth = health + parseInt(result[i].base_health);
      if (result[i].primary_attr == "str") {
        document.querySelector("#name").innerHTML =
          "<img src='hero_strength.png' width='40px'>" +
          result[i].localized_name +
          "<img src='https://api.opendota.com" +
          result[i].icon +
          "' width='40px'>";
      }
      if (result[i].primary_attr == "agi") {
        document.querySelector("#name").innerHTML =
          "<img src='hero_agility.png' width='40px'>" +
          result[i].localized_name +
          "<img src='https://api.opendota.com" +
          result[i].icon +
          "' width='40px'>";
      }
      if (result[i].primary_attr == "int") {
        document.querySelector("#name").innerHTML =
          "<img src='hero_intelligence.png' width='40px'>" +
          result[i].localized_name +
          "<img src='https://api.opendota.com" +
          result[i].icon +
          "' width='40px'>";
      }
      document.getElementById("result").style.backgroundImage =
        "url('https://api.opendota.com" + result[i].img + "')";
      document.getElementById("health").innerHTML = totalhealth;
      document.getElementById("mana").innerHTML = totalmana;
      document.getElementById("kotakstr").innerHTML =
        "<img id='imgstat' src='hero_strength.png'>" + str;
      document.getElementById("kotakagi").innerHTML =
        "<img id='imgstat' src='hero_agility.png'>" + agi;
      document.getElementById("kotakint").innerHTML =
        "<img id='imgstat' src='hero_intelligence.png'>" + int;
    }
  }
});
