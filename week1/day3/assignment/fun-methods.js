var person = {
    firstname: 'Harika',
    lastname: 'Thipparthi',
    getMyName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var personName = function(pets, hobby) {
    console.log(this.getMyName() + ' loves ' + pets + ' and likes ' + hobby);
};

var personName1 = function(){
  console.log("hii "+this.getMyName());
}

personName.call(person,'dogs', 'coding');
personName.apply(person,['rabbits', 'algorithms']); 

var logPerson = personName1.bind(person);
logPerson();
