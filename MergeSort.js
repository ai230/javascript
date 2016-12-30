var data = [4, 2, 7, 4, 3, 1, 5, 6];
var sortData = data;
var leftSlice = sortData.slice(0, sortData.length / 2);
var rightSlice = sortData.slice(sortData.length / 2, sortData.length);

function mergeSortLeft() {//
  console.log("left");
  var result = [];
  var slice1 = leftSlice.slice(0, leftSlice.length / 2);
  var slice2 = leftSlice.slice(leftSlice.length / 2, leftSlice.length);
  console.log("slice1 : " + slice1 + " slice2 : " + slice2);
  console.log("sortData : " + sortData);
  if (slice1.length <= 2) {// conpair slice[0] & slice[1]// only for array[7]
    slice1[0] < slice1[1] ? result.push(slice1[0], slice1[1]) : result.push(slice1[1], slice1[0]);
    slice2[0] < slice2[1] ? result.push(slice2[0], slice2[1]) : result.push(slice2[1], slice2[0]);
    leftSlice = result;
    console.log("leftSlice : " + leftSlice);
    return leftSlice;
  }
}

function mergeSortRight() {
    console.log("right");
    var result = [];
    var slice1 = rightSlice.slice(0, rightSlice.length / 2);
    var slice2 = rightSlice.slice(rightSlice.length / 2, rightSlice.length);
    console.log("slice1 : " + slice1 + " slice2 : " + slice2);
    if (slice1.length <= 2) {
        slice1[0] < slice1[1] ? result.push(slice1[0], slice1[1]) : result.push(slice1[1], slice1[0]);
        slice2[0] < slice2[1] ? result.push(slice2[0], slice2[1]) : result.push(slice2[1], slice2[0]);
        rightSlice = result;
        console.log("rightSlice : " + rightSlice);
        return rightSlice;
    }
}
var left = mergeSortLeft();
var right = mergeSortRight();
var finalData = [];
console.log("left : " + left);
console.log("right : " + right);
console.log("leftlength : " + left.length);
console.log("Rightlength : " + right.length);
// doesn't work,,, if both.length are not 0, conpair first number of both numbers
while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
        finalData.push(left.shift());
        console.log("left : " + left);
    } else {
        finalData.push(right.shift());
        console.log("right : " + right);
    }
}
if (left.length == 0) {
    for (var i = 0; right.length > 0; i++) {
        finalData.push(right[i]);
        console.log("finalData : " + finalData);
    }
}
if (right.length == 0) {
    for (var j = 0; left.length > 0; j++) {
        finalData.push(left[j]);
        console.log("finalData : " + finalData);
    }
}
