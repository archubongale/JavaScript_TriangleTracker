var triangletracker = function(side1, side2, side3) {
  if (((side1 + side2) > side3) && ((side2 + side3) > side1) && ((side3 + side1) > side2)) {
    return true;
  }
}

var kindoftriangle = function(side1, side2, side3) {
  if((side1 === side2) && (side2 === side3) && (side3 === side1)) {
    return "equilateral";
  } else if((side1 === side2) ||
  (side2 === side3) ||
  (side3 === side1)) {
    return "isosceles"
  } else {
    return "scalene"
  }

}



//
// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//
//     if(!result) {
//       $(".not").text("not");
//     }
//     else {
//       $(".not").text("");
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });