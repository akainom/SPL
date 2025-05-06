enum HTTPStatus {
    OK = 200, BadRequest = 400, UnAuthorised = 401, InternalServerError = 500
}

type ApiResponse <T> = [status:HTTPStatus, data:T | null, msg?:string]

function success<T>(data: T): ApiResponse<T> {
   let Response:ApiResponse<T> = [200, data, "message"];
   return Response;
}

function error<T>(data: T): ApiResponse<T> {
    let Response:ApiResponse<T> = [400, data, "error"];
    return Response;
 }

 console.log(success("|some data|"));
 console.log(error("|some error|"));