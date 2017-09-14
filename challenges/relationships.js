/*
We learned about relational operators and how they can classify the relationship between two values.
Your job is to write the function getRelationship(x,y) function, which should return a string representing
whether x is >, < or = y. For example:

var rel = getRelationship(2, 3);
console.log(rel); // <
If one or both of the values aren't numbers, your function should output:

"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
where [this value] and [that value] are replaced with the non-numerical values. The sentence should be
grammatically correct by outputting either is or are and pluralizing number if necessary.

For example:

var rel1 = getRelationship("this", 2);
console.log(rel1); // "Can't compare relationships because this is not a number"

var rel2 = getRelationship("that");
console.log(rel2) // "Can't compare relationships because that and undefined are not numbers"
Notice in the second example, because the y value was missing, the output said that undefined was not a number.
*/




function getRelationship(x,y) {
  var result = "";
  var xIsNum = true;
  var yIsNum = true;

  if(isNaN(x)) {
    xIsNum = false;
  }

  if(isNaN(y)) {
    yIsNum = false;
  }

  switch(x>y) {
    case true:
      result = ">";
      break;
    case false:
      if(xIsNum && yIsNum && x === y) {
        result = "=";
      } else if(xIsNum && yIsNum) {
        result = "<";
      } else if (xIsNum && !yIsNum) {
        result = "Can't compare relationships because " + y +" is not a number";
      } else if (!xIsNum && yIsNum) {
        result = "Can't compare relationships because " + x +" is not a number";
      } else {
        result = "Can't compare relationships because " + x +" and " + y + " are not numbers";
      }
  }
  return result;
}

