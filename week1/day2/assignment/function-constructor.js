function Person(first, last, age, gender) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.gender = gender;
}

var myMother = new Person("Karuna", "Thipparthi", 44, "female");
console.log(myMother);

var myFather = new Person("Ashok Reddy", "Thipparthi", 50, "Male");

myMother.motherTongue = "Telugu";

myFather.fullname = function () {
  return this.firstName + " " + this.lastName;
};

console.log("My father's name is "+myFather.fullname());
