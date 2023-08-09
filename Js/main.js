// Juego Race Off!

let welcome =alert("Bienvenidos a la batalla final! Max Verstappen vs Lewis Hamilton 🔥🔥🔥")

let start = alert("Arrancamos?!🔥🏁")

// Drivers
let rb1 = "Max Verstappen" 
let mb1 = "Lewis Hamilton"

// Speed range
const TOPSPEED = 350;
const MINSPEED = 80;


//wins counter

let wins = new Map();
wins.set(rb1, 0);
wins.set(mb1, 0);


// Laps
let lap = 1;


// Loop

for (let i = 0; i < 5; i++) {
    console.log("------Vuelta " + (i + 1) + "------");
  
    let rb1Speed = Math.ceil(Math.random() * (TOPSPEED - MINSPEED) + MINSPEED);
    console.log("Max Verstappen " + "Speed = " + rb1Speed + " Km/h");
  
    let mb1Speed = Math.ceil(Math.random() * (TOPSPEED - MINSPEED) + MINSPEED);
    console.log("Lewis Hamilton " + "Speed = " + mb1Speed + " Km/h");
  
    let win = " Fue el mas rapido! 🔥🔥🔥";
  
    if (rb1Speed > mb1Speed) {
      alert(rb1 + " " + win);
      console.log(rb1 + win);
      wins.set(rb1, wins.get(rb1) + 1);
    }
  
    if (mb1Speed > rb1Speed) {
      alert(mb1 + " " + win);
      console.log(mb1 + win);
      wins.set(mb1, wins.get(mb1) + 1);
    }
  }

  
//  Final result


if (rb1 > mb1) {
    console.log(rb1 + " ganó más veces.");
    alert(rb1 + " ganó más veces.");
  }
  else if (mb1 > rb1) {
    console.log(mb1 + " ganó más veces.");
    alert(mb1 + " ganó más veces.");
  }
  else {
    console.log("Los dos corredores ganaron la misma cantidad de veces.");
    alert("Los dos corredores ganaron la misma cantidad de veces.");
  }


 

  

