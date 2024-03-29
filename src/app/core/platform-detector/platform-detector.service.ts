import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class PlatFormDetectorService {

    constructor(@Inject(PLATFORM_ID) private privateId: string) { }

    isPlatformBrowser(): boolean {
        return isPlatformBrowser(this.privateId);
    }

}