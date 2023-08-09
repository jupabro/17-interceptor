import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const start = new Date().getTime();
        console.log("Request url:", req.urlWithParams, "start time:", start)

        return next.handle(req).pipe(
            tap((response) => {
                if (response instanceof HttpResponse) {
                    console.log("response received")
                }
                const elapsed = new Date().getTime() - start;
                console.log("execution time", elapsed)
            })
        )
    }
}


