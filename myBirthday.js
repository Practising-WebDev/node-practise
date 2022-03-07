function Calculate() {
  let date = document.getElementById("bdaydate").value;
  let month = document.getElementById("bdaymonth").value;
  const bdaydatemoment = moment(month + `-` + date, "MM-DD");
  var todaydate = moment();
  let Away = bdaydatemoment.diff(todaydate, "days");

if (Away>0) {
    document.getElementById("answerdiv").innerHTML =
    "Your birthday is " + Away + " days away.";
  } else if(Away<0) {
    document.getElementById("answerdiv").innerHTML =
      "Hey buddy, Your birthday has already passed this year. Now be patient and wait for the next year.";
  } else if(Away==0) {
    document.getElementById("answerdiv").innerHTML =
      "Happy Birthday,Your Birthday (GPL) is Today.";
  } 

}
