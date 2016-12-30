// only work for 8 data,,,
var data = [4, 2, 7, 4, 3, 1, 5, 6];
var leftSlice = data.slice(0, data.length / 2); //divid half
var rightSlice = data.slice(data.length / 2, data.length);
function mergeSortLeft() {
    var result = [];
    var slice1 = leftSlice.slice(0, leftSlice.length / 2);
    var slice2 = leftSlice.slice(leftSlice.length / 2, leftSlice.length);
    if (slice1.length <= 2) { // conpair slice[0] & slice[1]
        slice1[0] < slice1[1] ? result.push(slice1[0], slice1[1]) : result.push(slice1[1], slice1[0]);
        slice2[0] < slice2[1] ? result.push(slice2[0], slice2[1]) : result.push(slice2[1], slice2[0]);
        leftSlice = result;
        return leftSlice;
    }
}
function mergeSortRight() {
    var result = [];
    var slice1 = rightSlice.slice(0, rightSlice.length / 2);
    var slice2 = rightSlice.slice(rightSlice.length / 2, rightSlice.length);
    if (slice1.length <= 2) {
        slice1[0] < slice1[1] ? result.push(slice1[0], slice1[1]) : result.push(slice1[1], slice1[0]);
        slice2[0] < slice2[1] ? result.push(slice2[0], slice2[1]) : result.push(slice2[1], slice2[0]);
        rightSlice = result;
        return rightSlice;
    }
}
var left = mergeSortLeft();
var right = mergeSortRight();
var sortData = [];
while (left.length > 0 && right.length > 0) { //if both.length are not 0, conpair left[0] &right[0]
    if (left[0] < right[0]) {
        sortData.push(left.shift()); //add left[0] to sortData[] & delete left[0]
    } else {
        sortData.push(right.shift()); //add right[0] to sortData[] & delete right[0]
    }
}
if (left.length == 0) {
    for (var i = 0; right.length > i; i++) {
        sortData.push(right[i]);
    }
}
if (right.length == 0) {
    for (var j = 0; left.length > j; j++) {
        sortData.push(left[j]);
    }
}
console.log("data : " + data);
console.log("sortData : " + sortData);

