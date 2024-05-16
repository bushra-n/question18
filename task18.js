"use strict";
// task 18 store the locations in an array
let placesToVisit = ["Tokiyo", "Pakistan", "America", "China", "Japan"];
// print the array in its original order
console.log("Original order:", placesToVisit);
// print array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());
// show array is still in its original order after sorting
console.log("Original order after sorting:", placesToVisit);
// print array in reverse alphabetical order without changing the order of original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// show the array is still in its original order
console.log("Original order after reverse sorting:", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Reverse order:", placesToVisit);
// Reverse the order of the list to get back to the orginal order
placesToVisit.reverse();
console.log("Back to the original order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("sorted in alphabetical order", placesToVisit);
// sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
