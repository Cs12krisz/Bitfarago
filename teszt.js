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



let proba ={kat1: "Cím: Csillagok között <br> Megjelenési év: 2014 <br><br>"}
let kesz = [proba]
document.getElementById("valogat").onclick = function valogat(){


    const scifi =     document.getElementById("sci-fi").checked
    const akcio =     document.getElementById("akcio").checked
    const romantika = document.getElementById("romantika").checked
    const thriller =  document.getElementById("thriller").checked
    const kaland =    document.getElementById("kaland").checked
    const drama =     document.getElementById("drama").checked
    const vigjatek =  document.getElementById("vigjatek").checked
    const krimi =     document.getElementById("krimi").checked

    const fajtak = [scifi, akcio,romantika,thriller,kaland,drama,vigjatek,krimi]
    kiiro = ""
    kereses = fajtak
    
        if (fajtak[0] == true){
            document.getElementById("filmek").innerHTML = `${filmek[0]} ${filmek[1]} ${filmek[2]}`;
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
   
        for(let x in proba){
            if(fajtak[0] == true){
                kiiro = kesz[x].kat1
                document.getElementById("filmek").innerHTML = kiiro
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