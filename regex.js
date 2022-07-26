/*
1. Usernames can only use alpha-numeric characters.
2. The only numbers in the username have to be at 
the end. There can be zero or more of them at the 
end. Username cannot start with the number.
3. Username letters can be lowercase and uppercase.
4. Usernames have to be at least two characters long. 
A two-character username can only use alphabet letters 
as characters.
*/

let userCheck = /(^[A-z]{2,}\d*$)|([A-z]+\d{2,}$)/;
/* 
Use lookaheads in the pwRegex to match passwords that are 
greater than 5 characters long, and have two consecutive digits.
*/

let pwRegex = /(?=\w{6,})(?=\w*\d{2})/;

//Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);