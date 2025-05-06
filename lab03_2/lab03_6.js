"use strict";
var HTTPStatus;
(function (HTTPStatus) {
    HTTPStatus[HTTPStatus["OK"] = 200] = "OK";
    HTTPStatus[HTTPStatus["BadRequest"] = 400] = "BadRequest";
    HTTPStatus[HTTPStatus["UnAuthorised"] = 401] = "UnAuthorised";
    HTTPStatus[HTTPStatus["InternalServerError"] = 500] = "InternalServerError";
})(HTTPStatus || (HTTPStatus = {}));
function success(data) {
    let Response = [200, data, "message"];
    return Response;
}
function error(data) {
    let Response = [400, data, "error"];
    return Response;
}
console.log(success("|some data|"));
console.log(error("|some error|"));
