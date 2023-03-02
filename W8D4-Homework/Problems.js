

function titleize(names, callback) {
  let titleized = names.map(name => {return `Mx. ${name} Jinglehiemer Schmidt`});
  callback(titleized);
}

function printCallback(names) {
  names.forEach(name => console.log(name));
}

titleize(["Mary", "Brian", "Leo"], printCallback);

// Constructors, Prototypes, and this

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}


Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function() {
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  const randomIndex = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[randomIndex]}!`);
};

const ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
console.log(ellie);
ellie.trumpet();
ellie.grow();
console.log(ellie.height);
ellie.addTrick("eating peanuts");
ellie.play();

// Function invocation

function paradeHelper(elephant) {
  console.log(`${elephant.name} is trotting by!`);
}

Elephant.paradeHelper = paradeHelper;

const ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
const charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
const kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
const micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

const herd = [ellie, charlie, kate, micah];

herd.forEach(Elephant.paradeHelper);

// Closure

function dinerBreakfast() {
  let order = "I'd like scrambled eggs and bacon please.";
  console.log(order);

  return function(food) {
    order = `${order.slice(0, -8)} and ${food} please.`;
    console.log(order);
  };
}

const bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");