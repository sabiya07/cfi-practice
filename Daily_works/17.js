// function getResult(value) {
//     if (value > 4) {
//     return 10;
//     } else {
//     return 20;
//     }
//     }
//     var result = getResult(3);
//     console.log (result)


    // function getResult(value) {
    //     if (value.length < 4) {
    //     return 'short';
    //     } else {
    //     return 'long';
    //     }
    //     }
    //     var result = getResult('hello');
    //     console.log(result)

    // function getResult(bool1, bool2) {
    //     return bool1 || bool2 ? 'one or more' : 'neither';
    //     }
    //     var result = getResult(true, false);
    //     console.log(result)

        // function getResult(arr) {
        //     if (arr.length) {
        //     return 'full';
        //     } else {
        //     return 'empty';
        //     }
        //     }
        //     var result = getResult([1, 2, 3]);
        //     console.log(result)


        // function getResult(value) {
        //     return value === 10 ? 'ten' : 'not ten';
        //     }
        //     var result = getResult(9);
        //     console.log(result)

        // function getSum(values) {
        //     var sum = 0;
        //     for (var i = 0; i < values.length; i++) {
        //     sum += values[i];
        //     }
        //     return sum;
        //     }
        //     function getAverage(values) {
        //     return getSum(values) / values.length;
        //     }
        //     result = getAverage([1, 2, 3]);
        //     console.log(result)


        // var nonNumericCards = {
        //     1: 'Ace',
        //     11: 'Jack',
        //     12: 'Queen',
        //     13: 'King'
        //     };
        //     var suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
        //     var pack = [];
        //     for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
        //     var suit = suits[suitIndex];
        //     for (var number = 1; number < 14; number++) {
        //     var value = nonNumericCards[number] || number;
        //     pack.push(value + ' of ' + suit);
        //     }
        //     }
        //     var result = pack[0];
        //     console.log(result)

        // var person1 = {
        //     name: 'Bob',
        //     dateOfBirth: '1973-01-03'
        //     };
        //     var person2 = {
        //     name: 'Bob',
        //     dateOfBirth: '1982-01-03'
        //     };
        //     function sameDateAndMonth(date1, date2) {
        //     var sameMonth = date1.getMonth() == date2.getMonth();
        //     var sameDate = date1.getDate() == date2.getDate();
        //     return sameMonth && sameDate;
        //     }
        //     function haveSameBirthday(person1, person2) {
        //     var date1 = new Date(person1.dateOfBirth);
        //     var date2 = new Date(person2.dateOfBirth);
        //     return sameDateAndMonth(date1, date2);
        //     }
        //     var result = haveSameBirthday(person1, person2);
        //     console.log(result)

//         var numberArray = new Array(10);
// for (var i = 0; i < numberArray.length; i++) {
// numberArray[i] = i * 3;
// }
// var result = numberArray[8]
// console.log(result)

// var string = '0123456789';
// var newString = '';
// for (var i = 0; i < string.length; i++) {
// var char = string.charAt(i);
// newString += char + char;
// }
// var result = newString.length;
// console.log(result)


// var score = 10;
// function doubleScore() {
// score = score * 2;
// }
// doubleScore();
// var result = score;
// console.log(result)

// var users = [
//     { username: 'amy', admin: true },
//     { username: 'bob', admin: false },
//     { username: 'helen', admin: true },
//     { username: 'amir', admin: false },
//     { username: 'carmen', admin: false }
//     ];
//     function countAdmins(userArr) {
//     var count = 0;
//     for (var i = 0; i < userArr.length; i++) {
//     if (userArr[i].admin) {
//     count = count + 1;
//     }
//     }
//     return count;
//     }
//     var result = countAdmins(users);
//     console.log(result)


// var users = [];
// function addUser(users, newUser) {
// return [].concat(users, newUser);
// }
// users = addUser(users, 'bob');
// users = addUser(users, 'amy');
// users = addUser(users, 'will');
// users = addUser(users, 'lin');
// var result = users.length;
// console.log(result)

// var list = [1, 2, 3];
// function doubleItems(input) {
// for (var i = 0; i < input.length; i += 1) {
// input[i] = input[i] * 2;
// }
// }
// doubleItems(list);
// var result = list[1];
// console.log(result)

// var animal = {
//     name: 'Snuffles',
//     type: 'DOG'
//     };
//     function rename(input, newName) {
//     input.name = newName;
//     }
//     rename(animal, 'Snowball');
//     var result = animal.name;
//     console.log(result)

    // function getSalutation(title, firstName, lastName) {
    //     var salutation;
    //     if (!title) {
    //     salutation = firstName + ' ' + lastName;
    //     } else {
    //     salutation = title + ' ' + lastName;
    //     }
    //     return salutation;
    //     }
    //     var result = getSalutation('Miss', 'Jane', 'Marple');
    //     console.log(result)


        // function getLogin(user) {
        //     var login;
        //     if (!user.admin) {
        //     login = user.email;
        //     } else {
        //     login = user.username;
        //     }
        //     return login;
        //     }
        //     var user = {
        //     username: 'jane',
        //     admin: true,
        //     email: 'jane@example.com'
        //     };
        //     var result = getLogin(user);
        //     console.log(result)


            // function canLegallyDrink(age) {
            //     var legal = age >= 18;
            //     if (legal) {
            //     return 'yes';
            //     } else {
            //     return 'no';
            //     }
            //     }
            //     var result = canLegallyDrink(14);
            //     console.log(result)

                // function containsCarbon(compound) {
                //     if (compound.indexOf('C') === -1) {
                //     return 'no';
                //     } else {
                //     return 'yes';
                //     }
                //     }
                //     var result = containsCarbon('H2O');
                //     console.log(result)


//                     var totalPokemon = 150;
// function caughtThemAll(numPokemon) {
// if (numPokemon !== totalPokemon) {
// return 'gotta catch them all';
// } else {
// return 'caught them all';
// }
// }
// var result = caughtThemAll(102);
// console.log(result)

// function isMeaningOfLife(num) {
//     if (num === 42) {
//     return 'yes';
//     } else {
//     return 'no';
//     }
//     }
//     var result = isMeaningOfLife(41);
//     console.log(result)


//     var fruits = ['Banana', 'Pear', 'Apple', 'Mango'];
// var sorted = fruits.sort(function(string1, string2) {
// return string1.length - string2.length;
// });
// var result = sorted[0];
// console.log(result)

// var users = [
//     { username: 'amy', admin: false },
//     { username: 'bob', admin: true },
//     { username: 'helen', admin: true },
//     { username: 'amir', admin: false },
//     { username: 'carmen', admin: false }
//     ];
//     function isAdmin(user) {
//     return user.admin;}
//     var admins = users.filter(isAdmin);
// var result = admins[0].username;

var everything = ['awesome', 'awesome', 'awesome'];
function isAwesome(item) {
return item === 'awesome';
}
var result = everything.filter(isAwesome).length === everything.length;
console.log(result)





