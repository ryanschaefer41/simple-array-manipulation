let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// removes 'Javascript' (last element in array)
let newSecretMessage = secretMessage.pop();

// adds 'to' and 'Program' at end of array
secretMessage.push('to', 'Program');

// replaces 'easily' with 'right'
secretMessage[7] = 'right';

// reassigns newSecretMessage var and removes 'Learning' (first element in array)
newSecretMessage = secretMessage.shift();

// reassigns newSecretMessage var and adds 'Programming' as first element in array
newSecretMessage = secretMessage.unshift('Programming');

// replace with ' get easily the first time' with know
secretMessage.splice(6, 5, 'know,');

// print array as a sentence
console.log(secretMessage.join(' '));
