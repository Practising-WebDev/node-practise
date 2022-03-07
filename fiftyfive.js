var day = moment();

document.getElementById("currentdate").innerHTML =
  "Current Date : " + day.format("DD/MM/YYYY");
var changeddate = moment().add(55, "days");
document.getElementById("changeddate").innerHTML =
  "After 55 days : " + changeddate.format("DD/MM/YYYY");
