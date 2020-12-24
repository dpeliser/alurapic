import { Component, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

const API_URL_IMGS = `${environment.ApiUrl}/imgs/`;

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    private _url = '';

    @Input() description = '';

    @Input() set url(url: string) {
        this._url = url.startsWith('data') ? url : API_URL_IMGS + url;
    }

    get url() {
        return this._url;
    }

}