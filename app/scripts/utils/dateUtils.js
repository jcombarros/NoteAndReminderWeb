function convertDateTime(date, time){
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


