/*

Twelve people have walked on the Moon. They are:

Neil Armstrong
Buzz Aldrin
Pete Conrad
Alan Bean
Alan Shepard
Edgar Mitchell
David Scott
James Irwin
John W Young
Charles Duke
Eugene Cernan
Harrison Schmitt

You'll notice that these names are listed in the order that they first stepped on the Moon, not alphabetical order.
To alphabetize them, it would make sense to write their names as lastname, firstname.
For example: Neil Armstrong becomes Armstrong, Neil.

Finish the alphabetizer(_names) function, which takes in a names array (of length N) containing strings of names
and returns an alphabetized array of names in lastname, firstname format.

*/

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
  // Your code goes here!
  var reverseNames = [];
  for (var i = 0; i < names.length; i++) {
    var nameArray = names[i].split(" ");
    var reverseName = nameArray[1] + ", " + nameArray[0];
    reverseNames.push(reverseName);
  }
  var reverseNamesSorted = reverseNames.sort();
  return reverseNamesSorted;
};
