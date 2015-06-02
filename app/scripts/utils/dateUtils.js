function convertDateTimeToString(date, time){
	var day = convertTwoDigits(date.getDate());
	var month = convertTwoDigits(date.getMonth() + 1);
	var year = date.getFullYear();

	var hour = convertTwoDigits(time.getHours());
	var minute = convertTwoDigits(time.getMinutes());

	var completionDate = day+"/"+month+"/"+year+" "+hour+":"+minute;

	return completionDate;
}

convertTwoDigits = function (number){
		if(number.toString().length == 1){
			return "0" + number;
		}
		else{
			if(number.toString().length == 2){
				return number;
			}
			else{
				return "00";
			}
		}
	}

function convertStringToDate(stringDate){
	var day = stringDate.substring(0,2);
	var month = stringDate.substring(3,5);
	var year = stringDate.substring(6,10);

	var date = new Date();
	date.setDate(day);
	date.setMonth(month-1);
	date.setFullYear(year);

	return date;
}

function convertStringToTime(dateTime){
	var hour = dateTime.substring(11,13);
	var minute = dateTime.substring(14,16);

	var date = new Date();
	date.setHours(hour);
	date.setMinutes(minute);
	date.setSeconds('');
	date.setMilliseconds('');

	return date;
}

function convertStringToDateTime(stringDateTime){
	var day = stringDateTime.substring(0,2);
	var month = stringDateTime.substring(3,5);
	var year = stringDateTime.substring(6,10);

	var hour = stringDateTime.substring(11,13);
	var minute = stringDateTime.substring(14,16);

	var date = new Date();
	date.setDate(day);
	date.setMonth(month-1);
	date.setFullYear(year);
	date.setHours(hour);
	date.setMinutes(minute);
	date.setSeconds('');
	date.setMilliseconds('');

	return date;
}
