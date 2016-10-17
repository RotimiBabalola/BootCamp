function Car(name, model, type){

	this.name = name
	this.type = type
	this.model = model
	this.numOfWheels = 4
	this.numOfDoors = 4
	this.speed = "0 km/h"
	

	Car.prototype.drive = function(arg) {
		if(this.type == "trailer"){
	    speed = arg * 11
	    this.speed = speed.toString() + " km/h"
	  }
	  else{
	  	speed = arg * 50
	  	this.speed = speed.toString() + " km/h"
	  }

	  return this
	};


	if(name === undefined){
		this.name = "General"
	}

	if(model === undefined){
		this.model = "GM"
	}

	if(name == "Porshe"){
	  this.speed = "0 km/h"
		this.numOfDoors = 2
	}

	if(name == "Koenigsegg"){
		this.numOfDoors = 2
		this.isSaloon = true
	}

	if(type == "trailer"){
	  this.speed = "0 km/h"
		this.numOfWheels = 8
		this.isSaloon = false
	}
}