function passportdata(firstname,lastname,age,education,gender,adharid,housenumber,street,city,state,country)
{
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.education=education;
	this.gender=gender;
	this.adharid=adharid;
	this.address = new Address(housenumber,street,city,state,country);
}
function Address(housenumber,street,city,state,country)
{
	this.hno=housenumber;
	this.street=street;
	this.city=city;
	this.state=state;
	this.country=country;
}
var user1= new passportdata("varun","reddy",25,"btech","male",1,"3-7-12","ameerpet","hyderabad","telangana","India");