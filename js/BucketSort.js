var data = [2, 1, 5, 3, 6, 9, 10, 1];
var bucket = [];
var sortData = [];
var max = 11; //number of buckets
for (var i = 0; i < max; i++) { // create max numbert of buckets
  bucket[i] = "";
}
for (var i = 0; i < bucket.length; i++) {
  for (var j = 0; j < data.length; j++) {
    if (i == data[j]) {
      bucket[i] = data[j];
    }
  }
}
for (var i = 0; i < bucket.length; i++) {
  if (bucket[i] != "") {
    sortData.push(bucket[i]);
  }
}
console.log("data : " + data);
console.log("sortData : " + sortData);
