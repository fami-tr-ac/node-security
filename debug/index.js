var parent = function () {
    child();
};

var child = function () {
    console.log("Hello World !");
};

parent();