
// new page function

function Newpage() {

	// body...
	document.getElementById('head').style.display = 'block';
	document.getElementById('dis').style.display = 'none';
}

//date function
var today = new Date();
var oldDate = new Date(1997, 9, 12, 0, 0);
var y = (today.getFullYear()+1 - oldDate.getFullYear())-1 ;
var m = Math.abs( (today.getMonth()+1) - oldDate.getMonth()) ;
var d = Math.abs(oldDate.getDate() - today.getDate());
var h  = Math.abs((oldDate.getHours() - today.getHours())) ;
var mi = Math.abs( (60 - oldDate.getMinutes() + today.getMinutes()) - 60 );
var s  = ((60 - oldDate.getSeconds()) + today.getSeconds())-6
document.getElementById("demo").innerHTML = y + " year's /" + m + " month's /" +  d + "days / " + h + " hours / " + mi + " minutes ";



/*
function  diffYMDHMS( date1, date2){

	let years = date1.diff(date2, 'year');
	date2.add(years,'years');

	let months = date1.diff(date2, 'months');
	date2.add(months,'months');

	let days = date1.diff(date2, 'days');
	date2.add(days,'days');

	let hours = date1.diff(date2, 'hours');
	date2.add(hours,'hours');

	let minutes = date1.diff(date2, 'minutes');
	date2.add(minutes,'minutes');

	let seconds = date1.diff(date2, 'seconds');


	alert(years + 'years' + months + 'months' + days + 'days' + hours + 'hours' + minutes + 'minutes' + seconds + 'seconds');

    return{ years, months, days, hours, minutes, seconds};
    	
}

var date1 = new Date();

var date2 = new Date(1997, 9, 12, 0);


*/











