import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mapToCanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})


/* Autor: Francesco Gorini , github: https://github.com/Gorofra */
export class PhotoService {
  private apiUrl = "http://localhost:3000/api";


  constructor(private http : HttpClient) { }

uploadPhoto(file: File): Observable<any> {
  const formData = new FormData();
  formData.append('photo', file);
  return this.http.post(`${this.apiUrl}/upload`, formData);
}

getPhotos(): Observable<any> {
  return this.http.get(`${this.apiUrl}/photos`);
}
}