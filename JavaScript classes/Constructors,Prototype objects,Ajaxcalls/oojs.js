function passportdata(firstname,lastname,age,education,gender,adharid,addressArrItem)
{
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.education=education;
	this.gender=gender;
	this.adharid=adharid;
	//this.address = new Address(housenumber,street,city,state,country);
   // Address.call(this,housenumber,street,city,state,country);
    Address.apply(this,addressArrItem);
}


function Address(housenumber,street,city,state,country)
{
	this.hno=housenumber;
	this.street=street;
	this.city=city;
	this.state=state;
	this.country=country;
     console.log('arguments',arguments);
}
Address.prototype.addressdetails=function(){
	console.log(this.hno,this.street,this.city);
}
passportdata.prototype=Object.create(Address.prototype);
passportdata.prototype.generaldata=function(){
	console.log(this.firstname,this.lastname);
}
passportdata.prototype.constructor=passportdata;
var user1= new passportdata("varun","reddy",25,"btech","male",1,["3-7-12","ameerpet","hyderabad","telangana","India"]);
var user2= new passportdata("raja","rao",25,"btech","male",1,["3-7-12","ameerpet","hyderabad","telangana","India"]);
user2.generaldata=function()
{
	console.log(this.firstname,this.lastname,this.age);
}
//bind method example

var obj={};
function multiples(a,b){
	console.log(a*b);
}
var multipleof5=multiples.bind(obj,5);
function samplename(a,b)
{
	return function(b)
	{
		console.log(a*b);
	}
}