
var bio = {
	"name": "Lal Mawia",
	"role": "Front-end Web Developer",
	"contact": {
		"mobile": "515-000-0000",
		"email": "tech.mawia@gmail.com",
		"github": "mawiaweb",
		"twitter": "@mawia",
		"location": "Iowa"
	},

	"welcomeMessage": " ",
	"bioPic" : "images/mawia3.png",
	"skills" : ["HTML", "CSS", "Bootstrap","Javascript", "jQuery", "JSON", "Wordpress", "Git"]
}

var work = {
	"jobs": [
	{
		"employer": "Web Development",
		"title": " Trainee",
		"location": "Des Moines, IA",
		"dates": " 2017 - present",
		"description": "Creat responsive websites with HTML, CSS, Bootstrap, jQuery,  and JavaScript."

	},
	{
		"employer": "Global Voices",
		"title": " Medical Interpreter",
		"location": "Des Moines, IA",
		"dates": " 2015 - present",
		"description": "Provide language interpreting services for patients with limited English proficiency at hospitals and clinics in Des Moines."
	},
	{
		"employer": " Gospel Baptist Church",
		"title": " Treasurer",
		"location": "Des Moines, IA",
		"dates": "2016 - present",
		"description": "Prepare and maintain records of contributions made by members and non-members through worship services.Keep accurate financial records including all the funds received and disbursed for audit."
	}
	]
}






var project1 = {
	"project2" : [
		{
			"title": "Color Game",
			"dates" : "June 2019",
			"description" : "Created a color game with HTML, CSS, and JavaScript",
			"images" : ["images/project1.png"]
		},

		{
			"title": "Responsive ",
			"dates" : "April 2019",
			"description" : "Created a basic responsive landing page with HTML and CSS",
			"images" : ["images/rwd.png"]

		},

		{
			"title": "To Do List",
			"dates" : "April 2019",
			"description" : "Created a to-do-list with HTML, CSS, Js and jQuery",
			"images" : ["images/todo-list.png"]
		},

		{
			"title": "Calculator",
			"dates" : "April 2019",
			"description" : "Created a simple calculator with HTML, CSS and JavaScript",
			"images" : ["images/calc.png"]
		}
	]

}



var education = {
	"school": [
	{
		"name": "Shalom Bible College and Seminary",
		"degree" : "Bachelor's Degree",
		"years" : "  Gradated in August, 2019 " ,
		"location": "West Des Moines, IA",
		"majors": "Christian Education",
		"url": "www.example.com"
	},


	{
			"name": "DMACC Community College",
			"degree" : " Diploma",
			"years" : " 2017 - 2018 ",
			"location": "Ankeny, IA",
			"majors" : "Web Development",
			"url" : "www.dmacc.edu"
		}

	]

}



var onlineClass = {	
		"onlineCourse": [
	{
		"title" : ["Responsive Web Design Certification (300 Hours)"],
		"onlineSchool": "Free Code Camp",
		"dates" : "August, 2018",
		"url": "www.freecodecamp.com"
	},

	
	 {
	
	 	"title": ["The Complete Web Developer Course "],
	 	"onlineSchool" : "Udemy",
	 	"dates" : " 2018 ",
	 	"url" : "www.udemy.com"
	 },


	
	 {
	 	"title": ["JavaScript", "Web Development"],
	 	"onlineSchool": "BitDegree",
	 	"dates" : "September, 2019",
	 	"url" : "www.bitdegree.com"
	 },

	  {
	 	"title": "CSS Fundamental",
	 	"onlineSchool": "Solo Learn",
	 	"dates" : "August, 2019",
	 	"url" : "www.sololearn.com"
	 },

	  {
	 	"title": "Web Desing Diploma",
	 	"onlineSchool": "Alison",
	 	"dates" : "August, 2015",
	 	"url" : "www.alison.com"
	 }

  ]
}


bio.mawia = function() {

	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage))


		if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++) 
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}



};


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});


function displayWork(){

	for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);


	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}

}


function workProject(){
	for(project in project1.project2){
		$("#projects").append(HTMLprojectStart);

		var formattedHTMLprojectStart = HTMLprojectTitle.replace("%data%", project1.project2[project].title);
		var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project1.project2[project].dates);
		var formattedHTMLprojectDescript = HTMLprojectDescription.replace("%data%", project1.project2[project].description);
		var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", project1.project2[project].images);

		$(".project-entry:last").prepend(formattedHTMLprojectImage);
		$(".project-entry:last").prepend(formattedHTMLprojectDescript);
		$(".project-entry:last").prepend(formattedHTMLprojectDates);
		$(".project-entry:last").prepend(formattedHTMLprojectStart);
	}
}


/*project1.display = function(){
	for(project in project1.project2){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", project1.project2[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", project1.project2[project].dates);
		$(".project-entry:last").prepend(formattedHTMLprojectDates);

		var formattedHTMLprojectDescript = HTMLprojectDescription.replace("%data%", project1.project2[project].description);
		$(".project-entry:last").prepend(formattedHTMLprojectDescript);

		if(project1.project2[project].images.length > 0){
			for (image in project1.project2[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", project1.project2[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
*/



function myEdu(){
	for(myedu in education.school ){
		$("#education").append(HTMLschoolStart);

		var formattedHTMLschoolName = HTMLschoolName.replace("%data%", education.school[myedu].name)
		var formattedHTMLschoolDegree = HTMLschoolDegree.replace("%data%", education.school[myedu].degree)
		var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%", education.school[myedu].years)
		var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%", education.school[myedu].location)
		var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%", education.school[myedu].majors);

		$(".education-entry:last").append(formattedHTMLschoolName);
		$(".education-entry:last").append(formattedHTMLschoolDegree);
		$(".education-entry:last").append(formattedHTMLschoolDates);
		$(".education-entry:last").append(formattedHTMLschoolLocation);
		$(".education-entry:last").append(formattedHTMLschoolMajor);
		
	}
}

myEdu();


function onlineCourse(){
	for(online in onlineClass.onlineCourse){
		$("#certificate").append(HTMLonlineClasses)

		
		var formattedHTMLonlineTitle = HTMLonlineTitle.replace("%data%", onlineClass.onlineCourse[online].title);
		var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", onlineClass.onlineCourse[online].onlineSchool);
		var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", onlineClass.onlineCourse[online].dates);
		var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%", onlineClass.onlineCourse[online].url);


		
		$(".education-entry:last").append(formattedHTMLonlineTitle);
		$(".education-entry:last").append(formattedHTMLonlineSchool);
		$(".education-entry:last").append(formattedHTMLonlineDates);
		$(".education-entry:last").append(formattedHTMLonlineURL);
	}
}







onlineCourse();
bio.mawia();
displayWork(); 
workProject();
/*project1.display();*/

$("#mapDiv").append(googleMap);

