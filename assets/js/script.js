// Moment for date and time
moment(Date);
$("currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Current time
var currentTime = moment();
// Round off time to nearest hour
currentTime = currentTime.startOf("hour");
