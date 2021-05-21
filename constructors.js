
//constuctor function and prototype

 function School(firstName,lastName,resident,gender,nameoftheSchool,course,extra){
  this.firstName=firstName;
  this.lastName=lastName;
  this.resident=resident;
  this.gender=gender;
  this.nameoftheSchool=nameoftheSchool;
  this.course=course;
  this.extra=extra
  
    }
    School.prototype.getbackground = function(){
      return "Hello, my name is "+" "+this.firstName+" "+this.lastName+" "+ "from" + " "+this.resident+" ,"+"I am a"+" "+this.gender+" "+"coder at"+" "+this.nameoftheSchool+" "+"therefore I study"+" "+this.course + this.extra+"Iam going  to talk about the following books and how they impact the society either positively or negatively"
      }
  const school=new School("Constance","Kavaya","Kajiado County","female","AkiraChix","InformationTechnology","hence")
  console.log(school.getbackground())
  function Books(name,year){
  this.name=name;
  this .year=year;
  
  }
var myBook1=new Books("Blossoms",2008);
 var myBook2=new Books("A dolce house",2002);
 var myBook3=new Books("Kigogo",2010);

console .log(myBook1.name, "is a novel which was published in",myBook1.year,"for student understand how maasai community are still enforcing there calture and what girls pass through when some of this caltures are put into practice");

 console .log(myBook2.name, "is a novel which was published in",myBook2.year,"for student to learn about how women are diminished in the society and how they are looked at by the society");
 
 console .log(myBook3.name, "is a novel which was published in",myBook3.year,"for student like me who want to explore more about what is the going on in the country");
 

//class constructor and getters
class Community{
  constructor(schools,labour,price){
  this.schools=schools;
  this.labour=labour;
  this.price=price;
  
   };
getThem(){
  return `The construction of ${this.schools} school in turkana ,for our community service project ,which will require ${this.labour} ml of water and it will cost ${this.price} shillings without inclusion of water in the construction`};
}
var community=new Community(500,10000,1000000);
console.log(community.getThem());
// var student=new Community("Hello","Hey","ggg");
// console.log(student);
// console.log(student.price)


//Hoisting and closures
var student=98;
function organisation(){
var police=150;
function collect(){
var akirchixstudent="AkiraChix organisation was proven innocent";
console.log("Hello this are the" + " "+student+" " + "students who were collected by" + " "+police+" " + "police officers to Gigiri police station without mercy");
  }
return collect;
 }
 var store =  organisation();
 store();
