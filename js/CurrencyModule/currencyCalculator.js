function CurrencyCalculatorFactor(){

	var currencyCalculator = new Object();

	currencyCalculator.currencyObjCollection = [];

	currencyCalculator.RequestData = function(url) {
		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.onreadystatechange = function(){
			if((request.status == 200) && (request.readyState == 4)){
				console.log(request.responseText);
			}
		}
		request.send();
	}

	currencyCalculator.Convert = function(value){

	}

	currencyCalculator.Display = function(){

	}

	currencyCalculator.RequestData("http://coinabul.com/api.php");

	return currencyCalculator;

}

CurrencyCalculatorFactor();