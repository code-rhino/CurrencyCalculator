function CurrencyCalculatorFactor(){

	var currencyCalculator = new Object();

	currencyCalculator.currencyObjCollection = [];

	currencyCalculator.RequestData = function(url) {
		var request = new XMLHttpRequest();
		request.open("GET", url);
		request.onreadystatechange = function(){
			if((request.status == 200) && (request.readyState == 4)){
				var dataJSON = JSON.parse(request.responseText);
				for(key in dataJSON){
					var currency = CurrencyObjectFactory(key, dataJSON[key].USD);
					currencyCalculator.currencyObjCollection.push(currency);
				}
				console.log(currencyCalculator.currencyObjCollection);
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