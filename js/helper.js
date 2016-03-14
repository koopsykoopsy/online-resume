// Vars for the Bio Page
var HTMLheaderName = '<h1>%data%</h1>';
var HTMLheaderRole = '<span id="role" class="white-text">%data%</span><hr>';

var HTMLbioStart = '<div class="bio-entry %column%"></div>';
var HTMLlinkedIn = '<div class="biopic-container"><a target="_blank" href="https://www.linkedin.com/in/%linkedin%">';
var HTMLbiopic = '<img class="biopic" src="%data%" alt"This is a headshot photo that links to LinkedIn" title="Click to go to LinkedIn"></a></div>';

var HTMLwelcomeMsg = '<div class="welcome-message">%data%</div><hr>';
var HTMLwelcomeMsgEmphasis = '<span class="emphasis">%emphasis%</span>';


var HTMLtopContactsStart = '<div id="contacts-title">Contact</div><ul id="topContacts" class="top-contacts-flex"></ul>';
var HTMLfooterContactsStart = '<ul id="footerContacts"><h2 id="footerContactsTitle">Let&#39;s Connect</h2></ul>';


var HTMLcontactGeneric = '<li id="contact"><span class="contact-label">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li id="contact"><span class="contact-label">mobile</span><span class="white-text"><a class="link" href="tel:+1-%data%">%data%</a></span></li>';
var HTMLemail = '<li id="contact"><span class="contact-label">email</span><span class="white-text"><a class="link" target="_blank" href="mailto:%data%">%data%</a></span></li>';
var HTMLtwitter = '<li id="contact"><span class="contact-label">twitter</span><span class="white-text"><a class="link" target="_blank" href="https://twitter.com/%data%">@%data%</a></span></li>';
var HTMLgithub = '<li id="contact"><span class="contact-label">github</span><span class="white-text"><a class="link" target="_blank" href=""https://github.com/%data%>%data%</a></span></li>';
var HTMLblog = '<li id="contact"><span class="contact-label">blog</span><span class="white-text"><a class="link" target="_blank" href="http:%data%.blogspot.com">%data%</a></span></li>';
var HTMLlocation = '<li id="contact"><span class="contact-label">location</span><span class="white-text"><a class="link" target="_blank" href="https://www.google.com/maps?q=%formattedLocation%">%originalLocation%</a></span></li>';

var HTMLskillStart = '<div id="skills-title">Skills</div><ul class="skills-flex"></ul>';
var HTMLskill = '<li id="%column%" class="white-text individualSkill">%data%</li>';

// Vars for the Work Page
var HTMLworkStart = '<div class="work-entry %column%"></div>';
var HTMLworkEmployer = '<div class="GENERAL-TITLE"><div id="work-employer">%data%</div>';
var HTMLworkTitle = '<div>%data%</div></div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="description-text"><br>%data%</p>';

// Vars for the Education Page

// School details
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<div class="GENERAL-TITLE"><div id="education-name">%data%</div>';
var HTMLschoolDegree = '<div>%data%</div></div>';
var HTMLschoolDates = HTMLworkDates;
var HTMLschoolLocation = HTMLworkLocation;
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

// Thesis details
var HTMLschoolThesis = '<div class="GENERAL-TITLE" id="thesis"><span class="white-text">Thesis | </span>%data%</div>';
var HTMLschoolThesisDates = '<div id="thesis-dates">%data%</div>';
var HTMLschoolThesisAbstract = '<br><div><p id="abstract"><span id="abstract-title">Thesis Abstract | </span>%data%</p></div>';

// Not printing the online classes details
var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<div class="GENERAL-TITLE" href="#">%data%';
var HTMLonlineSchool = ' - %data%</div><br>';
var HTMLonlineDates = HTMLworkDates;
var HTMLonlineURL = '<br><a href="#">%data%</a>';

// Vars for the Projects Page
var HTMLprojectStart = '<div class="project-entry %column%"></div>';
var HTMLprojectTitle = '<div class="GENERAL-TITLE" id="project-name">%data%</div>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = HTMLworkDescription;
var HTMLprojectImage = '<img class="project-image" src="%data%" alt"Image related to or describing this project">';

// Var for the Map Page
var googleMap = '<div id="map"></div>';



// Invokes internationalization flip upon name click
$(document).ready(function() {
  $('#name').click(function() {
    $('#name').html(switchName());
  });
});

// Allows name internationalization
function switchName() {
    var name = $("#name").html().trim().split(" ");
    var first = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
    var last = name[1];
    if (name[1] !== name[1].toUpperCase()) {
        last = last.toUpperCase();
    } else {
        last = last[0] + last.slice(1).toLowerCase();
    }
    return first + ' ' + last;
}

// Invokes click logger upon click
var clickLocations = [];

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

// Allows click logging
function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

// Building a custom Google Map

var map;    // declares a global map variable

// initializeMap() is called when page is loaded.
function initializeMap() {

  var locations;
  var mapOptions = {
    disableDefaultUI: true
  };

  // Creates the actual map (not to be displayed until appended in resumbeBuilder.js) 
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  // Spits back locations for bio, education, and work from JSON vars in resumeBuilder.js
  function locationFinder() {

    var locations = [];

    // No need to iterate on bio, as there's just one location
    locations.push(bio.contacts.location);

    // Iterates through school locations and adds to locations array
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // Iterates through work locations and adds to locations array
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var address = placeData.formatted_address;   // name of the city from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: 'Test'//name
    });

    // Creation and stylings of infoBubbles above map markers
    var infoBubble = new InfoBubble({
      map: map,
      content: address,
      shadowStyle: 1,
      backgroundColor: '#E25D33',
      margin: 0,
      padding: 0,
      color: '#282827',
      borderRadius: 5,
      arrowSize: 10,
      borderWidth: 2,
      borderColor: '#282827',
      disableAutoPan: true,
      hideCloseButton: true,
      arrowPosition: 30,
      arrowStyle: 2,
      backgroundClassName: 'infoBubble'
    });

    // Creates new method to track infoBubble openings and closings
    InfoBubble.prototype.opened = false;

    // Opens infoBubbles with click and closes on second click on
    // marker or second click elsewhere in the map area
    google.maps.event.addListener(marker, 'click', function() {
        if(infoBubble.opened){
          console.log('closing: ' + address);
          infoBubble.close();
          infoBubble.opened = false;
        }
        else {
          console.log('opening: ' + address);
          infoBubble.open(map, marker);
          infoBubble.opened = true;
        }
        google.maps.event.addListener(map, 'click', function() {
          infoBubble.close();
          infoBubble.opened = false;
        });
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in locationFinder()'s locations array and fires off
  Google place searches for each location, ultimately sending to the callback funciton
  */
  function pinPoster(locations) {

    // Creates Google place search service object to actually search for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through locations array, and creates a search object for each location
      locations.forEach(function(place){
      // the search request object
        var request = {
          query: place
        };

        // Actually searches the Google Maps API for location data and runs the callback
        // function with the search results after each search.
        service.textSearch(request, callback);
      });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // Actually calls locationFinder();
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in the array
  pinPoster(locations);
}


// Calls the initializeMap() function when page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for window resizing and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
