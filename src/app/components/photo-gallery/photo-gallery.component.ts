import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

/* Autor: Francesco Gorini , github: https://github.com/Gorofra */
@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class PhotoGalleryComponent implements OnInit {
  photos: string[] = [];
  loading: boolean = false;
  showLightbox: boolean = false;
  currentPhotoIndex: number = 0;
  private baseUrl = 'http://localhost:3000/uploads';

  constructor(private photoService: PhotoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.loading = true;
    
    this.photoService.getPhotos().subscribe({
      next: (response) => {
        this.photos = response.photos;
        this.loading = false;
      },
      error: (error) => {
        console.error('Errore caricamento foto:', error);
        this.loading = false;
      }
    });
  }

  getPhotoUrl(filename: string): string {
    return `${this.baseUrl}/${filename}`;
  }

  openLightbox(index: number): void {
    this.currentPhotoIndex = index;
    this.showLightbox = true;
  }

  closeLightbox(): void {
    this.showLightbox = false;
  }

  nextPhoto(): void {
    if (this.currentPhotoIndex < this.photos.length - 1) {
      this.currentPhotoIndex++;
    }
  }

  previousPhoto(): void {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    }
  }
}

