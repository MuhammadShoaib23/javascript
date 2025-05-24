//Task 1: Create a Full Address
var street = prompt("Enter your street:");
var city = prompt("Enter your city:");
var country = prompt("Enter your country:");
var fullAddress = street + ", " + city + ", " + country;
alert("Your full address is: " + fullAddress);

//Task 2: Make a Custom Username
var firstName = prompt("Enter your first name:");
var favoriteNumber = prompt("Enter your favorite number:");
var username = firstName + favoriteNumber;
alert("Your new username is: " + username);

//Task 3: Email Generator
var fName = prompt("Enter your first name:");
var lName = prompt("Enter your last name:");
var email = fName.toLowerCase() + "." + lName.toLowerCase() + "@gmail.com";
alert("Your generated email is: " + email);

//Task 4: Combine Favorite Things
var color = prompt("Enter your favorite color:");
var animal = prompt("Enter your favorite animal:");
var food = prompt("Enter your favorite food:");
var favoritesSentence = "Your favorite things are: " + color + ", " + animal + "s and " + food + "!";
alert(favoritesSentence);

//Task 5: Quote with Author
var quote = prompt("Enter a quote:");
var author = prompt("Enter the author's name:");
alert('"' + quote + '" - ' + author);