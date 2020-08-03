function changeUnitSystem(unitType) {
    var length, weight, area, volume;
    var length_section, weight_section, area_section, volume_section;
    zero = document.querySelectorAll('.zero input');
	length = document.querySelectorAll('.length input');
    weight = document.querySelectorAll('.weight input');
    area = document.querySelectorAll('.area input');
    volume = document.querySelectorAll('.volume input');

    length_section = document.getElementById('length_section');
    weight_section = document.getElementById('weight_section');
    area_section = document.getElementById('area_section');
    volume_section = document.getElementById('volume_section');

	switch (unitType) {
        case 'zero':
            for(var l = 0; l < length.length; l++) {
                length[l].disabled = true;
                length_section.style.display = "none";
			}
			for(var w = 0; w < weight.length; w++) {
                weight[w].disabled = true;
                weight_section.style.display = "none";
            }
            for(var a = 0; a < area.length; a++) {
                area[a].disabled = true;
                area_section.style.display = "none";
            }
            for(var v = 0; v < volume.length; v++) {
                volume[v].disabled = true;
                volume_section.style.display = "none";
			}
			break;
		case 'length':
			for(var l = 0; l < length.length; l++) {
                length[l].disabled = false;
                length_section.style.display = "block";
			}
			for(var w = 0; w < weight.length; w++) {
                weight[w].disabled = true;
                weight_section.style.display = "none";
            }
            for(var a = 0; a < area.length; a++) {
                area[a].disabled = true;
                area_section.style.display = "none";
            }
            for(var v = 0; v < volume.length; v++) {
                volume[v].disabled = true;
                volume_section.style.display = "none";
			}
			break;
		case 'weight':
			for(var l = 0; l < length.length; l++) {
                length[l].disabled = true;
                length_section.style.display = "none";
			}
			for(var w = 0; w < weight.length; w++) {
                weight[w].disabled = false;
                weight_section.style.display = "block";
            }
            for(var a = 0; a < area.length; a++) {
                area[a].disabled = true;
                area_section.style.display = "none";
            }
            for(var v = 0; v < volume.length; v++) {
                volume[v].disabled = true;
                volume_section.style.display = "none";
			}
            break;
        case 'area':
            for(var l = 0; l < length.length; l++) {
                length[l].disabled = true;
                length_section.style.display = "none";
			}
			for(var w = 0; w < weight.length; w++) {
                weight[w].disabled = true;
                weight_section.style.display = "none";
            }
            for(var a = 0; a < area.length; a++) {
                area[a].disabled = false;
                area_section.style.display = "block";
            }
            for(var v = 0; v < volume.length; v++) {
                volume[v].disabled = true;
                volume_section.style.display = "none";
			}
            break;
        case 'volume':
            for(var l = 0; l < length.length; l++) {
                length[l].disabled = true;
                length_section.style.display = "none";
			}
			for(var w = 0; w < weight.length; w++) {
                weight[w].disabled = true;
                weight_section.style.display = "none";
            }
            for(var a = 0; a < area.length; a++) {
                area[a].disabled = true;
                area_section.style.display = "none";
            }
            for(var v = 0; v < volume.length; v++) {
                volume[v].disabled = false;
                volume_section.style.display = "block";
			}
			break;
		default:
			break;
	}
}



function convertFromMiles(miles){
    var feet, inches, centimeters, meters, kilometers;

    feet = miles * 5280;
    inches = miles * 63360;
    centimeters = miles * 160934;
    meters = miles * 1609.34;
    kilometers = miles * 1.60934;

    document.getElementById('feet').value = feet.toFixed(5);
    document.getElementById('inches').value = inches.toFixed(5);
    document.getElementById('centimeters').value = centimeters.toFixed(5);
    document.getElementById('meters').value = meters.toFixed(5);
    document.getElementById('kilometers').value = kilometers.toFixed(5); 
}

function convertFromFeet (feet){
    var miles, inches, centimeters, meters, kilometers;

    miles = feet * 0.000189394;
    inches = feet * 12;
    centimeters = feet * 30.48;
    meters = feet / 3.281;
    kilometers = feet / 3281;

    document.getElementById('miles').value = miles.toFixed(5);
    document.getElementById('inches').value = inches.toFixed(5);
    document.getElementById('centimeters').value = centimeters.toFixed(5);
    document.getElementById('meters').value = meters.toFixed(5);
    document.getElementById('kilometers').value = kilometers.toFixed(5); 
}

function convertFromInches (inches) {
    var feet, miles, centimeters, meters, kilometers;

    feet = inches / 12;
    miles = inches / 63360;
    centimeters = inches * 2.54;
    meters = inches / 39.37;
    kilometers = inches / 39370;

    document.getElementById('feet').value = feet.toFixed(5);
    document.getElementById('miles').value = miles.toFixed(5);
    document.getElementById('centimeters').value = centimeters.toFixed(5);
    document.getElementById('meters').value = meters.toFixed(5);
    document.getElementById('kilometers').value = kilometers.toFixed(5); 
}

function convertFromCentimeters (centimeters){
    var feet, inches, miles, meters, kilometers;

    feet = centimeters / 30.48;
    inches = centimeters / 2.54;
    miles = centimeters / 160934; 
    meters = centimeters / 100;
    kilometers = centimeters / 100000;

    document.getElementById('feet').value = feet.toFixed(5);
    document.getElementById('inches').value = inches.toFixed(5);
    document.getElementById('miles').value = miles.toFixed(5);
    document.getElementById('meters').value = meters.toFixed(5);
    document.getElementById('kilometers').value = kilometers.toFixed(5);  
}

function convertFromMeters (meters){
    var miles, inches, feet, centimeters, kilometers;

    miles = meters / 1609;
    inches = meters * 39.37;
    feet = meters * 3.281;
    centimeters = meters * 100;
    kilometers = meters / 1000;

    document.getElementById('miles').value = miles.toFixed(5);
    document.getElementById('inches').value = inches.toFixed(5);
    document.getElementById('feet').value = feet.toFixed(5);
    document.getElementById('centimeters').value = centimeters.toFixed(5);
    document.getElementById('kilometers').value = kilometers.toFixed(5); 
}

function convertFromKilometers (kilometers) {
    var feet, miles, inches, centimeters, meters;

    feet = kilometers * 3281;
    miles = kilometers / 1.609;
    inches = kilometers * 39370;
    centimeters = kilometers * 100000;
    meters = kilometers * 1000;

    document.getElementById('feet').value = feet.toFixed(5);
    document.getElementById('miles').value = miles.toFixed(5);
    document.getElementById('inches').value = inches.toFixed(5);
    document.getElementById('centimeters').value = centimeters.toFixed(5);
    document.getElementById('meters').value = meters.toFixed(5);
}

function convertFromOunce (ounce) {
    var pound, grams, kilograms;

    pound = ounce * 16;
    grams = ounce * 28.35;
    kilograms = ounce / 35.274;

    document.getElementById('pound').value = pound.toFixed(5);
    document.getElementById('grams').value = grams.toFixed(5);
    document.getElementById('kilograms').value = kilograms.toFixed(5);
    
}

function convertFromPound(pound) {
    var ounce, grams, kilograms;

    ounce = pound / 16;
    grams = pound * 454;
    kilograms = pound / 2.205;

    document.getElementById('ounce').value = ounce.toFixed(5);
    document.getElementById('grams').value = grams.toFixed(5);
    document.getElementById('kilograms').value = kilograms.toFixed(5);

}

function convertFromGrams(grams) {
    var ounce, pound, kilograms;

    ounce = grams / 28.35;
    pound = grams / 454;
    kilograms = grams / 1000;

    document.getElementById('ounce').value = ounce.toFixed(5);
    document.getElementById('pound').value = pound.toFixed(5);
    document.getElementById('kilograms').value = kilograms.toFixed(5);
}

function convertFromKilograms(kilograms) {
    var ounce, pound, grams;

    ounce = kilograms * 35.274;
    pound = kilograms * 2.205;
    grams = kilograms * 1000;

    document.getElementById('ounce').value = ounce.toFixed(5);
    document.getElementById('pound').value = pound.toFixed(5);
    document.getElementById('grams').value = grams.toFixed(5);
}


function convertFromSqFeet (sqFeet) {
    var sqMiles, sqM, sqKm;

    sqMiles = sqFeet / 27878400;
    sqM = sqFeet / 10.764;
    sqKm = sqFeet / 10763910;

    document.getElementById('sqMiles').value = sqMiles.toFixed(15);
    document.getElementById('sqM').value = sqM.toFixed(5);
    document.getElementById('sqKm').value = sqKm.toFixed(15);

}

function convertFromSqMiles (sqMiles) {
    var sqFeet, sqM, sqKm;

    sqFeet = sqMiles * 27878400;
    sqM = sqMiles * 2589988,11;
    sqKm = sqMiles * 2.59;

    document.getElementById('sqFeet').value = sqFeet.toFixed(5);
    document.getElementById('sqM').value = sqM.toFixed(5);
    document.getElementById('sqKm').value = sqKm.toFixed(5);
}


function convertFromSqMeters (sqM) {
    var sqFeet, sqMiles, sqKm;

    sqFeet = sqM * 10.764;
    sqMiles = sqM / 2589988.11;
    sqKm = sqM / 1000000;

    document.getElementById('sqFeet').value = sqFeet.toFixed(5);
    document.getElementById('sqMiles').value = sqMiles.toFixed(15);
    document.getElementById('sqKm').value = sqKm.toFixed(15);
}

function convertFromSqKilometers (sqKm) {
    var sqFeet, sqMiles, sqM;

    sqFeet = sqKm * 10763910;
    sqMiles = sqKm / 2.59;
    sqM = sqKm * 1000000;

    document.getElementById('sqFeet').value = sqFeet.toFixed(5);
    document.getElementById('sqMiles').value = sqMiles.toFixed(5);
    document.getElementById('sqM').value = sqM.toFixed(5);
}


function convertFromFluidOunce (flOz) {
    var cup, gallon, milliliters, liters;

    cup = flOz / 8;
    gallon = flOz / 128;
    milliliters = flOz * 29.574;
    liters = flOz / 33.814;

    document.getElementById('cup').value = cup.toFixed(5);
    document.getElementById('gallon').value = gallon.toFixed(5);
    document.getElementById('milliliters').value = milliliters.toFixed(5);
    document.getElementById('liters').value = liters.toFixed(5);
}

function convertFromCup (cup) {
    var flOz, gallon, milliliters, liters;

    flOz = cup * 8;
    gallon = cup / 16;
    milliliters = cup * 237;
    liters = cup / 4.227;

    document.getElementById('flOz').value = flOz.toFixed(5);
    document.getElementById('gallon').value = gallon.toFixed(5);
    document.getElementById('milliliters').value = milliliters.toFixed(5);
    document.getElementById('liters').value = liters.toFixed(5);
}

function convertFromGallon (gallon) {
    var flOz, cup, milliliters, liters;

    flOz = gallon * 128;
    cup = gallon * 16;
    milliliters = gallon * 3785;
    liters = gallon * 3.785;

    document.getElementById('flOz').value = flOz.toFixed(5);
    document.getElementById('cup').value = cup.toFixed(5);
    document.getElementById('milliliters').value = milliliters.toFixed(5);
    document.getElementById('liters').value = liters.toFixed(5);
}

function convertFromMilliliters (milliliters) {
    var flOz, cup, gallon, liters;

    flOz = milliliters / 29.574;
    cup = milliliters / 237;
    gallon = milliliters / 3785;
    liters = milliliters / 1000;

    document.getElementById('flOz').value = flOz.toFixed(5);
    document.getElementById('cup').value = cup.toFixed(5);
    document.getElementById('gallon').value = gallon.toFixed(5);
    document.getElementById('liters').value = liters.toFixed(5);

}

function convertFromLiters (liters) {
    var flOz, cup, gallon, milliliters;

    flOz = liters * 33.814;
    cup = liters * 4.227;
    gallon = liters / 3.785;
    milliliters = liters * 1000;

    document.getElementById('flOz').value = flOz.toFixed(5);
    document.getElementById('cup').value = cup.toFixed(5);
    document.getElementById('gallon').value = gallon.toFixed(5);
    document.getElementById('milliliters').value = milliliters.toFixed(5);
}