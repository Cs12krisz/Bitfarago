                      //0                   //1                         //2                     //3                     //4                     //5                    
let evek = ["Megjelenési év: 2009", "Megjelenési év: 2010", "Megjelenési év: 2011", "Megjelenési év: 2012", "Megjelenési év: 2013", "Megjelenési év: 2014",  
          //6                      //7                   //8                     //9
"Megjelenési év: 2015", "Megjelenési év: 2016", "Megjelenési év: 2018", "Megjelenési év: 2019"]

let filmek = ["Cím: Csillagok között", "Cím: Mentőexpedíció", "Cím: A szem tükrében", "Cím: Teljesen idegenek", "Cím: Csillagainkban a hiba", 
"Cím: A sötét lovag: Felemelkedés", "Cím: Mission: Impossible - Utóhatás", "Cím: Egy nap", "Cím: Ezer szó", "Cím: Másnaposok", "Cím: Viharsziget",
"Cím: Családi üzelmek", "Cím: Low Tide", "Cím: Joker" ]


let drama = ["Cím: Csillagok között", "Cím: Mentőexpedíció", "Cím: A szem tükrében", "Cím: Csillagainkban a hiba", "Cím: Egy nap", 
"Cím: Low Tide", "Cím: A segítség", "Cím: Teljesen idegenek", "Cím: Joker", "Cím: Ezer szó"]


//`dőlt idézőjelen belül szöveg, ha valtozót akarunk hívni csak ${valtozo} különítjük dőlt idéző jelen belül`
// Egy teljes szöveg hívása
let kiir = `${drama[0]} <br> ${evek[5]} <br><br> ${drama[1]} <br> ${evek[6]} <br><br> ${drama[2]} <br> ${evek[5]} <br><br> ${drama[3]} <br> ${evek[5]} 
<br><br> ${drama[4]} <br> ${evek[2]} <br><br> ${drama[5]} <br> ${evek[8]} <br><br> ${drama[6]} <br> ${evek[2]} <br><br> ${drama[7]} <br> ${evek[7]} <br><br> ${drama[8]} <br> ${evek[9]}`

/*
document.write(`${drama[0]} <br> ${evek[5]} <br><br> ${drama[1]} <br> ${evek[6]} <br><br> ${drama[2]} <br> ${evek[5]} <br><br> ${drama[3]} <br> ${evek[5]} 
<br><br> ${drama[4]} <br> ${evek[2]} <br><br> ${drama[5]} <br> ${evek[9]} <br><br> ${drama[6]} <br> ${evek[2]} <br><br> ${drama[7]} <br> ${evek[7]}`)
Működött!

let scifi =[ filmek[0], filmek[1], filmek[2] ]
document.write(scifi[0])
Ez egy bonyolultabb megoldás, inkább felejtsük!
*/

document.write(`${filmek[0]} <br> ${evek[5]} <br><br> ${filmek[1]} <br> ${evek[6]} <br><br> ${filmek[2]} <br> ${evek[5]} <br><br> ${filmek[3]} <br> ${evek[5]} <br><br> ${filmek[4]} <br> ${evek[2]} <br><br> ${filmek[5]} <br> ${evek[8]} <br><br> ${filmek[6]} <br> ${evek[2]} <br><br> ${filmek[7]} <br> ${evek[7]} <br><br> ${filmek[8]} <br> ${evek[9]}`)


document.getElementById("valogat").onclick = function(){
    if(document.getElementById("sci-fi").checked){
        document.getElementById("valogat").innerHTML = `${filmek[0]} <br> ${evek[5]} <br> ${filmek[1]} <br> ${evek[6]} <br> ${filmek[2]}`
    }
    if(document.getElementById("drama").checked){
        document.getElementById("valogat").innerHTML = `${drama[0]} <br> ${evek[5]} <br><br> ${drama[1]} <br> ${evek[6]} <br><br> ${drama[2]} <br> ${evek[5]} <br><br> ${drama[3]} <br> ${evek[5]} 
        <br><br> ${drama[4]} <br> ${evek[2]} <br><br> ${drama[5]} <br> ${evek[8]} <br><br> ${drama[6]} <br> ${evek[2]} <br><br> ${drama[7]} <br> ${evek[7]} <br><br> ${drama[8]} <br> ${evek[9]}`
    }
    if(document.getElementById("akcio").checked){
        document.getElementById("valogat").innerHTML = ``
    }

} 

