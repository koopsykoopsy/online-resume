/*
This is empty on purpose! Your code to build the resume will go here.
 */

$("#main").append(["Sagar Doshi "]);

$("#main").append(["Speed of Light (cm/ns): " +299792458 * 100 / 1000000000]);

// How fast is light in centimeters/nanosecond? Click "Continue to quiz" when you've got the answer.

var awesomeThoughts = "I am Sagar, and I am AWESOME!";

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

console.log(awesomeThoughts);
console.log(funThoughts);

$("#main").append([funThoughts]);

var name = "Sagar Doshi";
var role = "Man About Town";
//var email = "<a href='mailto:doshi.sd@gmail.com'>doshi.sd@gmail.com</a>";
var email = "doshi.sd@gmail.com";
var phone = "(847) 668-5689";
var headshotURL = "images/sagarHeadshot.jpg";
var welcomeMessage = "Hello! I'm Sagar, and welcome to my online resume! Interested in my help for a project or an opportunity? Please don't hesitate to reach out.";
var skills = ['Technology', 'Internet Policy', 'Media', 'Web Development', 'IT Management', 'Business Strategy', 'Partnerships', 'Software Development', 'Video Games', 'Board Games'];

var bioOld = {
	"name" : name,
	"role" : role,
	"email" : email,
	"phone" : phone,
	"photo" : headshotURL,
	"welcome" : welcomeMessage,
	"skills" : skills
	};

var bio = {
	name : "Sagar Doshi",
	role : "Man About Town",
	email : "doshi.sd@gmail.com",
	phone : "(847) 668-5689",
	photo : "images/sagarHeadshot.jpg",
	welcome : "Hello! I'm Sagar, and welcome to my online resume! Interested in my help for a project or an opportunity? Please don't hesitate to reach out.",
	skills : ['Technology', 'Internet Policy', 'Media', 'Web Development', 'IT Management', 'Business Strategy', 'Partnerships', 'Software Development', 'Video Games', 'Board Games']
	};

keyList = Object.keys(bio);

var formatted = [
	HTMLheaderName.replace("%data%", bio[keyList[0]]),
	HTMLheaderRole.replace("%data%", bio[keyList[1]]),
	HTMLemail.replace("%data%", bio[keyList[2]]),
	HTMLmobile.replace("%data%", bio[keyList[3]]),
	HTMLbioPic.replace("%data%", bio[keyList[4]]),
	HTMLwelcomeMsg.replace("%data%", bio[keyList[5]]),
	//HTMLskills.replace("%data%", bio[keyList[6]])
	];


for (var i = 0; i < formatted.length; i++) {
	// console.log(keyList);
	// console.log('keyList[' + String(i) + '] is: ' + keyList[i]);
	// console.log('formatted[' + String(i) + '] is: ' + formatted[i]);
	$("#header").append(formatted[i]);
};

formatted.forEach(function(element) {
	console.log(element);
	$("#header").append(element);
});

bio['skills'].forEach(function(element) {
	// console.log("the current element is: " + element);
	HTMLskills = HTMLskills.replace("%data%", element);
	// console.log('this is HTMLskills: ' + HTMLskills);
	$("#header").append(HTMLskills);
	HTMLskills = HTMLskills.replace(element, "%data%");
});


// Need to access bio's keys for later formatting
keyList = Object.keys(bio);

// insert into HTML string for all bio keys except skills (which, as an array, requires extra work)
var formatted = [
	HTMLheaderName.replace("%data%", bio[keyList[0]]),
	HTMLheaderRole.replace("%data%", bio[keyList[1]]),
	HTMLemail.replace("%data%", bio[keyList[2]]),
	HTMLmobile.replace("%data%", bio[keyList[3]]),
	HTMLbioPic.replace("%data%", bio[keyList[4]]),
	HTMLwelcomeMsg.replace("%data%", bio[keyList[5]]),
	];

// actually place the newly formatted HTML strings into website
for (var i = 0; i < formatted.length; i++) {
	$("#header").append(formatted[i]);
};

// do the same by iterating over the skills array
bio['skills'].forEach(function(element) {
	HTMLskills = HTMLskills.replace("%data%", element);
	$("#header").append(HTMLskills);
	HTMLskills = HTMLskills.replace(element, "%data%");
});


// // d3 exercises from http://alignedleft.com/tutorials/d3/

// var w = 500;
// var h = 300;
// var barPadding = 1;

// var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//                 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

// var svg = d3.select("#header")
// 		  	.append("svg")
// 		  	.attr("width", w)
//    		  	.attr("height", h);

// svg.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    .attr("x", function(d, i) {
//     return i * (w/dataset.length);  //Bar width of 20 plus 1 for padding
// 	})
//    .attr("y", function(d) {
//    		return h - (d*5);
//    })
//    .attr("width", w/dataset.length - barPadding)
//    .attr("height", function(d) {
//    		return d * 5;
//    })
//    .attr("fill", function(d) {
//    		return "rgb(0, 0, " + (d*8) + ")";//#f5ae23")
//    });

// svg.selectAll("text")
//    .data(dataset)
//    .enter()
//    .append("text")
//    .text(function(d) {
//    		return d;
//    })
//    .attr("x", function(d, i) {
//         return i * (w / dataset.length);
//    })
//    .attr("y", function(d) {
//         return h - (d * 5) + 14;
//    })
//    .attr("fill", "white")
//    .attr("font-size", "11px")
//    .attr("text-anchor", "middle")
//    .attr("x", function(d, i) {
//         return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
//     });

