import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingStatus } from './loading-status';
import { LoadingService } from './loading.service';

@Component({
    selector: 'ap-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['loading.component.css']
})
export class LoadingComponent implements OnInit {

    loading$: Observable<string>;

    constructor(
        private service: LoadingService
    ) { }

    ngOnInit(): void {
        this.loading$ = this.service
            .getLoading()
            .pipe(map(loadingStatus => loadingStatus.valueOf()));
    }

 }