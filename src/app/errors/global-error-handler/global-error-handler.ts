import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/user/user.service';
import * as StackTrace from 'stacktrace-js';
import { ServerLogService } from './server-log-service';
import { environment } from '../../../environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(
        private injector: Injector
    ) { }

    handleError(error: any): void {
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const message = error.message ? error.message : error.toString();

        if (environment.production) {
            router.navigate(['/error']);
        }

        StackTrace
            .fromError(error)
            .then(stackFrames => {
                const stack = stackFrames.map(frame => frame.toString()).join('\n');
                const userName = userService.getUserName();
                console.log(message);
                console.log(stack);
                serverLogService.log({
                    message,
                    url,
                    stack,
                    userName
                }).subscribe(
                    () => console.log('Error log saved in server'),
                    err => {
                        console.log('Failed to save error log in server');
                        console.error(err);
                    }
                );
            });
    }

}