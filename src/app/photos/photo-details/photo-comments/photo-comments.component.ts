import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {
    
    @Input() photoId: number;
    
    comments$: Observable<PhotoComment[]>;

    constructor(private service: PhotoService) { }

    ngOnInit(): void {
        this.comments$ = this.service.getComments(this.photoId);
    }

 }