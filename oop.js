function Car(name, model, type){

	this.name = name
	this.type = type
	this.model = model
	this.numOfWheels = 4
	this.numOfDoors = 4

	this.drive = function(arg){
		return(new Car(this.name, this.model, this.type))
	}


	if(name === undefined){
		this.name = "General"
	}

	if(model === undefined){
		this.model = "GM"
	}

	if(name == "Porshe"){
		this.numOfDoors = 2
		//this.speed = "250km/h"

		this.drive = function(arg){
			speed = arg * 50
			this.speed = speed.toString() + " km/h"
			return(new Car(this.name, this.model, this.type, this.speed))
		}
	}

	if(name == "Koenigsegg"){
		this.numOfDoors = 2
		this.isSaloon = true
	}

	if(type == "trailer"){
		this.speed = "0 km/h"
		this.numOfWheels = 8
		this.isSaloon = false
		
		this.drive = function(arg){
		  return(new Car(this.name, this.model, this.type, this.speed = "77 km/h"))	
		}
	}
}