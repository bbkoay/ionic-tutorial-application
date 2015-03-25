var speakers = [
    {id:0, name: "Brian Leroux", pic: "brian_leroux.jpg", title: "Developer", twitter_id: "brianleroux", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:1, name: "Christophe Coenraets", pic: "christophe.jpg", title: "Developer", twitter_id:"ccoenraets", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:2, name: "Brett Rudd", pic: "brett.jpg", title: "Developer", twitter_id: "brettrudd", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:3, name: "Joe Bowser", pic: "joe_bowser.jpg", title: "Developer", twitter_id: "infil00p", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:4, name: "Michael Brooks", pic: "mwbrooks.jpg", title: "Developer", twitter_id:"mwbrooks", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:5, name: "Jason Weathersby", pic: "jasonweathersby.jpg", title: "Developer", twitter_id: "jasonweathersby", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:6, name: "Holly Schinsky", pic: "holly.jpg", title: "Developer", twitter_id:"devgirlfl", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:7, name: "Jessica Wong", pic: "jessicawong.jpg", title: "Developer", twitter_id:"jwongx", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:8, name: "John Smith", pic: "johnsmith.jpg", title: "Developer", twitter_id:"johnsmithguitar", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:9, name: "Laura Taylor", pic: "laurataylor.jpg", title: "Developer", twitter_id:"laurataylor_", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    {id:10, name: "Lisa Smith", pic: "lisasmith.jpg", title: "Developer", twitter_id:"historybeagle", bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
];

exports.findAll = function (req, res, next) {
    res.send(speakers);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(speakers[id]);
};