class Animal {
  familyName = "";
  constructor(family) {
    this.familyName = family;
  }
  sayFamilyName() {
    return this.familyName;
  }
}

class Cat extends Animal{
   breedName = "";
  constructor(breed){
    super("cat");
    this.breedName = breed;
  }
  sayBreedName(){
    return this.breedName;
  }
}

let cat = new Cat();
cat.familyName = 'Carnivora';
cat.breedName = 'Persian';
console.log(cat.sayFamilyName());
console.log(cat.sayBreedName());
