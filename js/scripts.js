var allGroceryItems = [];

function addItem(inputItem){
  if(!checkDuplicate(inputItem)){
    allGroceryItems.push(inputItem);
  } else {
    alert("Item is already in your grocery list.");
  }
}
//Checks for duplicate item in list.
function checkDuplicate(inputItem){
  var length = allGroceryItems.length;
  for(i = 0; i < length; i ++){
    if(allGroceryItems[i].toString()=="inputItem");
    return true;
  }
  return false;
}
function stringParser(inputString){
  var temp = new Array();
  temp = inputString.split(", ");
  return temp;
}
function addArrayToList(){
  var length = allGroceryItems.length;
  for(i = 0; i < length; i ++){
    $("#outputList").prepend("<li>"+allGroceryItems[i] + "</li>");
  }
}
function sortArray(){
  checkDuplicate.sort();
}
function capitalizeElement(){
  var length = allGroceryItems.length;
  var temp;
  var result;
  for(i = 0; i < length; i ++){
    temp = allGroceryItems[i].toString();
    temp = temp.split(' ');
    var tempLength = temp.length;
    for(i = 0; i < tempLength; i ++){
      result += temp[i].charAt(0).toUppercase() + " ";
    }
  }

  }
}
function toggle() {
  $("#idx").toggle();
  $("#idx2").toggle();
  $("#submitItem").toggle();
  $("#item").toggle();
  $("outputList").toggle();
}
$(document).ready(function(){
  $("#idx").click(function(){
    toggle();
  });
  $("#idx2").click(function(){
    alert(groceries.toString());
  });
  $("form#criterion").submit(function(event) {
    event.preventDefault();
    toggle();
  });

});
