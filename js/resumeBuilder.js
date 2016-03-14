// Vars and objects structured as directed by assignment specs

var bio = {
    "name": "Sagar Doshi",
    "role": "Dude About Town",
    "contacts": {
        "mobile": "847-668-5689",
        "email": "doshi.sd@gmail.com",
        "github": "koopsykoopsy",
        "linkedin": "doshisagar",
        "twitter": "doshisagar",
        "blog": "Beroshi",
        "location": "Washington, DC, USA"
    },
    "welcomeMessage": "HEY! I'M %emphasis%. I WANT TO MAKE THE %emphasis% HAPPEN %emphasis%. COME %emphasis%.",
    "skills": [
        "Technology",
        "Internet Policy",
        "Media",
        "Web Development",
        "IT Management",
        "Business Strategy",
        "Software Development",
        "Video Games",
    ],
    "biopic": "images/sagarHeadshot.jpg"
};

var education = {
    "schools": [{
        "name": "Stanford University",
        "location": "Stanford, CA, USA",
        "degree": "BA in Political Science with Honors in International Security",
        "majors": ["Political Science"],
        "dates": "September 2005 - June 2009",
        "url": "http://stanford.edu/"
    }],
    "onlineCourses" : [{
        "title" : "Introduction to Programming Nanodegree",
        "school" : "Udacity",
        "date" : "November 2015 – March 2016",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }]
};

var work = {
    "jobs": [{
        "employer": "African Leadership Academy",
        "title": "Technology Advisor",
        "location": "Johannesburg, South Africa",
        "dates": "November 2015 - March 2016",
        "description": "I'm doing a series of short-term projects at ALA for the few months I'm here in Johannesburg to help the school improve its operations, better pursue its mission, and be ready for future growth."
    }, {
        "employer": "Federal Communications Commission",
        "title": "Chief of Software Development",
        "location": "Washington, DC, USA",
        "dates": "April 2015 - July 2015",
        "description": "This was a short-term focus in order to help make progress on a few select IT projects of particular importance to the FCC's mission."
    }, {
        "employer": "Federal Communications Commission",
        "title": "Special Assistant to the Chairman",
        "location": "Washington, DC, USA",
        "dates": "November 2013 - July 2015",
        "description": "I served as righthand man to Chairman Tom Wheeler in the first half of his tenure at the helm of the FCC. I provided direct advice and support on a range of technology policy issues, including net neutrality and community broadband."
    }, {
        "employer": "Protocol Link, Inc.",
        "title": "Partner – Business Development",
        "location": "Vernon Hills, IL, USA",
        "dates": "July 2012 - September 2013",
        "description": "I developed a formal sales tracking process and mentorship model to help bring in new business more systematically."
    }, {
        "employer": "Google",
        "title": "Product Specialist",
        "location": "Mountain View, CA, USA",
        "dates": "April 2011 - June 2012",
        "description": "I supported the growth of the mobile internet through launching a series of products and product improvements, with particular product support for app developers relying on Google's ads for revenue."
    }, {
        "employer": "Google",
        "title": "Partner Manager – AdSense, DFP, AdExchange",
        "location": "Mountain View, CA, USA",
        "dates": "May 2010 - April 2011",
        "description": "I personally managed a series of web publishers relying on Google's ads for revenue, helping to grow my portfolio of tens of millions of dollars by a significant amount. My average 2011 performance against targets was 155%."
    }]
};

var projects = {
    "projects" : [{
        "title": "Project Compass",
        "dates": "February 2016 - March 2016",
        "description": "As a test of styling and CSS ability, I took a bare bones version of this Project Compass and updated it with colors, formats, and transitions to create a much more attractive display.",
        "images": [
        "http://www.project-compass.appspot.com/img?img_id=ahFzfnByb2plY3QtY29tcGFzc3InCxIIUGhvdG9NYXAiB2RlZmF1bHQMCxIFUGhvdG8YgICAgMDhigkM",
        "http://www.project-compass.appspot.com/img?img_id=ahFzfnByb2plY3QtY29tcGFzc3InCxIIUGhvdG9NYXAiB2RlZmF1bHQMCxIFUGhvdG8YgICAgMC1mwoM",
        "http://www.project-compass.appspot.com/img?img_id=ahFzfnByb2plY3QtY29tcGFzc3InCxIIUGhvdG9NYXAiB2RlZmF1bHQMCxIFUGhvdG8YgICAgIDyiAkM"
        // "http://www.project-compass.appspot.com/img?img_id=ahFzfnByb2plY3QtY29tcGFzc3InCxIIUGhvdG9NYXAiB2RlZmF1bHQMCxIFUGhvdG8YgICAgMDhigoM",
        // "http://www.project-compass.appspot.com/img?img_id=ahFzfnByb2plY3QtY29tcGFzc3InCxIIUGhvdG9NYXAiB2RlZmF1bHQMCxIFUGhvdG8YgICAgMCInQsM",
        // "http://www.project-compass.appspot.com/img?img_id=ahFzfnByb2plY3QtY29tcGFzc3InCxIIUGhvdG9NYXAiB2RlZmF1bHQMCxIFUGhvdG8YgICAgMD6kwoM",
        // "http://www.project-compass.appspot.com/img?img_id=ahFzfnByb2plY3QtY29tcGFzc3InCxIIUGhvdG9NYXAiB2RlZmF1bHQMCxIFUGhvdG8YgICAgMCcggoM",
        // "http://www.project-compass.appspot.com/img?img_id=ahFzfnByb2plY3QtY29tcGFzc3InCxIIUGhvdG9NYXAiB2RlZmF1bHQMCxIFUGhvdG8YgICAgMCInQkM",
        // "http://www.project-compass.appspot.com/img?img_id=ahFzfnByb2plY3QtY29tcGFzc3InCxIIUGhvdG9NYXAiB2RlZmF1bHQMCxIFUGhvdG8YgICAgMCInQoM",
        // "http://www.project-compass.appspot.com/img?img_id=ahFzfnByb2plY3QtY29tcGFzc3InCxIIUGhvdG9NYXAiB2RlZmF1bHQMCxIFUGhvdG8YgICAgIDDlQkM"
        ]
    }, {
        "title": "Open Internet",
        "dates": "February 2015 - March 2015",
        "description": "This order (regulation) by the FCC is the strongest protections ever put in place for Internet users to be certain that those companies who own the pipes granting us Internet access cannot dictate what we choose to lawfully do or where we choose to lawfully go on the Internet.",
        "images": [
        "https://transition.fcc.gov/files/logos/fcc-logo_black-on-white.jpg",
        "http://studentsforliberty.org/wp-content/uploads/2015/03/76582a77da3d81000ca6d19ea20e5924.gif",
        "http://www.wordstream.com/images/what-is-net-neutrality-video-blocked.jpg"
        ]
    }, {
        "title": "AdMob Ad Network Mediation",
        "dates": "February 2015 - March 2015",
        "description": "This product launch helped make it much easier for app developers using ads to fund their businesses to easily choose among their different ad networks in order to make sure they were squeezing as much money out of their app experience as possible.",
        "images": [
        "http://www.mobyaffiliates.com/wp-content/uploads/2015/06/AdMob-Logo.jpg",
        "https://lh3.ggpht.com/MXI3kwc-fJjJp125hTyks-aPzQu1nc6Ayx-5zSE26j7x2GPs_PRWgv8cXuFhnMvHv4xZikQm=w756"
        ]
    }]
};


// My own additional vars and objects to add features and simplify later work

// Will use the below data var unless global replace requirements call for regex
var data = "%data%";

var jobWebLink = {
    "African Leadership Academy": "<a target='_blank' href='http://www.africanleadershipacademy.org/'>African Leadership Academy</a>",
    "Federal Communications Commission": "<a target='_blank' href='https://www.fcc.gov/'>Federal Communications Commission</a>",
    "Protocol Link, Inc.": "<a target='_blank' href='http://www.protocollink.com/'>Protocol Link, Inc.</a>",
    "Google": "<a target='_blank' href='https://www.google.com/'>Google</a>"
};

// For colors in the welcome message
var emphasis = "%emphasis%";
var welcomeEmphasis = [
    "SAGAR",
    "FUTURE",
    "TODAY",
    "EXPLORE"];

var column = "%column%";
var bootstrapColumn = 'col-xs-12 col-sm-12 col-md-12 col-lg-4';

var thesisTitle = "PUTTING THE HOUSE IN ORDER: The Rise and Fall of the Homeland Security Council";
var thesisDate = "June 3, 2009";
var thesisAbstract = "The Homeland Security Council (HSC) coordinates homeland security policy across" +
" the government. Recently, there has been enormous pressure to merge the HSC with the National Security Council" +
". This thesis seeks to answer why the HSC is on the verge of this merger, despite the importance of homeland se" +
"curity to overall US security policy. The hypotheses, derived from the literature, consider whether a “flawed m" +
"andate,” under-resourcing, or presidential leadership style best answers that question. In analyzing these hypo" +
"theses, the study relies heavily on interviews. Somewhat surprisingly, the evidence suggests that the most comp" +
"elling explanation is not any of these obvious factors, but rather something much more mundane: the organizatio" +
"nal immaturity of the HSC. The thesis ends with recommendations to guide policymakers that are facing similar q" +
"uestions of presidential decision-making and the organization of the government at the highest levels.";

// Builds out the Bio Page and Contact Page
bio.display = function() {

    // Function to make a cooler welcome message
    function printWelcome() {
        var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage).replace(/%emphasis%/g, HTMLwelcomeMsgEmphasis);
        welcomeEmphasis.forEach(function(element) {
            formattedWelcome = formattedWelcome.replace(emphasis, element);
        });
        $("#header").prepend(formattedWelcome);
    }

    // Prints contacts in Bio Page on left
    function printTopContacts() {
        var formattedLocation = bio.contacts.location.replace(/,\s/g, "+");
        formattedLocation = HTMLlocation.replace(/%formattedLocation%/g, formattedLocation).replace(/%originalLocation%/g, bio.contacts.location);

        // Placing the column div
        $("#bio-details").append(HTMLbioStart.replace(column, bootstrapColumn));
        // Top Contacts: mobile, email, github, location
        $(".bio-entry").append([HTMLtopContactsStart.replace(column, bootstrapColumn)]);
        $("#topContacts").append([HTMLmobile.replace(/%data%/g, bio.contacts.mobile)]);
        $("#topContacts").append([HTMLemail.replace(/%data%/g, bio.contacts.email)]);
        $("#topContacts").append([HTMLgithub.replace(/%data%/g, bio.contacts.github)]);
        $("#topContacts").append(formattedLocation);
    }

    // Handles linking/printing the headshot in the center of the Bio Page 
    function printBiopic() {
        var formattedLinkedIn = HTMLlinkedIn.replace(/%linkedin%/g, bio.contacts.linkedin).replace(column, bootstrapColumn);
        
        // Placing the column div
        $("#bio-details").append(HTMLbioStart.replace(column, bootstrapColumn));
        // Inserting headshot and making it a link to LinkedIn profile
        $(".bio-entry:last").append(formattedLinkedIn + HTMLbiopic.replace(/%data%/g, bio.biopic));
    }

    // Prints the skills in Bio Page on right
    function printSkills() {
        // Placing the column div
        $("#bio-details").append(HTMLbioStart.replace(column, bootstrapColumn));
        
        // After initializing section, iterate through each skill
        $(".bio-entry:last").append(HTMLskillStart);

        bio.skills.forEach(function(element) {
            $(".skills-flex").append([HTMLskill.replace(data, element)]);
        });
    }

    // Prints contacts in Contact Page
    function printFooterContacts() {
        // Footer Contacts: mobile, email, twitter, github, blog
        $("#lets-connect").append(HTMLfooterContactsStart);
        $("#footerContacts").append([HTMLmobile.replace(/%data%/g, bio.contacts.mobile)]);
        $("#footerContacts").append([HTMLemail.replace(/%data%/g, bio.contacts.email)]);
        $("#footerContacts").append([HTMLtwitter.replace(/%data%/g, bio.contacts.twitter)]);
        $("#footerContacts").append([HTMLgithub.replace(/%data%/g, bio.contacts.github)]);
        $("#footerContacts").append([HTMLblog.replace(/%data%/g, bio.contacts.blog)]); 
    }

    printWelcome(); // First, the welcome message
    printTopContacts(); // Second, the contacts on the left
    printBiopic(); // Third, the biopic in the middle
    printSkills(); // Fourth, the skills on the right
    printFooterContacts(); // Last, the footer contacts in the way bottom section
};

// Builds out the Work Page
work.display = function() {

    function insertJobWebLink(string) {
        if (string in jobWebLink) {
            return jobWebLink[string];
        } else {
            return string;
        }
    }

    for (var i = 0; i < work.jobs.length; i++) {
        
        // Assigning column classes when kicking off
        var formattedWorkStart = HTMLworkStart.replace(column, bootstrapColumn);
        $("#workExperience").append(formattedWorkStart);

        // Making the employer names hyperlinks
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);

        formattedEmployer = formattedEmployer.replace(work.jobs[i].employer, insertJobWebLink(work.jobs[i].employer));

        // Formatting and then assigning remaining job properties
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);

        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};

// Builds out the Education Page
education.display = function() {
    $("#education").append(HTMLschoolStart);

    for (var i = 0; i < education.schools.length; i++) {
        // School var assignments
        var formattedName = HTMLschoolName.replace(data, education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        var formattedDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        var formattedLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        
        // Thesis var assignments
        var formattedThesisTitle = HTMLschoolThesis.replace(data, thesisTitle);
        var formattedThesisDate = HTMLschoolThesisDates.replace(data, thesisDate);
        var formattedDescription = HTMLschoolThesisAbstract.replace(data, thesisAbstract);

        $(".education-entry:last").append(formattedName + formattedDegree);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedThesisTitle);
        $(".education-entry:last").append(formattedThesisDate);
        $(".education-entry:last").append(formattedDescription);
    }
};

// Builds out the Projects Page
projects.display = function() {

    // Defining how to loop through and display all images
    function imagePrinter(array) {
        array.forEach(function(element) {
            var formattedImage = HTMLprojectImage.replace(data, element);
            $(".project-entry:last").append(formattedImage);
        });
        $(".project-entry:last").append("<br>");
    }

    // Prints most parts of a project; then calls imagePrinter for the pics
    function projectPrinter() {
        for (var i = 0; i < projects.projects.length; i++) {
            // Assigning column classes when kicking off
            var formattedProjectStart = HTMLprojectStart.replace(column, bootstrapColumn);
            $("#projects").append(formattedProjectStart);

            var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
            var formattedDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
            var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);

            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDescription);

            // Invoke imagePrinter() to loop through each image and display nicely
            imagePrinter(projects.projects[i].images);
        }
    }

    // This actually kicks off the cycle for this function
    projectPrinter();
};

// Appends the div to index.html that allows helper.js's map to actually appear
function displayMap() {
    $("#mapDiv").append(googleMap);
}

// Displays everything!
bio.display();
work.display();
education.display();
projects.display();

// Note, this can't be encapsulated, because the map isn't created within resumeBuilder.js
displayMap();
