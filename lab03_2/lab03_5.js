"use strict";
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
function logEvent(event) {
    console.log(event[0], event[1], event[2]);
}
logEvent([new Date(), LogLevel.INFO, "message"]);
