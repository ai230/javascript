var data = [2, 1, 5, 3, 6];
var bucket = [];
var sortBucket = [];
var max = 6;
for (var i = 0; i < max; i++) { // create max numbert of bucket
  bucket[i] = 0; // input 0
}
for (var i = 0; i < bucket.length; i++) {
  for (var j = 0; j < data.length; j++) {
    if (i == data[j]) {
      bucket[i] = data[j];
    }
  }
}
console.log("bucket : " + bucket);
for (var i = 0; i < bucket.length; i++) {
  if (bucket[i] != 0) {
    sortBucket.push(bucket[i]);
  }
}
console.log("sortBucket : " + sortBucket);

var data = [2, 1, 8, 3, 6, 4];

function margSort() {
  var a = data.slice(0, data.length / 2);
  var b = data.slice(data.length / 2, data.length);
}
