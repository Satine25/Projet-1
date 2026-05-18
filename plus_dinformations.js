function AffichageTexte() {
document.getElementById("MyfooterJS2").style.fontSize = "35px";
document.getElementById("MyfooterJS2").style.color =
"black";
document.getElementById("MyfooterJS2").style.backgroundColor ="green";
document.getElementById("MyfooterJS2").innerHTML =
"XXXXXXXXXXX";
}



function date (){
document.getElementById("section").textContent = new Date().toLocaleString("fr-FR", {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
hour: "2-digit",
minute: "2-digit",
second: "2-digit"
});
}