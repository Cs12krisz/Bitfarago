/*
let filmek = [ "Cím: Csillagok között <br> Megjelenési év: 2014 <br><br>",
               "Cím: Mentőexpedíció <br> Megjelenési év: 2015 <br><br>",
               "Cím: A szem tükrében <br> Megjelenési év: 2015 <br><br>",
               "Cím: Teljesen idegenek <br>  Megjelenési év: 2016 <br><br>",
               "Cím: Csillagainkban a hiba <br> Megjelenési év: 2014 <br><br>",
               "Cím: A sötét lovag: Felemelkedés <br> Megjelenési év: 2012 <br><br>",
               "Cím: Mission: Impossible - Utóhatás <br> Megjelenési év: 2018 <br><br>",
               "Cím: Egy nap <br> Megjelenési év: 2011 <br><br>",
               "Cím: Ezer szó <br> Megjelenési év: 2012 <br><br>",
               "Cím: Másnaposok <br> Megjelenési év: 2009 <br><br>",
               "Cím: Viharsziget <br> Megjelenési év: 2010 <br><br>",
               "Cím: A segítség <br> Megjelenési év: 2011 <br><br>",
               "Cím: Családi üzelmek <br> Megjelenési év: 2013 <br><br>",
               "Cím: Low Tide <br> Megjelenési év: 2019 <br><br> ",
               "Cím: Joker <br> megjelenési év: 2019 <br><br>" ]
*/


let film1 ={cim: "Cím: Csillagok között <br> Megjelenési év: 2014 <br><br>", kat1:"sci-fi", kat2:"dráma", kat3:"kaland"}
let film2 ={cim: "Cím: Mentőexpedíció <br> Megjelenési év: 2015 <br><br>", kat1:"sci-fi", kat2:"dráma", kat3: "kaland"}
let film3 ={cim: "Cím: A szem tükrében <br> Megjelenési év: 2015 <br><br>", kat1:"sci-fi", kat2:"dráma", kat3: "romantika"}
let film4 ={cim: "Cím: Teljesen idegenek <br>  Megjelenési év: 2016 <br><br>", kat1: "vígjáték", kat2:"dráma" }
let film5 ={cim: "Cím: Csillagainkban a hiba <br> Megjelenési év: 2014 <br><br>", kat1:"romantika",kat2:"dráma" }
let film6 ={cim: "Cím: A sötét lovag: Felemelkedés <br> Megjelenési év: 2012 <br><br>", kat1:"akció",kat2:"kaland"}
let film7 ={cim: "Cím: Mission: Impossible - Utóhatás <br> Megjelenési év: 2018 <br><br>", kat1:"akció", kat2:"thriller", kat3:"kaland"}
let film8 ={cim: "Cím: Egy nap <br> Megjelenési év: 2011 <br><br>", kat1:"romantika", kat2:"dráma"}
let film9 ={cim: "Cím: Ezer szó <br> Megjelenési év: 2012 <br><br>", kat1:"vígjáték", kat2:"dráma"}
let film10 ={cim: "Cím: Másnaposok <br> Megjelenési év: 2009 <br><br>", kat1:"vígjáték"}
let film11 ={cim: "Cím: Viharsziget <br> Megjelenési év: 2010 <br><br>", kat1:"thriller"}
let film12 ={cim: "Cím: A segítség <br> Megjelenési év: 2011 <br><br>", kat1:"dráma"}
let film13 ={cim: "Cím: Családi üzelmek <br> Megjelenési év: 2013 <br><br>", kat1:"vígjáték", kat2:"krimi"}
let film14 ={cim: "Cím: Low Tide <br> Megjelenési év: 2019 <br><br> ", kat1:"thriller", kat2:"dráma"}
let film15 ={cim: "Cím: Joker <br> megjelenési év: 2019 <br><br>", kat1:"thriller", kat2:"dráma", kat3:"krimi"}

let filmek= [film1,film2,film3,film4,film5,film6,film7,film8,film9,film10,film11,film12, film13, film14, film15]
document.getElementById("valogat").onclick = function valogat(){


    const scifi1 =     document.getElementById("sci-fi").checked
    const akcio1 =     document.getElementById("akcio").checked
    const romantika1 = document.getElementById("romantika").checked
    const thriller1 =  document.getElementById("thriller").checked
    const kaland1 =    document.getElementById("kaland").checked
    const drama1 =     document.getElementById("drama").checked
    const vigjatek1 =  document.getElementById("vigjatek").checked
    const krimi1 =     document.getElementById("krimi").checked

    const fajtak1 = [scifi1, akcio1, romantika1,thriller1,kaland1,drama1,vigjatek1,krimi1]
   
    const scifi2 =     document.getElementById("sci-fi")
    const akcio2 =     document.getElementById("akcio")
    const romantika2 = document.getElementById("romantika")
    const thriller2 =  document.getElementById("thriller")
    const kaland2 =    document.getElementById("kaland")
    const drama2 =     document.getElementById("drama")
    const vigjatek2 =  document.getElementById("vigjatek")
    const krimi2 =     document.getElementById("krimi")
   const fajtak2 = [scifi2, akcio2, romantika2,thriller2,kaland2,drama2,vigjatek2,krimi2]

   let kereses = fajtak2
   let kiiro = ""
    /*
        if (fajtak[0] == true){
            document.getElementById("filmek").innerHTML = `${filmek[0]} ${filmek[1]} ${filmek[2]}`;
        }else if(fajtak){

        }
        if(fajtak[0] && fajtak[5] == true){
            document.getElementById("filmek").innerHTML =  `${filmek[0]} ${filmek[1]} ${filmek[2]}`;
        }
        if(fajtak[0] && fajtak[2] == true){
            document.getElementById("filmek").innerHTML = `${filmek[2]}`;
        }
        if(fajtak[0] && fajtak[4] == true){
            document.getElementById("filmek").innerHTML = `${filmek[0]} ${filmek[1]}`;
        }
        if(fajtak[1] == true){
            document.getElementById("filmek").innerHTML = `${filmek[6]}  ${filmek[5]}`;
        }
        if(fajtak[1] && fajtak[3] == true){
            document.getElementById("filmek").innerHTML = `${filmek[7]}`;
        }
        if(fajtak[1] && fajtak[4] == true){
            document.getElementById("filmek").innerHTML = `${filmek[5]} ${filmek[6]}`;
        }
        if(fajtak[2] == true){
            document.getElementById("filmek").innerHTML = `${filmek[7]} ${filmek[2]} ${filmek[4]}`;
        }
        if(fajtak[2] && fajtak[5] == true){
            document.getElementById("filmek").innerHTML = `${filmek[4]} ${filmek[2]}`;
        }
        if(fajtak[2] && fajtak[0] == true){
            document.getElementById("filmek").innerHTML = `${filmek[2]}`;
        }
        if(fajtak[3] == true){
            document.getElementById("filmek").innerHTML = `${filmek[6]}  ${filmek[10]} ${filmek[13]} ${filmek[14]}`;
        }
        if(fajtak[3] && fajtak[5] == true){
            document.getElementById("filmek").innerHTML = `${filmek[14]} ${filmek[13]}`;
        }
        if(fajtak[3] && fajtak[7] == true){
            document.getElementById("filmek").innerHTML = `${filmek[14]}`;
        }
        if(fajtak[3] && fajtak[4] == true){
            document.getElementById("filmek").innerHTML = `${filmek[6]}`;
        }
        if(fajtak[3] && fajtak[1] == true){
            document.getElementById("filmek").innerHTML = `${filmek[7]}`;
        }
        if(fajtak[4] == true){
            document.getElementById("filmek").innerHTML = `${filmek[0]}  ${filmek[1]}  ${filmek[5]} ${filmek[6]}`;
        } 
        if(fajtak[4] && fajtak[5] == true){
            document.getElementById("filmek").innerHTML = `${filmek[1]} ${filmek[0]}`;
        }
        if(fajtak[5] == true){
            document.getElementById("filmek").innerHTML = `${filmek[0]} ${filmek[1]} ${filmek[2]} ${filmek[4]} ${filmek[3]} ${filmek[14]} ${filmek[11]} ${filmek[13]} ${filmek[8]}`;
        }
        if(fajtak[5] && fajtak[7] == true){
            document.getElementById("filmek").innerHTML = `${filmek[14]}`;
        }
        if(fajtak[5] && fajtak[6] == true){
            document.getElementById("filmek").innerHTML = `${filmek[9]} ${filmek[3]}`;
        }
        if(fajtak[6] == true){
            document.getElementById("filmek").innerHTML = `${filmek[3]} ${filmek[9]} ${filmek[12]}`;
        }
        if(fajtak[6] && fajtak[7] == true){
            document.getElementById("filmek").innerHTML = `${filmek[12]}`;
        }
        if(fajtak[0] && fajtak[4] && fajtak[5] == true){
            document.getElementById("filmek").innerHTML = `${filmek[0]} ${filmek[1]}`;
        }
        if(fajtak[1] && fajtak[4] && fajtak[3] == true){
            document.getElementById("filmek").innerHTML = `${filmek[6]}`;
        }
        if(fajtak[0] && fajtak[1] && fajtak[2] && fajtak[3] && fajtak[4] && fajtak[5] && fajtak[6] && fajtak[7] == true){
            document.getElementById("filmek").innerHTML = "Sajnos, nincs ilyen film.";
        }
        if(fajtak[0] && fajtak[1] && fajtak[2] && fajtak[3] && fajtak[4] && fajtak[5] && fajtak[6] == true){
            document.getElementById("filmek").innerHTML = "Sajnos, nincs ilyen film.";
        }
   */
        for(let x in filmek){
            if(fajtak1[0] == true){
                console.log(kereses)
                if(kereses == filmek[x].kat1 || filmek[x].kat2 || filmek[x].kat3){
                kiiro = filmek[x].cim
                document.getElementById("filmek").innerHTML = kiiro
            }
        }
    }
/*
const film1 = {title:"Cápa 1", cat1:"horror", cat2:"kaland", picture:"kep1.jpg"};
const film2 = {title:"Superman", cat1:"kaland", cat2:"vígjáték",picture:"kep2.jpg"};
const film3 = {title:"Forest Gump", cat1:"dráma", cat2:"vígjáték",picture:"kep3.jpg"};
const film4 = {title:"Top Gun", cat1:"dráma", cat2:"kaland",picture:"kep4.jpg"};
const list=[film1,film2,film3, film4]
kiirkod="";
keresettkat1="kaland"
for (let x in list)
	{
		if (list[x].cat1==keresettkat1 || list[x].cat2==keresettkat1){
		
		
		
		kiirkod+="<p>"+list[x].title+" <img src='"+list[x].picture+"' /></p>";
	}
	}
	document.getElementById("filmek").innerHTML = kiirkod;
    */

}
