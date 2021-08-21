//creating my modules
// Create a module that returns the current date and time:
exports.myDateTime = function () {
    return Date();
};

// Use the exports keyword to make properties and methods available outside the module file.
//now to include my module in the file i need it i'd just need to import it using the require