import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { PhotoComment } from './photo-comment';

const API_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) { }

    listFromUser(user: string) {
        return this.http.get<Photo[]>(`${API_URL}/${user}/photos`);
    }

    listFromUserPaginated(user: string, page: number) {
        const params = new HttpParams().append('page', page.toString());
        return this.http.get<Photo[]>(`${API_URL}/${user}/photos`, { params });
    }

    upload(description: string, allowComments: boolean, file: File) {
        const formData = new FormData();
        formData.append('description', description);
        formData.append('allowComments', allowComments.toString());
        formData.append('imageFile', file);
        return this.http.post(`${API_URL}/photos/upload`, formData);
    }

    findById(id: number) {
        return this.http.get<Photo>(`${API_URL}/photos/${id}`);
    }

    getComments(id: number) {
        return this.http.get<PhotoComment[]>(`${API_URL}/photos/${id}/comments`);
    }

}