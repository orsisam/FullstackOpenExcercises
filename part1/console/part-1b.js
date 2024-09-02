// Object methods and "this"

const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function () {
    console.log(`Hi, my name is ${this.name}`);
    // console.log(this);
  },
  doAddition: function (a, b) {
    console.log(a + b);
  },
};

// // Methods can be assigned to objects even after the creation
arto.growOlder = function () {
  this.age += 1;
};

console.log('Arto age is: ' + arto.age);
arto.growOlder();
console.log('Arto age is: ' + arto.age);

// console.log(`First greet ${arto.greet()}`);
arto.greet();

arto.doAddition(1, 2);

const referenceToAddition = arto.doAddition;
referenceToAddition(1, 2);

const referenceToGreet = arto.greet;
referenceToGreet();

console.warn('using setTimeout');
setTimeout(arto.greet, 1000);

console.warn('using bind');
setTimeout(arto.greet.bind(arto), 2000);
