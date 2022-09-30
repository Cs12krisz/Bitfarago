let filmek = [ "Cím: Csillagok között <br> Megjelenési év: 2014",   //0
               "Cím: Mentőexpedíció <br> Megjelenési év: 2015",     //1
               "Cím: A szem tükrében <br> Megjelenési év: 2015",    //2
               "Cím: Teljesen idegenek <br>  Megjelenési év: 2016", //3
               "Cím: Csillagainkban a hiba <br> Megjelenési év: 2014",//4 
               "Cím: A sötét lovag: Felemelkedés <br> Megjelenési év: 2012",//5 
               "Cím: Mission: Impossible - Utóhatás <br> Megjelenési év: 2018",//6 
               "Cím: Egy nap <br> Megjelenési év: 2011", //7
               "Cím: Ezer szó <br> Megjelenési év: 2012 ",//8
               "Cím: Másnaposok <br> Megjelenési év: 2009", //9
               "Cím: Viharsziget <br> Megjelenési év: 2010",//10
               "Cím: A segítség <br> Megjelenési év: 2011",//11
               "Cím: Családi üzelmek <br> Megjelenési év: 2013",//12 
               "Cím: Low Tide <br> Megjelenési év: 2019", //13
               "Cím: Joker <br> megjelenési év: 2019" ] //14
            //`dőlt idézőjelen belül szöveg, ha valtozót akarunk hívni csak ${valtozo} különítjük dőlt idéző jelen belül`
            
            document.getElementById("valogat").onclick = function(){
                if(document.getElementById("sci-fi").checked){
                    document.getElementById("filmek").innerHTML = `${filmek[0]} <br><br> ${filmek[1]}  <br><br> ${filmek[2]}`
                }else{
                    document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                }
                if(document.getElementById("drama").checked){
                    document.getElementById("filmek").innerHTML = `${filmek[0]} <br><br> ${filmek[1]}   <br><br> ${filmek[2]} <br><br> ${filmek[4]} 
                    <br><br> ${filmek[3]} <br><br> ${filmek[14]} <br><br> ${filmek[11]}  <br><br> ${filmek[13]} <br><br> ${filmek[8]}`
                }else{
                    document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                }
                if(document.getElementById("akcio").checked){
                    document.getElementById("filmek").innerHTML = `${filmek[6]} <br><br> ${filmek[5]}`
                }else{
                    document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                }
                if(document.getElementById("kaland").checked){
                    document.getElementById("filmek").innerHTML = `${filmek[0]} <br><br> ${filmek[1]} <br><br> ${filmek[5]} <br><br> ${filmek[6]}`
                }else{
                    document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                }
                if(document.getElementById("thriller").checked){
                    document.getElementById("filmek").innerHTML = `${filmek[6]} <br><br> ${filmek[10]} <br><br> ${filmek[13]} <br><br> ${filmek[14]}`
                }else{
                    document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                }
                if(document.getElementById("vigjatek").checked){
                    document.getElementById("filmek").innerHTML = `${filmek[12]} <br><br> ${filmek[8]} <br><br> ${filmek[3]}`
                }else{
                    document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                }
                if(document.getElementById("romantika").checked){
                    document.getElementById("filmek").innerHTML = `${filmek[7]} <br><br> ${filmek[3]}`
                }else{
                    document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                }
                if(document.getElementById("krimi").checked){
                    document.getElementById("filmek").innerHTML = `${filmek[14]} <br><br> ${filmek[12]}`
                }else{
                    document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                }
                if(document.getElementById("sci-fi").checked){
                   if(document.getElementById("drama").checked){
                    document.getElementById("filmek").innerHTML = `${filmek[0]} <br><br> ${filmek[1]}   <br><br> ${filmek[2]}`
                    }else{
                        document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                    }
                }
                if(document.getElementById("sci-fi").checked){
                    if(document.getElementById("akcio").checked){
                        alert("Sajnos nincs ilyen fajta filmünk MÉG. Válassz valami mást.")
                        document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                    }
                }
                if(document.getElementById("sci-fi").checked){
                    if(document.getElementById("kaland").checked){
                        document.getElementById("filmek").innerHTML = `${filmek[0]} <br><br> ${filmek[1]}`
                    }
                }else{
                    document.getElementById("filmek").innerHTML = ""
                }
                if(document.getElementById("sci-fi").checked){
                    if(document.getElementById("thriller").checked){
                        alert("Sajnos nincs ilyen fajta filmünk MÉG.")
                        document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                    }
                }
                if(document.getElementById("sci-fi").checked){
                    if(document.getElementById("vigjatek").checked){
                        alert("Sajnos nincs ilyen fajta filmünk MÉG.")
                        document.getElementById("filmek").innerHTML = "Válassz ki előtte egy műfajt vagy többet!"
                    }
                }
                if(document.getElementById("sci-fi").checked){
                    if(document.getElementById("romantika").checked){
                        document.getElementById("filmek").innerHTML = `${filmek[2]}`
                    }
                }
        } 
            