import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { LoadingStatus } from './loading-status';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    loadingSubject = new Subject<LoadingStatus>();

    getLoading() {
        return this.loadingSubject
            .asObservable()
            .pipe(startWith(LoadingStatus.STOPPED));
    }

    start() {
        this.loadingSubject.next(LoadingStatus.LOADING);
    }

    stop() {
        this.loadingSubject.next(LoadingStatus.STOPPED);
    }

}