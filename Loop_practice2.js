 //Write a for loop that will iterate from 50 to 20. For each iteration, if the current number is a multiple of 3, console.log the value.
 
 	for (var i = 50; i >= 20; i--) {
 		if (i % 3 === 0) {
 			console.log(i);
 	    }
 	}



 //Write out an "infinite loop" below. Don't run the loop in your console unless you are prepared to force quit your browser!!
 
 	while (true) {
 		console.log("This was a bad idea!");
 	}



 //Loop through this array and print every other value, starting with the first.
 	var classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];
 
 	for (var i = 0; i < classmates.length; i += 2) {
 	    console.log(classmates[i]);
 	}

 //Create a new array with the gluten-free options from this menu:
 	var menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];
 
 	var noGluten = [];
 
 	for (food in menu) {
 		if (menu[food].glutenFree) {
 			noGluten.push(menu[food].name);
 	    }
 	}
 