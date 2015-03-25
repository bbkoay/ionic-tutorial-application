var sessions = [
    {id:0 , title:"Introduction to Ionic", speaker:"Christophe Coenraets", pic: "christophe.jpg", time:"9:40am", 
		room:"Ballroom A", twitter_id:"ccoenraets", 
		description: "In this session, you'll learn how to build a native-like mobile application using the Ionic Framework, AngularJS, and Cordova."},
		
	{id:1 , title:"AngularJS in 50 Minutes", speaker:"Lisa Smith", pic: "lisasmith.jpg", time:"10:10am",
		room:"Ballroom B", twitter_id:"historybeagle", 
		description: "In this session, you'll learn everything you need to know to start building next-gen JavaScript applications using AngularJS."},
		
	{id:2 , title:"Contributing to Apache Cordova", speaker:"John Smith", time:"11:10am", pic: "johnsmith.jpg", time:"3:00pm",
		room:"Ballroom A", twitter_id:"johnsmithguitar", 
		description: "In this session, John will tell you all you need to know to start contributing to Apache Cordova and become an Open Source Rock Star."},
		
	{id:3 , title:"Mobile Performance Techniques", speaker:"Jessica Wong", time:"3:10Pm", pic: "jessicawong.jpg", time:"3:00pm",
		room:"Ballroom B", twitter_id:"jwongx",
		description: "In this session, you will learn performance techniques to speed up your mobile application."},
		
	{id:4 , title:"Building Modular Applications", speaker:"Laura Taylor", time:"2:00pm", pic: "laurataylor.jpg", time:"3:00pm",
		room:"Ballroom A", twitter_id:"laurataylor_", 
		description: "Join Laura to learn different approaches to build modular JavaScript applications."},	
	
	{id:5 , title:"Native-Like PhoneGap Apps with Ionic", speaker:"Christophe Coenraets", pic: "christophe.jpg", time:"3:00pm",
        room:"Theater", twitter_id: "ccoenraets", 
        description: "In this workshop we’ll build a full-blown mobile application from scratch for a real world scenario using PhoneGap and the Ionic+AngularJS framework stack."},
    
	{id:6 , title:"Choosing a UI Framework", speaker:"Holly Schinsky", pic: "holly.jpg", time:"9:00am",
        room:"Ballroom A", twitter_id:"devgirlfl", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},

    {id:7 , title:"Plugin Architecture", speaker:"Michael Brooks", pic: "mwbrooks.jpg", time:"11:00am",
        room:"Ballroom C", twitter_id:"mwbrooks", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},

    {id:8 , title:"PhoneGap Build: Building without an SDK", speaker:"Brett Rudd", pic: "brett.jpg", time:"2:00pm",
        room:"Ballroom D", twitter_id: "brettrudd", 
        description: "This presentation will cover the features of the service, focusing on some of our new-ish features such as our oath support, plugins and debugging. There will also be some exclusive sneak peeks of new features revolved around external and private plugins that will hopefully be open for immediate beta testing!  We’ll end on discussing the future and what is on our roadmap in the coming months."},

    {id:9 , title:"Many Views: Third Party WebViews on Android", speaker:"Joe Bowser", pic: "joe_bowser.jpg", time:"1:00pm",
        room:"Ballroom B", twitter_id: "infil00p", 
        description: "Learn about the recent changes in Cordova, and how developers now have the option to use Mozilla's GeckoView in addition to Intel Crosswalk and the default Android WebView on Cordova.  This new feature coming to Cordova on Android finally gives developers a way out of previously irritating bugs that there was no way to work around.  This will go over the ups and downs of developing for different webviews, as well as a demo showing the power of this new feature."},

    {id:10 , title:"PhoneGap Roadmap", speaker:"Brian Leroux", pic: "brian_leroux.jpg", time:"10:00am",
        room:"Ballroom F", twitter_id: "brianleroux",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},

    {id:11 , title:"Intro to AngularJS", speaker:"Holly Schinsky", pic: "holly.jpg", time:"4:45pm",
        room:"Ballroom A", twitter_id: "devgirlfl", 
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "},

    {id:12 , title:"Workshop: Intro to PhoneGap", speaker:"Michael Brooks", pic: "mwbrooks.jpg", time:"10:00am",
        room:"Theater", twitter_id: "mwbrooks", 
        description: "This workshop will provide an introduction to PhoneGap, the philosophy behind it and how to get started quickly using a variety of different tools available. The CLI, PhoneGap Developer App, PhoneGap Build and more will be shown and you will learn about the many frameworks available to choose from when building your mobile apps. You will also be shown debugging techniques and walk away with a solid understanding of what PhoneGap is all about."},

    {id:13 , title:"Architecting PhoneGap Apps ", speaker:"Christophe Coenraets", pic: "christophe.jpg", time:"1:00pm",
        room:"Theater", twitter_id: "ccoenraets", 
        description: "Learn how to architect large, complex, and native-like PhoneGap apps using HTML, JavaScript, and CSS. We will investigate mobile challenges and find solutions for them as well as learn all about Single Page Architecture, HTML templates, effective touch events, performance techniques, MVC Frameworks and more."},

    {id:14 , title:"Workshop: PhoneGap and Firefox OS", speaker:"Jason Weathersby", pic: "jasonweathersby.jpg", time:"3:00pm",
        room:"Theater", twitter_id: "jasonweathersby",
        description: "We'll begin with the current status of the Firefox OS Cordova integration, including demos of building and debugging basic Cordova Apps using Firefox’s new Web IDE. The rest of the workshop will be hands-on: we'll help you run your app on a Firefox OS device."}	
		
];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};
