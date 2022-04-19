var LLA = geofs.aircraft.instance.llaLocation;
var hT = geofs.aircraft.instance.parts.engine.thrust / 100
var hABT = geofs.aircraft.instance.parts.engine.afterBurnerThrust / 100
var T = geofs.aircraft.instance.parts.engine.thrust
var ABT = geofs.aircraft.instance.parts.engine.afterBurnerThrust

/*
I don't know if GeoFS has a stock way to have a range of LLAs,
and I don't really have a solid idea on how to calculate whether an aircraft is in one.
*/

//if (geofs.aircraft.instance.llaLocation == whatever goes here){   //LLA "if" statement for where carrier catapults are

//aircraft won't move if catapult is engaged and brakes are on, but only for 1 minute
document.addEventListener("keydown", function(e) {
if (e.keycode == /*shift+q*/ ) {
T = (T / 100)
ABT = (ABT / 100)
setTimeout(() => {
T = (hT * 100)
ABT = (hABT * 100)
   }, 60000)
};

if (geofs.aircraft.instance.id == 7){   // < || geofs.aircraft.instance.id == 2581 >    //F-14
if (T == hT || ABT == hABT){
   document.addEventListener("keydown", function(e) {
	   if (e.keyCode == 81) {
	   if (geofs.animation.values.groundContact == 1){
		   if (T == hT){
			T = (hT * 100)
			}
		   if (ABT == hABT){
			ABT = (hABT * 100)
			}
	   ABT = (ABT * 4)
		let whiteSmokeEmitter = new geofs.fx.ParticleEmitter({
            anchor: {
                        worldPosition: [0, 0, -1]
                    },
            duration: 1E5,
            rate: .05,
            life: 4E4,
            easing: "easeOutQuart",
            startScale: .0005,
            endScale: .0005,
            randomizeStartScale: .05,
            randomizeEndScale: .15,
            startOpacity: 0.9,
            endOpacity: 1E-5,
            startRotation: "random",
            texture: "whitesmoke"
        })
	   setTimeout(() => {ABT = (ABT / 4)}, 2000);
		setTimeout(() => {whiteSmokeEmitter.destroy()}, 2250);
	   }
	   }
   })
	}
}
//}   //this is the other end of the LLA "if" statement
