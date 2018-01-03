'use strict';
module.exports = function() {
    var hi = {}
    let setValue = function(key, value) {
        hi[key] = value;
    }

       let getValue = function(key) { 
           if(key === undefined || !hi[key])  {
            return null;
        } else {
            return hi[key];
        }
       
    }
    return {
        setValue: setValue,
        getValue: getValue
    }
    
};