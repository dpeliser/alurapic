import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {

    transform(photos: Photo[], filter: string) {
        filter = filter.trim().toLocaleLowerCase();
        if (filter) {
            return photos.filter(photo => photo.description.toLocaleLowerCase().includes(filter));
        }
        return photos;
    }

}