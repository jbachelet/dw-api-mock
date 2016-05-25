var Collection = function() {};

Collection.prototype.remove = function(obj) {};

Collection.prototype.removeAll = function(obj) {};

Collection.prototype.size = function() {};

module.exports = Collection;

/**
 * Supplements an existing JavaScript array with Demandware collection methods.
 * This is useful when you have a unit test where the method you're testing
 * expects a Demandware collection.
 */
module.exports.createFromArray = function(arr) {
    arr.size = function() {
        return arr.length;
    };

    arr.remove = function(obj) {
        arr.splice(arr.indexOf(obj), 1);
    };

    arr.removeAll = function(objs) {
        var index = 0;
        while (index < objs.length) {
            if (arr.indexOf(objs[index]) > -1) {
                arr.splice(objs[index], 1);
            } else {
                index++;
            }
        }
    };

    return arr;
};
