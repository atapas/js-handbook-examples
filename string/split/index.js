let { log } = console;

log(
  "%c **** The Logs below are from the JavaScript String Method Examples ****",
  "color:blue;font-size: 20px"
);

// String Characters - Access By the Index Number
{
    let str = "Yes, You Can Do It!";
    console.log(str[0]); // Y
    console.log(str[1]); // e
    console.log(str[2]); // s
    console.log(str[3]); // ,

    console.log(str[10]); // a

    console.log(str.length); // 19
    console.log(str[str.length-1]); // a
}

// Split - Introduction
{
    let message = 'I am a Happy Go lucky Guy';
    console.log(message.split(' ')); // ["I", "am", "a", "Happy", "Go", "lucky", "Guy"]
    console.log(message.split('')); // ["I", " ", "a", "m", " ", "a", " ", "H", "a", "p", "p", "y", " ", "G", "o", " ", "l", "u", "c", "k", "y", " ", "G", "u", "y"]
    
    // Split into one Array
    console.log(message.split()); // ["I am a Happy Go lucky Guy"]
    console.log(message.split(',')); // ["I am a Happy Go lucky Guy"]
}

// Split - With a Limit
{
    let message = 'I am a Happy Go lucky Guy';
    console.log(message.split(' ', 4)); // ["I", "am", "a", "Happy"] 
}

// Split - Using regex
{
    let message = 'The sky is blue. Grass is green! Do you know the color of the Cloud?';
    let sentences = message.split(/[.,!,?]/);
    console.log(sentences); // ["The sky is blue", " Grass is green", " Do you know the color of the Cloud", ""]

    sentences = message.split(/[.,!,?]/, 3);
    console.log(sentences); // ["The sky is blue", " Grass is green", " Do you know the color of the Cloud"]

    // With capturing parentheses ()
    sentences = message.split(/([.,!,?])/); // ["The sky is blue", ".", " Grass is green", "!", " Do you know the color of the Cloud", "?", ""]
    console.log(sentences);
}

// Split - Replace Characters
{
    let name = 'Tapas Adhikary';
    let subs = name.split(' ');
    console.log(subs); // ["Tapas", "Adhikary"]
    let joined = subs.join('-');
    console.log(joined); // Tapas-Adhikary
}

// ES6 - Split and Destructuring
{
    let name = 'Tapas Adhikary';
    let [firstName, lastName] = name.split(' ');
    console.log(firstName, lastName);

}

// Es6 - Split, Join  and destructuring
{

    let str = "I'm doing good, but can do better";
    let [str1, str2, str3, ...str4] = str.split(' ');
    console.log(str1, str2, str3, str4); // I'm doing good, (4) ["but", "can", "do", "better"]

    str3 = str4.join(' ');
    console.log(str3); // but can do better
}