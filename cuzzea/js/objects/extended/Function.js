// to use only for alert
Function.prototype.extend = function(fn) {
    var self = this;
    return function() {
        try {
            var returnValue1 = self(arguments[0]);
        } catch(e) {
        }
        try {
            var returnValue2 = fn(arguments[0]);
        } catch(e) {
        }

        return returnValue1 && returnValue2;
    };
};

if(!Function.prototype.bind) {

    Function.prototype.bind = function(oThis) {

        if( typeof this !== "function")// closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be fBound is not callable");

        var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP = function() {
        }, fBound = function() {
            return fToBind.apply(this instanceof fNOP ? this : oThis || window, aArgs.concat(Array.prototype.slice.call(arguments)));
        };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;

    };
}