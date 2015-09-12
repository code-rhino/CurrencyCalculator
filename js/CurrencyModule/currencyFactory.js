
function CurrencyObjectFactory(name, convertValue){
	var currencyObj = new Object();
	
	currencyObj.name = name;
	currencyObj.convertValue = convertValue;

	return currencyObj;
}

// var currency = CurrencyObjectFactory("dollar", 1);
