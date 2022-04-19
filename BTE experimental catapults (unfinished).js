var LLA = geofs.aircraft.instance.llaLocation;

/*
I don't know if GeoFS has a stock way to have a range of LLAs,
but we could probably encode it into a single number that can be within a value range.
*/

//if (geofs.aircraft.instance.llaLocation == whatever goes here){   //LLA "if" statement for where carrier catapults are

//aircraft won't move if catapult is engaged and brakes are on, but only for 1 minute
document.addEventListener("keydown", function(e) {
if (e.keycode == /*shift+q*/ ) {
setTimeout(() => {
geofs.aircraft.instance.parts.engine.thrust = (geofs.aircraft.instance.parts.engine.thrust / 100)
geofs.aircraft.instance.parts.engine.thrust = (geofs.aircraft.instance.parts.engine.afterBurnerThrust / 100)
   }, 60000)
};

var hT = geofs.aircraft.instance.parts.engine.thrust / 100
var hABT = geofs.aircraft.instance.parts.engine.afterBurnerThrust / 100

if (geofs.aircraft.instance.id == 7 || geofs.aircraft.instance.id == 2581){
if (geofs.aircraft.instance.parts.engine.thrust == hT || geofs.aircraft.instance.parts.engine.afterBurnerThrust == hABT){
   document.addEventListener("keydown", function(e) {
	   if (e.keyCode == 81) {
	   if (geofs.animation.values.groundContact == 1){
		   if (geofs.aircraft.instance.parts.engine.thrust == hT){
			geofs.aircraft.instance.parts.engine.thrust = (hT * 100)
			}
		   if (geofs.aircraft.instance.parts.engine.afterBurnerThrust == hABT){
			geofs.aircraft.instance.parts.engine.thrust = (hABT * 100)
			}
	   geofs.aircraft.instance.parts.engine.afterBurnerThrust = (geofs.aircraft.instance.parts.engine.afterBurnerThrust * 4)
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
	   setTimeout(() => {geofs.aircraft.instance.parts.engine.afterBurnerThrust = (geofs.aircraft.instance.parts.engine.afterBurnerThrust / 4)}, 2000);
		setTimeout(() => {whiteSmokeEmitter.destroy()}, 2250);
	   }
	   }
   })
	}
}
//}   //this is the other end of the LLA "if" statement
