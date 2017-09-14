/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
  "name" : "gorGant Ishktar",
  "role" : "Moth Catcher",
  "welcomeMessage" : "Hi, I'm a proud moth catcher descended from an esteemed lineage of some of the finest moth catchers to grace this earth.",
  "biopic" : "http://lorempixel.com/400/400/cats",
  "contacts" : {
    "mobile" : "(917) 513-2300",
    "email" : "gorgant@hotmail.com",
    "github" : "gorgant",
    "twitter" : "gorgant",
    "location" : "New York City"
  },
  "skills" : ["Moth catching", "Advanced moth catching", "Soup de Moth making"]
}

var work = {
  "jobs" :  [
    {
      "employer" : "Moth Monters Inc.",
      "title" : "Net Boy",
      "location" : "New York, NY",
      "dates" : "2012 - 2014",
      "description" : "Caught some of the more common species of moths, primarily brown dusters and cream clippers"
    },
    {
      "employer" : "Six Legs and Wings",
      "title" : "Thorax Specialist",
      "location" : "Chicago, IL",
      "dates" : "2014-2016",
      "description" : "Inspected the midsections of a rather endgagered population of speckeled bloom blasters."
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "A Mothy Experiment",
      "dates" : 2014,
      "description" : "Examining the impact of various seditives on moth energy",
      "images" : ["http://via.placeholder.com/200x200","http://via.placeholder.com/200x200","http://via.placeholder.com/200x200"]
    },
    {
      "title" : "Exploring Moth Dust",
      "dates" : 2017,
      "description" : "Exploring the various applications of moth dust around the world",
      "images" : ["http://via.placeholder.com/200x200","http://via.placeholder.com/200x200","http://via.placeholder.com/200x200"]
    }
  ]
}

var education = {
  "schools" : [
    {
      "name" : "Mothery Institute",
      "location" : "Flapsdorf",
      "degree" : "BA",
      "majors" : ["Netting", "Plucking"],
      "dates" : "2005 - 2009",
      "url" : "www.amazon.com"
    },
    {
      "name" : "The Grand Wingery",
      "location" : "Philadelphia, PA",
      "degree" : "MS",
      "majors" : ["Leg Tweaking"],
      "dates" : "2009-2011",
      "url" : "www.bing.com"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Mastering E-Mothing",
      "school" : "Digital Moth Masters",
      "dates" : 2012,
      "url" : "www.udacity.com"
    },
    {
      "title" : "Virtual Moth Flight Patters",
      "school" : "Digital Moth Masters",
      "dates" : 2013,
      "url" : "www.udacity.com"
    }
  ]
}

var placeHolder = "%data%";


// Add bio info
var formattedName = HTMLheaderName.replace(placeHolder,bio.name);
var formattedRole = HTMLheaderRole.replace(placeHolder,bio.role);
$("#main").prepend(formattedName, formattedRole);

if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for(var i = 0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace(placeHolder,bio.skills[i]);
    $("#skills").append(formattedSkills);
  }
}


// Add job info
work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace(placeHolder, job.employer);
    var formattedWorkTitle = HTMLworkTitle.replace(placeHolder, job.title);
    var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
    var formattedWorkDates = HTMLworkDates.replace(placeHolder, job.dates);
    var formattedWorkLocation = HTMLworkLocation.replace(placeHolder, job.location);
    var formattedWorkDescription = HTMLworkDescription.replace(placeHolder, job.description);
    $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
  })
}

work.display();


// Add project info
projects.display = function() {
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace(placeHolder, project.title);
    var formattedProjectDates = HTMLprojectDates.replace(placeHolder, project.dates);
    var formattedProjectDescription = HTMLprojectDescription.replace(placeHolder, project.description);
    var formattedProjectImageGroup = "";
    project.images.forEach(function(image) {
      var formattedProjectImage = HTMLprojectImage.replace(placeHolder, image);
      formattedProjectImageGroup += formattedProjectImage;
    })
    $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImageGroup);
  })
}

projects.display();

// Add education info
education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace(placeHolder, school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace(placeHolder, school.degree);
    var formattedSchoolDates = HTMLschoolDates.replace(placeHolder, school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace(placeHolder, school.location);
    var formattedSchoolMajorGroup = "";
    school.majors.forEach(function(major) {
      var formattedSchoolMajor = HTMLschoolMajor.replace(placeHolder, major);
      formattedSchoolMajorGroup += formattedSchoolMajor;
    })
    $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajorGroup);
  })
  $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(course) {
    var formattedOnlineTitle = HTMLonlineTitle.replace(placeHolder, course.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace(placeHolder, course.school);
    var formattedOnlineDates = HTMLonlineDates.replace(placeHolder, course.dates);
    var formattedOnlineURL = HTMLonlineURL.replace(placeHolder, course.url);
    $("#education:last").append(formattedOnlineTitle,formattedOnlineSchool,formattedOnlineDates,formattedOnlineURL);
  })
}

education.display();


// Track clicks on page
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

// Add button that formats the name in the First LAST format
$("#main").append(internationalizeButton);

function inName() {
  var name = bio.name.trim();
  var nameArray = name.split(" ");
  nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  nameArray[1] = nameArray[1].toUpperCase();
  var intFullName = nameArray.join (" ");
  return intFullName;
}

$("#mapDiv").append(googleMap);


/* These two examples below use the old-school version of pulling from arrays */

// Add job info (example 1)
// function displayWork() {
//   for(job in work.jobs) {
//     $("#workExperience").append(HTMLworkStart);
//     if(work.jobs.hasOwnProperty(job)) {
//       var formattedWorkEmployer = HTMLworkEmployer.replace(placeHolder, work.jobs[job].employer);
//       var formattedWorkTitle = HTMLworkTitle.replace(placeHolder, work.jobs[job].title);
//       var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
//       var formattedWorkDates = HTMLworkDates.replace(placeHolder, work.jobs[job].dates);
//       var formattedWorkLocation = HTMLworkLocation.replace(placeHolder, work.jobs[job].location);
//       var formattedWorkDescription = HTMLworkDescription.replace(placeHolder, work.jobs[job].description);
//       $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
//     }
//   }
// }

// displayWork();


// Add project info (example 2)
// projects.display = function() {
//   for(project in projects.projects) {
//     $("#projects").append(HTMLprojectStart);
//     if(projects.projects.hasOwnProperty(project)) {
//       var formattedProjectTitle = HTMLprojectTitle.replace(placeHolder, projects.projects[project].title);
//       var formattedProjectDates = HTMLprojectDates.replace(placeHolder, projects.projects[project].dates);
//       var formattedProjectDescription = HTMLprojectDescription.replace(placeHolder, projects.projects[project].description);
//       var formattedProjectImageGroup = "";
//       for(image in projects.projects[project].images) {
//         if(projects.projects[project].images.hasOwnProperty(image)) {
//           var formattedProjectImage = HTMLprojectImage.replace(placeHolder, projects.projects[project].images[image]);
//           formattedProjectImageGroup += formattedProjectImage;
//         }
//       }
//       $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImageGroup);
//     }
//   }
// }

// projects.display();

// work.jobs.forEach(function(job)) {
//   $("#workExperience").append(HTMLworkStart);
//   var formattedWorkEmployer = HTMLworkEmployer.replace(placeHolder, job.employer);
//   var formattedWorkTitle = HTMLworkTitle.replace(placeHolder, job.title);
//   var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
//   var formattedWorkDates = HTMLworkDates.replace(placeHolder, job.dates);
//   var formattedWorkLocation = HTMLworkLocation.replace(placeHolder, job.location);
//   var formattedWorkDescription = HTMLworkDescription.replace(placeHolder, job.description);
//   $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
// }

// work.jobs.forEach(function(job)) {
//   $("#workExperience").append(HTMLworkStart);
//   var formattedWorkEmployer = HTMLworkEmployer.replace(placeHolder, work.jobs[job.index].employer);
//   var formattedWorkTitle = HTMLworkTitle.replace(placeHolder, work.jobs[job.index].title);
//   var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
//   var formattedWorkDates = HTMLworkDates.replace(placeHolder, work.jobs[job.index].dates);
//   var formattedWorkLocation = HTMLworkLocation.replace(placeHolder, work.jobs[job.index].location);
//   var formattedWorkDescription = HTMLworkDescription.replace(placeHolder, work.jobs[job.index].description);
//   $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
// }

// work.jobs.forEach(function(job)) {
//   $("#workExperience").append(HTMLworkStart);
//   var formattedWorkEmployer = HTMLworkEmployer.replace(placeHolder, this.employer);
//   var formattedWorkTitle = HTMLworkTitle.replace(placeHolder, this.title);
//   var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
//   var formattedWorkDates = HTMLworkDates.replace(placeHolder, this.dates);
//   var formattedWorkLocation = HTMLworkLocation.replace(placeHolder, this.location);
//   var formattedWorkDescription = HTMLworkDescription.replace(placeHolder, this.description);
//   $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
// }







/* Old stuff

// var formattedName = HTMLheaderName.replace(placeHolder,bio.name);
// var formattedRole = HTMLheaderRole.replace(placeHolder,bio.role);
// var formattedContact = HTMLcontactGeneric.replace(placeHolder,bio.contact);
// var formattedBioPic = HTMLbioPic.replace(placeHolder,bio.picture);
// var formattedWelcomeMsg = HTMLwelcomeMsg.replace(placeHolder, bio.message);
// var formattedSkills = HTMLskills.replace(placeHolder,bio.skills);


// var formattedWorkTitle = HTMLworkTitle.replace(placeHolder,work.position);
// var formattedSchoolName = HTMLschoolName.replace(placeHolder,education.school);

// $("#main").prepend(formattedName, formattedRole);
// $("#header").append(formattedBioPic, formattedWelcomeMsg, HTMLskillsStart,formattedSkills);
// $("#workExperience").append(HTMLworkStart,formattedWorkTitle);
// $("#education").append(HTMLschoolStart,formattedSchoolName);
// $("#lets-connect").append(formattedContact);


$("#main").append("Gorgant Ishktar");

console.log(firstName);

var awesomeThoughts = "I am " + firstName + " and I am AWESOME!";

console.log(awesomeThoughts);

var newEmail = email.replace("hotmail","gmail");

console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

$("#main").append(" " + funThoughts);
*/


// var s = "audacity";

// var udacityizer = function(s) {
//     // Right now, the variable s === "audacity"
//     // Manipulate s to make it equal to "Udacity"
//     // Your code goes here!
//     s = s.slice(1);
//     s = s.replace("u","U");

//     return s;
// };

// // Did your code work? The line below will tell you!
// console.log(udacityizer(s));