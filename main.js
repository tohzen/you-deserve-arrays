/******************
 * YOUR CODE HERE *
 ******************/


 
function getFirstItemFrom(arr) {
  return arr[0]
}

function getLastItemFrom(arr) {
  return arr[arr.length-1]
}

function getIndex3(arr) {
  if (arr.length >=4) {
    return arr[3];
  } else {
    return arr[arr.length -1];
  }
}

function isLongList(arr) {
  if(arr.length >=10) {
    return true
  } else {
    return false
  }

}

function firstItemIsNumber(arr) {
  if(typeof arr[0] === "number") {
    return true
  } else
  return false
}

function secondCharOfThirdString(arr) {
  const str3 = arr[2];
  return str3[1];
}




 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

// getFirstItemFrom: takes in an array as a parameter and returns the first item from that array.

// getLastItemFrom: takes in an array as a parameter and returns the last item from that array.

// getIndex3: takes in an array as a parameter and returns the item at the 3rd index. If there are not four items (i.e., if there is no index 3), it returns the value at the last index.

// isLongList: takes in an array as a parameter and returns a boolean indicating whether the array's length is at least 10.

// firstItemIsNumber: takes in an array as a parameter and returns a boolean indicating whether or not the first item in the array is a number.

// secondCharOThirdString: takes in an array as a parameter and returns the second character in the third item in the array. We'll assume that that third item is a string for now, but a good function would check that's true! (In the same way the previous question checked if it's a number, if you did it the easy way.)








if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
