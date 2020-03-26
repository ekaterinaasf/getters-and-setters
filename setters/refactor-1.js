const obj1 = {
  greeting: ``,
  setGreetingName: function(newName) {
    this.greeting = `hi, I'm ${newName}!`;
  }
};

const obj2 = {
  greeting: ``,
  set greetingName(newName) {
    // write me!
    this.greeting = `hi, I'm ${newName}!`;
  }
};

obj1.setGreetingName("obj1");
console.assert(obj1.greeting === "hi, I'm obj1!", "Test 1"); // write this line
obj2.greetingName = "obj2";
console.assert(obj2.greeting === "hi, I'm obj2!", "Test 2");

obj1.setGreetingName("hi");
console.assert(obj1.greeting === "hi, I'm hi!", "Test 3"); // write this line
obj2.greetingName = "bye";
console.assert(obj2.greeting === "hi, I'm bye!", "Test 4");
