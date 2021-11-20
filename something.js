var planet;
var time;
var displaytext;

function button(){
    planet = document.getElementById("planets")
    if (planet = "Mercury"){
        time = 88/365;
        displaytext = planet.options[planet.selectedIndex].text
        document.getElementsById("time").value = displaytext;
    } else if (planet = "Venus"){

    } else if (planet = "Mars"){

    } else if (planet = "Jupiter"){

    } else if (planet = "Saturn"){

    } else if (planet = "Uranus"){

    } else {

    }

}
console.log(planet);