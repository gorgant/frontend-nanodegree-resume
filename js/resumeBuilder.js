
var model = {

  "bio" : {
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
  },

  "work" : {
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
  },

  "projects" : {
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
  },

  "education" : {
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
  },

};


var octopus = {
  init: function() {
    view.init();
  },

  getBioInfo: function() {
    return model.bio;
  },

  getWorkInfo: function() {
    return model.work.jobs;
  },

  getProjectInfo: function() {
    return model.projects.projects;
  },

  getEducationInfo: function() {
    return model.education;
  }
}

var placeHolder = "%data%";

var view = {


  init: function() {
    view.displayBio();
    view.displayWork();
    view.displayProjects();
    view.displayEducation();
  },

  displayBio: function() {
    var formattedName = HTMLheaderName.replace(placeHolder,model.bio.name);
    var formattedRole = HTMLheaderRole.replace(placeHolder,model.bio.role);
    $("#main").prepend(formattedName, formattedRole);

    if(model.bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(var i = 0; i < model.bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace(placeHolder,model.bio.skills[i]);
        $("#skills").append(formattedSkills);
      };
    };
  },

  displayWork: function() {

    octopus.getWorkInfo().forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var formattedWorkEmployer = HTMLworkEmployer.replace(placeHolder, job.employer);
      var formattedWorkTitle = HTMLworkTitle.replace(placeHolder, job.title);
      var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
      var formattedWorkDates = HTMLworkDates.replace(placeHolder, job.dates);
      var formattedWorkLocation = HTMLworkLocation.replace(placeHolder, job.location);
      var formattedWorkDescription = HTMLworkDescription.replace(placeHolder, job.description);
      $(".work-entry:last").append(formattedEmployerTitle, formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
    });
  },

  displayProjects: function() {
    octopus.getProjectInfo().forEach(function(project) {
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
    });
  },

  displayEducation: function() {
    octopus.getEducationInfo().schools.forEach(function(school) {
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
    });
    $("#education").append(HTMLonlineClasses);
    octopus.getEducationInfo().onlineCourses.forEach(function(course) {
      var formattedOnlineTitle = HTMLonlineTitle.replace(placeHolder, course.title);
      var formattedOnlineSchool = HTMLonlineSchool.replace(placeHolder, course.school);
      var formattedOnlineDates = HTMLonlineDates.replace(placeHolder, course.dates);
      var formattedOnlineURL = HTMLonlineURL.replace(placeHolder, course.url);
      $("#education:last").append(formattedOnlineTitle,formattedOnlineSchool,formattedOnlineDates,formattedOnlineURL);
    });
  },
};

octopus.init();


// Track clicks on page
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

// Add button that formats the name in the First LAST format
$("#main").append(internationalizeButton);

function inName() {
  var name = model.bio.name.trim();
  var nameArray = name.split(" ");
  nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  nameArray[1] = nameArray[1].toUpperCase();
  var intFullName = nameArray.join (" ");
  return intFullName;
}

$("#mapDiv").append(googleMap);