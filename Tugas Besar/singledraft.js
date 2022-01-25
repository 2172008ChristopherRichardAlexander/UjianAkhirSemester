$.getJSON("https://api.opendota.com/api/heroStats ", function (result) {
  for (let i = 0; i < result.length; i++) {
    const values = Object.values(result);
    const nilairandom = values[parseInt(Math.random() * values.length)];
    if (nilairandom.primary_attr == "str") {
      document.getElementById("gbr1").style.backgroundImage =
        "url('https://api.opendota.com" + nilairandom.img + "')";
      document.querySelector("#nama1").innerHTML = nilairandom.localized_name;
      document.getElementById("gbr1").value =
        "url('https://api.opendota.com" + nilairandom.img + "')";
      document.getElementById("gbr1").setAttribute("alt", nilairandom.id);
    }
  }
  for (let i = 0; i < result.length; i++) {
    const values = Object.values(result);
    const nilairandom = values[parseInt(Math.random() * values.length)];
    if (nilairandom.primary_attr == "agi") {
      document.getElementById("gbr2").style.backgroundImage =
        "url('https://api.opendota.com" + nilairandom.img + "')";
      document.querySelector("#nama2").innerHTML = nilairandom.localized_name;
      document.getElementById("gbr2").value =
        "url('https://api.opendota.com" + nilairandom.img + "')";
      document.getElementById("gbr2").setAttribute("alt", nilairandom.id);
    }
  }
  for (let i = 0; i < result.length; i++) {
    const values = Object.values(result);
    const nilairandom = values[parseInt(Math.random() * values.length)];
    if (nilairandom.primary_attr == "int") {
      document.getElementById("gbr3").style.backgroundImage =
        "url('https://api.opendota.com" + nilairandom.img + "')";
      document.querySelector("#nama3").innerHTML = nilairandom.localized_name;
      document.getElementById("gbr3").value =
        "url('https://api.opendota.com" + nilairandom.img + "')";
      document.getElementById("gbr3").setAttribute("alt", nilairandom.id);
    }
  }
});
function sendData(user) {
  var firstname = document.getElementById("gbr" + user).value;
  var secondname = document.getElementById("gbr" + user).alt;
  localStorage.setItem("textvalue", firstname);
  localStorage.setItem("textvalue2", secondname);
  return false;
}
