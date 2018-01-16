var allGroceryItems = [];

var addToGlobal = function(inputArray){
  inLength = inputArray.length;
  var myNewArray = [];
  for(i = 0; i < inLength; i ++){
    myNewArray.push(inputArray[i]);
  }
  return myNewArray;
}
function addArrayToList(inputArray){
  var length = inputArray.length;
  for(i = 0; i < length; i ++){
    allGroceryItems.push(inputArray[i]);
    $("#outputList").append("<li>"+ allGroceryItems[i] + "</li>");
  }
}
function sortArray(inputArray){
  inputArrayLength = inputArray.length;
  var tempArray = [];
  for(i =0; i < inputArrayLength; i ++){
    var temp = inputArray[i];
    temp = temp.charAt(0).toUpperCase() + temp.slice(1);
    tempArray.push(temp);
  }
  return tempArray.sort();
}
function stringParser(randomInput){
  var temp = new Array();
  temp = randomInput.split(", ");
  return temp;
}
// function removeDuplicates(inputArray){
//   var arrLength = inputArray.length;
//   var currentValue;
//   var outputArray = [];
//
//   for(i = 0; i < arrLength; i ++){
//     currentValue = inputArray[i];
//     for(j =0; j <arrLength; j ++){
//       if(inputArray[j]===currentValue){
//
//       } else {
//         outputArray.push(currentValue);
//       }
//     }
//
//   }
//   console.log(outputArray);
//   return outputArray;
// }

function toggle() {
  $("#idx").toggle();
  $("#idx2").toggle();
  $("#submitItem").toggle();
  $("#item").toggle();
  $("outputList").toggle();
}
function doEverything(inputItem){
  toggle();
  addArrayToList(addToGlobal(sortArray(stringParser(inputItem))));
}
$(document).ready(function(){
  $("#idx").click(function(){
    toggle();
  });
  $("#idx2").click(function(){
    alert(allGroceryItems.toString());
  });
  $("form#groceryInput").submit(function(event) {
    event.preventDefault();
    var item = $("#item").val();
    doEverything(item);
  });
});
