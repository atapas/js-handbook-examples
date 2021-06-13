import "array.prototype.at/auto";

let { log } = console;

log(
  `%c **** The Logs below are from the Arrays Handbook ****
  Visit: https://www.freecodecamp.org/news/the-javascript-array-handbook/`,
  "color:green;font-size: 20px"
);

// Create Array
{
  let mixedTypedArray = [100, true, "freeCodeCamp", {}];

  let salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

  // let salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');

  // Access elements
  salad[0]; // '🍅'
  salad[2]; // '🥦'
  salad[5]; // '🥕'

  // Access using length
  let len = salad.length;
  salad[len - 1]; // '🥑'
  salad[len - 3]; // '🌽'

  // Loop through
  for (let i = 0; i < salad.length; i++) {
    console.log(`Element at index ${i} is ${salad[i]}`);
  }

  // push - Add at the end
  salad.push("🥜");

  // unshift - Add at the beginning
  salad.unshift("🥜");

  // pop - Remove from the end
  salad.pop("🥜");

  // shift - Remove from the beginning
  salad.shift("🥜");

  // Clone/Copy
  let saladCopy = salad.slice();

  console.log(saladCopy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

  salad === saladCopy; // returns false
}

{
  // Determine the value as Array
  Array.isArray(["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]); // returns true
  Array.isArray("🍅"); // returns false
  Array.isArray({ tomato: "🍅" }); // returns false
  Array.isArray([]); // returns true
}

// Destructuring
{
  let [tomato, mushroom, carrot] = ["🍅", "🍄", "🥕"];
  console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕
}
// Without Destructuring
{
  let vegetables = ["🍅", "🍄", "🥕"];
  let tomato = vegetables[0];
  let mushroom = vegetables[1];
  let carrot = vegetables[2];
}

// Default value
{
  let [tomato, mushroom = "🍄"] = ["🍅"];
  console.log(tomato); // '🍅'
  console.log(mushroom); // '🍄'
}

// Skip value
{
  let [tomato, , carrot] = ["🍅", "🍄", "🥕"];
  console.log(tomato); // '🍅'
  console.log(carrot); // '🥕'
}

// Nested Array
{
  let fruits = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];

  let veg = fruits[4]; // returns the array ['🍅', '🍄', '🥕']
  let carrot = veg[2]; // returns '🥕'

  fruits[4][2]; // returns '🥕'

  let [, , , , [, , carrot1]] = ["🍈", "🍍", "🍌", "🍉", ["🍅", "🍄", "🥕"]];
}
// Rest Parameter
{
  let [tomato, mushroom, ...rest] = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

  console.log(tomato); // '🍅'
  console.log(mushroom); // '🍄'
  console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]
}

// Spread Operator
{
  let salad = ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"];

  let saladCloned = [...salad];
  console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

  salad === saladCloned; // false
}
// Swap Values
{
  let first = "😔";
  let second = "🙂";
  [first, second] = [second, first];

  console.log(first); // '🙂'
  console.log(second); // '😔'
}
// Merge Arrays
{
  let emotion = ["🙂", "😔"];
  let veggies = ["🥦", "🥒", "🌽", "🥕"];
  let emotionalVeggies = [...emotion, ...veggies];
  console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]
}

// concat()
{
  let first = [1, 2, 3];
  let second = [4, 5, 6];

  let merged = first.concat(second);

  console.log(merged); // [1, 2, 3, 4, 5, 6]
  console.log(first); // [1, 2, 3]
  console.log(second); // [4, 5, 6]
}

// join()
{
  let emotions = ["🙂", "😍", "🙄", "😟"];

  let joined = emotions.join();
  console.log(joined); // "🙂,😍,🙄,😟"

  [].join(); // returns ""
}

// fill()
{
  let colors = ["red", "blue", "green"];

  colors.fill("pink");
  console.log(colors); // ["pink", "pink", "pink"]
}

// includes()
{
  let names = ["tom", "alex", "bob", "john"];

  names.includes("tom"); // returns true
  names.includes("july"); // returns false
}

// indexOf()
{
  let names = ["tom", "alex", "bob", "john"];

  names.indexOf("alex"); // returns 1
  names.indexOf("rob"); // returns -1
  names.lastIndexOf("tom"); // returns 3
}

// reverse()
{
  let names = ["tom", "alex", "bob"];

  names.reverse(); // returns ["bob", "alex", "tom"]
}

// sort()
{
  let names = ["tom", "alex", "bob"];
  names.sort(); // returns ["alex", "bob", "tom"]

  let numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1];
  numbers.sort();

  function ascendingComp(a, b) {
    return a - b;
  }

  numbers.sort(ascendingComp); // retruns [1, 5, 9, 10, 13, 23, 37, 56, 100]

  /* 

We could also code it like,

numbers.sort(function(a, b) {
  return (a-b);
});

Or, with the arrow function,

numbers.sort((a, b) => (a-b));

*/

  numbers.sort((a, b) => b - a);
}

// splice()
{
  let names = ["tom", "alex", "bob"];

  names.splice(1, 0, "zack");

  console.log(names); // ["tom", "zack", "alex", "bob"]
}

// Array.of()
{
  Array.of(2, false, "test", { name: "Alex" });
}

// Student Array of Objects

{
  let students = [
    {
      id: 1,
      f_name: "Alex",
      l_name: "B",
      gender: "M",
      married: false,
      age: 22,
      paid: 250,
      courses: ["JavaScript", "React"],
    },
    {
      id: 2,
      f_name: "Ibrahim",
      l_name: "M",
      gender: "M",
      married: true,
      age: 32,
      paid: 150,
      courses: ["JavaScript", "PWA"],
    },
    {
      id: 3,
      f_name: "Rubi",
      l_name: "S",
      gender: "F",
      married: false,
      age: 27,
      paid: 350,
      courses: ["Blogging", "React", "UX"],
    },
    {
      id: 4,
      f_name: "Zack",
      l_name: "F",
      gender: "M",
      married: true,
      age: 36,
      paid: 250,
      courses: ["Git", "React", "Branding"],
    },
  ];

  // filter()
  let femaleStudents = students.filter((element, index) => {
    return element.gender === "F";
  });

  console.log(femaleStudents);

  // map()
  let fullNames = students.map((element, index) => {
    return { fullName: element["f_name"] + " " + element["l_name"] };
  });

  console.log(fullNames);

  // reduce()
  let total = students.reduce((accumulator, student, currentIndex, array) => {
    accumulator = accumulator + student.paid;
    return accumulator;
  }, 0);

  console.log(total); // 1000

  // some()
  let hasStudentBelow30 = students.some((element, index) => {
    return element.age < 30;
  });

  console.log(hasStudentBelow30); // true

  // find()
  let student = students.find((element, index) => {
    return element.age < 30;
  });

  console.log(student);

  // every()
  let atLeastTwoCourses = students.every((elements, index) => {
    return elements.courses.length >= 2;
  });

  console.log(atLeastTwoCourses); // true

  // at()
  let junkFoodILove = ["🥖", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🍿"];

  junkFoodILove.at(0); // 🥖
  junkFoodILove.at(3); // 🍕
  junkFoodILove.at(-1); // 🍿
  junkFoodILove.at(-5); // 🍕
  junkFoodILove.at(-8); // 🥖
  junkFoodILove.at(10); // undefined
}
