/* Your code starts here */

/*TO DO:
1. create DOM elements that will display the data
2. access a json file, read it, extract it and save it as an object inside a variable
3. iterate through that variable, concatenate it (stitch them together) and display it

*/
var app = app || {}; //if not defined, it's empty by default

//putting a parenthesis before the word function() and after it and then followed by () (AT THE END) it doesnt have to be called?

app.main = (function(){



	var container = document.getElementById('container');

	container.innerHTML = 'Hello World';

	var getJSON = function(url, success, error){

		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true); //true = make it async
		xhr.onreadystatechange = function(){

			var status, data;
			if(xhr.readyState == 4){

				status = xhr.status;
				if(status == 200){

					data = JSON.parse(xhr.responseText);
					success(data);
				}else{
					error(status);
				}
			}

		};

		xhr.send();

	};

	var dataContainer = {};


	//conditions for the call to the ajax file

	var done = function(data){
		dataContainer = data;
		console.log(data);
		display();

	};

	var fail = function(err){
		console.log(err);

	};

	var display = function(){
		//(Greetings), my thesis is (medium), for (user) who (has this problem)
		var greeting = dataContainer.message[random(0,dataContainer.message.length - 1)]; // - 1 because the length of the array includes 0. for example (0,24) would be an array of 25
		var medium = dataContainer.medium[random(0,dataContainer.medium.length - 1)];
		var user = dataContainer.user[random(0,dataContainer.user.length - 1)];
		var problem = dataContainer.problem[random(0,dataContainer.problem.length - 1)];

		var displayText = greeting + ' my thesis is ' + medium + ' for ' + user + ' who ' + problem;
	
		container.innerHTML = displayText;
	};


	var init = function(){
	//calling our ajax file
	getJSON('data/wtf.json', done, fail);
	};

	return{

		init: init
	};

})();

window.addEventListener('DOMTContentLoaded', app.main.init()); //same as $(document).ready(function()) in jQuery

//app.main.init();
//app.main();

var random = function(min, max){

	return Math.floor((Math.random() * max ) + min);
};


/*
$.ajax({

	url: 'blah blah blah',
	success:
})
*/